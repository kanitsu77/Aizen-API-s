const axios = require("axios")
const cheerio = require("cheerio")

module.exports = async (req, res) => {

const url = req.query.url

if (!url) {
return res.json({ status: false, message: "url required" })
}

try {

const response = await axios.get(url, {
headers: {
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}
})

const $ = cheerio.load(response.data)

const downloadLink = $("#downloadButton").attr("href")
const fileName = $(".filename").first().text().trim()
const fileSize = $(".subheading").first().text().trim()

if (!downloadLink) {
return res.json({ status: false, message: "Download link not found" })
}

return res.json({
status: true,
creator: "KazzTzy",
result: {
filename: fileName,
size: fileSize,
download: downloadLink
}
})

} catch (err) {
return res.status(500).json({ status: false, error: String(err) })
}

}
