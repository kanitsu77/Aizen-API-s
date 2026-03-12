const axios = require("axios")

module.exports = async (req, res) => {

try {

const { data } = await axios.get(
"https://www.antaranews.com/rss/terkini.xml",
{
headers:{
"User-Agent":"Mozilla/5.0"
}
})

const items = [...data.matchAll(/<item>([\s\S]*?)<\/item>/g)]

const result = items.slice(0,10).map(x=>{
let item = x[1]

let title = (item.match(/<title>(.*?)<\/title>/)||[])[1]
let link = (item.match(/<link>(.*?)<\/link>/)||[])[1]
let date = (item.match(/<pubDate>(.*?)<\/pubDate>/)||[])[1]

let thumb =
(item.match(/<media:content.*?url="(.*?)"/) || [])[1] ||
(item.match(/<enclosure.*?url="(.*?)"/) || [])[1] ||
null

return { title, link, date, thumbnail: thumb }

})

res.json({
status: true,
creator: "Kanitsu",
result
})

} catch (err) {

res.status(500).json({
status:false,
error:String(err)
})

}

}
