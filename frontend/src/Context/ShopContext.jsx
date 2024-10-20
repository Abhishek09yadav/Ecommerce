import React, {createContext, useEffect, useState} from 'react';
import all_product2 from "../Components/Assets/all_product";
import item from "../Components/item/item";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const [all_product, setAll_Product] = useState([]);
    const getDefaultCart = () => {
        const savedCart = localStorage.getItem("cartItems");
        if (savedCart) {
            return JSON.parse(savedCart);
        }
        let cart = {}
        for (let index = 0; index < 300 + 1; index++) {
            cart[index] = 0;

        }
        return cart;
    }
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:4000/allproducts')
            const data = await response.json();
            setAll_Product([...data, ...all_product2
            ]);
        }
        fetchProducts();
    }, []);

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev, [itemId]: prev[itemId] + 1
        }))
        // console.log('cartItems', cartItems);
        if (localStorage.getItem("auth-token")) {
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem("auth-token")}`,
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({"itemId": itemId}),
            }).then(r => r.json()).then((data) => {
                console.log('cart-context-data', data)
            })
        }
    }
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        console.log('Cart items have been updated:', cartItems);
    }, [cartItems]);


    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev, [itemId]: prev[itemId] - 1
        }));
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem("auth-token")}`,
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({"itemId": itemId}),
            }).then(r => r.json()).then((data) => {
                console.log('cart-context-data', data)
            })
        }
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let iteminfo = all_product.find(p => p.id === Number(item));
                totalAmount += iteminfo.new_price * cartItems[item];
            }

        }
        return totalAmount;
    }
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;