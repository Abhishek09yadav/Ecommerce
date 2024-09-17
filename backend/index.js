const port = 4000;
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

app.app.listen(port, (error) => {
    if (!error) {
        console.log(
            "server running on port " + port
        )
    } else {
        console.log("Error: " + error)
    }
})
