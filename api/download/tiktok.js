const cheerio = require("cheerio")

module.exports = async (req, res) => {

try {

const url = req.query.url
if (!url) {
return res.json({
status:false,
error:"Masukkan parameter url"
})
}


const page = await fetch(url,{
headers:{ "User-Agent":"Mozilla/5.0" }
})

const htmlPage = await page.text()
const $t = cheerio.load(htmlPage)

const caption =
$t('meta[property="og:description"]').attr("content") ||
null

const cover =
$t('meta[property="og:image"]').attr("content") ||
null




const body = new URLSearchParams({
q: url,
cursor: "0",
page: "0",
lang: "id"
}).toString()

const r = await fetch("https://savetik.io/api/ajaxSearch",{
method:"POST",
headers:{
"content-type":"application/x-www-form-urlencoded; charset=UTF-8",
"x-requested-with":"XMLHttpRequest",
"user-agent":"Mozilla/5.0",
"origin":"https://savetik.io",
"referer":"https://savetik.io/id/download-tiktok-photos"
},
body
})

const json = await r.json()
const html = typeof json.data === "string" ? json.data : ""

const $ = cheerio.load(html)

const video =
$('a:contains("Unduh MP4 [1]")').attr("href") ||
$('a:contains("Unduh MP4 [2]")').attr("href") ||
$('a:contains("Unduh MP4 HD")').attr("href") ||
null

const audio =
$('a:contains("Unduh MP3")').attr("href") ||
null

const images = []

$(".photo-list ul.download-box li").each((_,el)=>{
const img = $(el).find("a[title='Unduh Gambar']").attr("href")
if(img) images.push(img)
})

res.json({
status:true,
creator: "Kanitsu",
result:{
caption,
cover,
video,
audio,
images
}
})

}catch(e){

res.status(500).json({
status:false,
error:String(e)
})

}

}
