const axios = require("axios")

module.exports = async (req, res) => {

try {

const { data } = await axios.get(
"https://raw.githubusercontent.com/rynxzyy/blue-archive-r-img/refs/heads/main/links.json"
)

const random = data[Math.floor(Math.random() * data.length)]

const img = await axios.get(random, {
responseType: "arraybuffer"
})

const buffer = Buffer.from(img.data)

res.setHeader("Content-Type", "image/jpeg")

return res.send(buffer)

} catch (err) {

return res.status(500).json({
status: false,
error: String(err)
})

}

}
