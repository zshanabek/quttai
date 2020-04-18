const mongoose = require('mongoose');
const validUrl = require('valid-url');
const db = mongoose.model('shortUrls');
const shortCode = require('../middlewares/uniqueCode');

const baseUrl = process.env.BASE_URL;

module.exports = app => {
    app.post("/api/items", async (req, res) => {
        const { url } = req.body
        if (!validUrl.isUri(url)) {
            res.status(400).json({ success: false, msg: "URL is wrong!", data: url });
            return
        }
        const code = shortCode.generate();
        object = new db({ url, code });
        object.save(function (err, obj) {
            if (err) return console.error(err);
            console.log(obj.url + ' is saved')
        });
        res.status(200).json({ success: true, url: `${baseUrl}/api/items/${code}` });
    });

    app.get("/api/items/:code", async (req, res) => {
        const { code } = req.params;
        const item = await db.findOne({ code });
        if (!item) {
            res.status(404).json({ success: false, msg: "URL does not exist!" });
            return;
        }
        console.log(item.url);
        await db.updateOne({ code }, { $inc: { count: 1 } });
        res.redirect(301, item.url);
    });
}