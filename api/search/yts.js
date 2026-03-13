const yts = require("yt-search")

module.exports = async (req, res) => {

try {

const q = req.query.q || req.query || req.query.query

if (!q) {
return res.status(400).json({
status: false,
error: "Query is required"
})
}

const ytResults = await yts.search(q)

const result = ytResults.videos.map(video => ({
title: video.title,
channel: video.author.name,
duration: video.timestamp,
thumbnail: video.thumbnail,
url: video.url
}))

res.json({
status: true,
creator: "Kanitsu",
result
})

} catch (error) {

res.status(500).json({
status: false,
error: error.message
})

}

}
