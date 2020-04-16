const express = require("express");
const router = express.Router();
require("dotenv").config();
const ShortUrls = require("../models/ShortUrls");
// get base URL
const baseUrl = process.env.BASE_URL;
/**
 * @route POST api/short
 * @desc Short a given URL
 * @access public
 */
router.post("/short", (req, res, next) => {
    let shortUrl;
    if (isEmpty(req.body)) {
        res
            .status(400)
            .json({ success: false, msg: "Data missing!", data: req.body });
    }
    // Create a shorturl object
    shortUrl = new ShortUrls({
        url: req.body.url,
    });
    createAndSaveShortUrl(shortUrl, res);
});
/**
 * @route GET api/urlID
 * @desc Redirect to actual url based on URL ID
 * @access public
 */
router.get("/:id", (req, res, next) => {
    const urlCode = req.params.id;
    console.log('url id', urlCode);

    ShortUrls.findOne({ urlCode: urlCode }, (err, urlObj) => {
        if (err) {
            console.log(err);
            res.status(500).json({ success: false, msg: "Internal Server Error!" });
            return;
        }
        if (isEmpty(urlObj)) {
            res.status(404).json({ success: false, msg: "URL does not exist!" });
            return;
        }
        const redirectTo = `https://${urlObj.url}`;
        // Update the hits counter of url
        ShortUrls.updateOne(
            { urlCode: urlCode },
            { $inc: { hits: 1 } },
            (err, model) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(urlObj);
                console.log("mol===")
                console.log(redirectTo)
                // Redirect to actual URL
                res.redirect(301, redirectTo);
            }
        );
    });
});

function createAndSaveShortUrl(shortUlrObj, res) {
    // Generate a random string to replace the url
    let randomStr = generateRandomString();
    // Check if the random string already exist in DB
    ShortUrls.findOne({ urlCode: randomStr }, (err, url) => {
        if (err)
            console.log(err);
        else if (url == null || isEmpty(url)) {
            console.log("url obj", url, randomStr);
            shortUlrObj.urlCode = randomStr;
            // Not a duplicate
            shortUlrObj.save(err => {
                if (err) {
                    res.status(400).json({ success: true, msg: err });
                }
                res.status(200).json({ success: true, url: baseUrl + randomStr });
            });
        } else {
            saveShortUrl(shortUlrObj);
        }
    });
}

function generateRandomString() {
    var length = 6,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i)
        retVal += charset.charAt(Math.floor(Math.random() * n));
    return retVal;
}

function isEmpty(obj) {
    if (obj == null)
        return true;
    return Object.entries(obj).length === 0 && obj.constructor === Object;
}

module.exports = router;