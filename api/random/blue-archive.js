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

res.setHeader("Content-Type", "image/jpeg")
res.end(buffer)

} catch (err) {

return res.status(500).json({
status: false,
error: String(err)
})

}

  }
