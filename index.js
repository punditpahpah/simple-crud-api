

// index.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Product = require('./model/product.model');
const productRoute = require('./route/product.route')

// Server setup
app.listen(300, () => {
    console.log('Server is running on port 300');
});

// Middleware to parse JSON bodies & url bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Endpoint to routes
app.use('/api/products', productRoute);

// Endpoint to greet
app.get('/', (req, res) => {
    res.send('Hello from Node API server updated');
});

// MongoDB connection
mongoose.connect("mongodb+srv://punditpahpah:oneINtown4@mongodb.wvq4x5v.mongodb.net/Node-API?retryWrites=true&w=majority&appName=mongodb")
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error) => {
        console.log("Connection failed:", error);
    });
