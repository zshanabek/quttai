const mongoose = require('mongoose')
const { Schema } = mongoose;

const shortUrlsSchema = new Schema({
    url: { type: String, required: true },
    code: { type: String, required: true },
    count: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
})

mongoose.model('shortUrls', shortUrlsSchema)
