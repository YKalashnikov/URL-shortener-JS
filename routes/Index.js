const app = require("express").Router();
const Url = require("../models/Url");

app.get("/:code", async (req, res) => {
  try {
    let url = await Url.findOne({ urlCode: req.params.code });
    if(url) {
        return res.redirect(url.longUrl)
    }
        else{
         return res.status(400).json('No url found')
        }
    

  } catch (err) {
      return res.status(500).json('Server problem')
  }
});

module.exports = app;
