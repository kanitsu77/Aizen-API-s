const cheerio = require("cheerio")

module.exports = async (req, res) => {

try {

const url = req.query.url || req.query.q
if (!url) {
return res.status(400).json({
status: false,
error: "Masukkan parameter url"
})
}

const body = new URLSearchParams({
q: url,
cursor: "0",
page: "0",
lang: "id"
}).toString()

const r = await fetch("https://savetik.io/api/ajaxSearch", {
method: "POST",
headers: {
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
"x-requested-with": "XMLHttpRequest",
"user-agent": "Mozilla/5.0",
"origin": "https://savetik.io",
"referer": "https://savetik.io/id/download-tiktok-photos",
"accept": "*/*"
},
body
})

const json = await r.json()
const html = typeof json.data === "string" ? json.data : ""

if (!html) throw "Gagal mengambil data"

const $ = cheerio.load(html)

const caption =
$(".desc").text().trim() ||
$(".content-text").text().trim() ||
null

const username =
$(".author-name").text().trim() ||
$(".username").text().trim() ||
null

const nickname =
$(".author-nickname").text().trim() ||
null

const cover =
$(".video-thumb img").attr("src") ||
null

const likes =
$(".likes").text().trim() ||
null

const comments =
$(".comments").text().trim() ||
null

const shares =
$(".shares").text().trim() ||
null

const mp4 =
$('a:contains("Unduh MP4 [1]")').attr("href") ||
$('a:contains("Unduh MP4 [2]")').attr("href") ||
$('a:contains("Unduh MP4 HD")').attr("href") ||
null

const mp3 =
$('a:contains("Unduh MP3")').attr("href") ||
null

const images = []

$(".photo-list ul.download-box li").each((_, el) => {
const img = $(el).find("a[title='Unduh Gambar']").attr("href")
if (img) images.push(img)
})

res.json({
status: true,
creator: "Kanitsu",
result: {
caption,
username,
nickname,
likes,
comments,
shares,
cover,
video: mp4,
audio: mp3,
images
}
})

} catch (e) {

res.status(500).json({
status: false,
error: String(e)
})

}

}
