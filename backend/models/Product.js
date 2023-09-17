const express = require('express')
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema (
    {
        waste: {
            type:String,
            required: true,
        },
        owner: {
            type:String,
            required: true,
        },
        size: {
            type:Number,
            required: true,
        },
        price: {
            type:Number,
            required: true,
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model('Product', productSchema)

// module.exports = Product