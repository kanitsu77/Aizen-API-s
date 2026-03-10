const axios = require("axios")

module.exports = async (req, res) => {

const url = req.query.url

if (!url) {
return res.json({ status: false, message: "url required" })
}

try {

const api = await axios.get("https://api.tiklydown.eu.org/api/download", {
params: { url }
})

const video = await axios.get(api.data.video.noWatermark, {
responseType: "arraybuffer"
})

res.setHeader("Content-Type", "video/mp4")
return res.send(video.data)

} catch (err) {
return res.status(500).json({ status: false, error: String(err) })
}

}
