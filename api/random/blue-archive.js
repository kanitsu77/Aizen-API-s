const axios = require("axios")

module.exports = async (req, res) => {

try {

const img = await axios.get(
`https://raw.githubusercontent.com/rynxzyy/blue-archive-r-img/refs/heads/main/links.json`,
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
