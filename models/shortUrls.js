const mongoose = require('mongoose')
const { Schema } = mongoose;

const shortUrlsSchema = new Schema({
    urlCode: String,
    url: { type: String, required: true },
    hits: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
})

mongoose.model('shortUrls', shortUrlsSchema)
