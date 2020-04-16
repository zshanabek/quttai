const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ShortUrlsSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    urlCode: {
        type: String
    },
    hits: {
        type: Number,
        default: 0
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = ShortUrls = mongoose.model('ShortUrls', ShortUrlsSchema)