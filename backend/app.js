const express = require('express')
const app = express();
const cors = require('cors')
const dotenv = require('dotenv')
const Product = require('./models/Product')
dotenv.config();
const mongoose = require('mongoose')

app.use(cors());

app.use(express.json());

const database_uri = process.env.MONGO_URI

async function connectDB() {
    try {
    await mongoose.connect(database_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
    } catch (error) {
    console.error('Error in connecting to the database:', error.message);
    process.exit(1); //The application exits if the connection fails
    }
  }
  
  connectDB();

app.get('/api', (req, res) => {
    const hello = 'Hello World!'
    {res.status(200).json({hello});}
});

app.post('/api/product', async (req, res) => {
    const { waste, owner, size, price} = req.body;
    try {
        const newProduct = new Product({ 
            waste,
            owner,
            size,
            price
         });
        const product = await newProduct.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: 'Product Not Created', error: error.message })
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

port = process.env.PORT || 8080

app.listen(port, () => 
    console.log(`Server listening on port ${port}...`)
);

module.exports = app;