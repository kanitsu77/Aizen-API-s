const axios = require("axios")

module.exports = async (req, res) => {

try {

const { data } = await axios.get(
"https://www.cnnindonesia.com/nasional/rss",
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

return { title, link, date }

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
