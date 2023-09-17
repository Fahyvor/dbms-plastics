const express = require('express')
const app = express();
const cors = require('cors')
const Product = require('./models/Product')

app.use(cors());

app.use(express.json())

app.get('/api', (req, res) => {
    const hello = 'Hello World!'
    {res.status(200).json({hello});}
});

app.post('/api/product', async (req, res) => {
    const productCreated = req.body;
    try {
        const newProduct = new Product({productCreated});
        const product = await newProduct.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: 'Product Successfully Recorded', error: error.message })
    }
});

app.get('/getproducts', async (req, res) => {
    try {
        const availableProducts = await Product.find({});
        res.json(availableProducts);
    } catch (error) {
        console.error('Error fetching products', err);
        res.status(500).json({ error: 'Internal Server Error'});
    }
})

port = process.env.PORT || 6000

app.listen(port, () => 
    console.log(`Server listening on port ${port}...`)
);