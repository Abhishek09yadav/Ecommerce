const port = process.env.PORT || 4000;
const baseUrl = process.env.BASE_URL || `http://localhost:${port}`;


const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Database Connection with mongodb
mongoose.connect('mongodb+srv://Ecommerce:Z1*6$5*7A4$qC&@cluster0.dwmcu.mongodb.net/e-commerce')

app.get("/", (req, res) => {
    res.send("Welcome to Ecommerce!");
})


// Image storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);

    }
})
const upload = multer({storage: storage});

// schema for creating product
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {type: String, required: true},
    category: {type: String, required: true},
    new_price: {type: Number, required: true},
    old_price: {type: Number, required: true},
    date: {type: Date, default: Date.now},
    available: {type: Boolean, default: true},
})

app.post('/addProduct', async (req, res) => {
    let products = await Product.find({})
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else
        id = 1;


    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
        date: req.body.date,
    });
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success: true,
        name: req.body.name,
    })
})

// Creating api for deleting product
app.post('/removeProduct', async (req, res) => {
    await Product.findOneAndDelete({id: req.body.id,});
    console.log('removed')
    res.json({success: true, name: req.body.name, message: 'Product removed'});
})
// Creating api for getting all products
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    res.send(products);
    console.log("All products Fetched");
})
//Schema creating for use model
const Users = mongoose.model('Users', {
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    cartData: {type: Object},
    date: {type: Date, default: Date.now},

});
// Creating endpoint for registering the user
app.post('/signup', async (req, res) => {
    let check = await Users.findOne({email: req.body.email});
    if (check) {
        return res.status(400).json({success: false, error: 'Email already exists'})
    }
    let cart = {}
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })
    await user.save();
    const data = {
        id: user.id,

    }
    const token = jwt.sign(data, 'secret_ecom')
    res.json({success: true, token})
})

app.listen(port, (error) => {
    if (!error) {
        console.log(
            "server running on port " + port
        )
    } else {
        console.log("Error: " + error)
    }
})
// Creating endpoint for user login
app.post('/login', async (req, res) => {
    let user = await Users.findOne({email: req.body.email});
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {user: {id: user.id}}
            const token = jwt.sign(data, 'secret_ecom');
            res.json({success: true, token})
        } else {
            res.json({success: false, error: 'Wrong password'})
        }
    } else {
        res.json({success: false, error: "Wrong Email id"})
    }
})
// creating endpoint for newCollection data
app.get('/newCollection', async (req, res) => {
    let products = await Product.find({});
    let newCollection = products.slice(-8);
    console.log("newCollection", newCollection);
    res.send(newCollection);
})
// creating endpoint for popular in women
app.get('/popularInWomen', async (req, res) => {
    let products = await Product.find({category: "women"});
    let popular_in_women = products.slice(0, 4);
    res.send(popular_in_women);
})
//creating middleware to fetch user
const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).json({success: false, error: 'No token provided'});
    } else {
        try {
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        } catch (e) {
            res.status(401).send({success: false, error: 'token validation failed'});
        }
    }
}
// creating endpoint for adding product in cartdata
app.post('/addtocart', fetchUser, async (req, res) => {
    // console.log('add to cart  ', req.body, req.user);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    console.log('User:', req.user);
    console.log('added to cart: product id:', req.body.itemId)
    let userData = await Users.findOne({_id: req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData})
    res.send({success: true, message: "Added to cart"})
})

// creating endpoint for removing product in cartdata
app.post('/removefromcart', fetchUser, async (req, res) => {
    let userData = await Users.findOne({_id: req.user.id});
    console.log('removed from cart: product id:', req.body.itemId)
    userData.cartData[req.body.itemId] > 0 ? userData.cartData[req.body.itemId] -= 1 : '';
    await Users.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData})
    res.send({success: true, message: "Removed from cart"})
})

// creating  endpoint for getting cart items
app.post('/getcart', fetchUser, async (req, res) => {
    console.log("GetCart is called");
    let userData = await Users.findOne({_id: req.user.id});
    res.json(userData.cartData);

})
// creating upload
app.use('/images', express.static('upload/images'));
app.post("/upload", upload.single("product"), (req, res) => {
    res.json({
        success: 1,
        image_url: `${baseUrl}/images/${req.file.filename}`,
    });
});


