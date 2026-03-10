const axios = require("axios")

module.exports = async (req, res) => {

const prompt = req.query.prompt

if (!prompt) {
return res.json({ status: false, message: "prompt required" })
}

try {

const img = await axios.get(
`https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`,
{ responseType: "arraybuffer" }
)

res.setHeader("Content-Type", "image/jpeg")
return res.send(img.data)

} catch (err) {
return res.status(500).json({ status: false, error: String(err) })
}

}
