const mongoose = require('mongoose');
const validUrl = require('valid-url');
const db = mongoose.model('shortUrls');
const shortCode = require('../middlewares/uniqueCode');

const baseUrl = process.env.BASE_URL;

module.exports = app => {
    app.post("/api/items", async (req, res) => {
        const { url } = req.body
        console.log(url);
        if (!validUrl.isUri(url)) {
            res.status(400).json({ success: false, msg: "URL is wrong!", data: req.body });
            return
        }
        const code = shortCode.generate();
        object = new db({ url, code });
        object.save();
        res.status(200).json({ success: true, url: `${baseUrl}/api/items/${code}` });
    });

    app.get("/api/items/:id", async (req, res) => {
        const code = req.params.id;
        const item = await db.findOne({ code });
        if (!item) {
            res.status(404).json({ success: false, msg: "URL does not exist!" });
            return;
        }
        await db.updateOne({ code }, { $inc: { count: 1 } });
        res.redirect(301, item.url);
    });
}