const axios = require("axios")
const cheerio = require("cheerio")

const headers = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
  "Referer": "https://www.mediafire.com/",
  "Upgrade-Insecure-Requests": "1"
}

async function mediafiredl(url) {
  const res = await axios.get(url, {
    headers,
    maxRedirects: 5
  })

  const $ = cheerio.load(res.data)

  const download = $("#download_link > a.input.popsok").attr("href") || null

  const filename = $(".dl-btn-label")
    .first()
    .text()
    .trim() || null

  const filesize = $("#download_link > a.input.popsok")
    .text()
    .match(/\(([^)]+)\)/)?.[1] || null

  const filetype = $(".dl-info .filetype span")
    .first()
    .text()
    .trim() || null

  const uploaded = $(".details li")
    .eq(1)
    .find("span")
    .text()
    .trim() || null

  return {
    filename,
    filetype,
    filesize,
    uploaded,
    download
  }
}

module.exports = async (req, res) => {

  const url = req.query.url

  if (!url) {
    return res.json({
      status: false,
      message: "url required"
    })
  }

  try {

    const data = await mediafiredl(url)

    if (!data.download) {
      return res.json({
        status: false,
        message: "download link not found"
      })
    }

    return res.json({
      status: true,
      creator: "Kanitsu",
      result: data
    })

  } catch (err) {
    return res.status(500).json({
      status: false,
      error: String(err)
    })
  }

}
