const axios = require("axios")

module.exports = async (req, res) => {

try {

const img = await axios.get(
`https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`,
{
responseType: "arraybuffer"
}
)

const buffer = Buffer.from(img.data)

res.writeHead(200, {
"Content-Type": "image/jpeg",
"Content-Length": buffer.length
})

res.end(buffer)

} catch (err) {

return res.status(500).json({
status: false,
error: String(err)
})

}

  }
