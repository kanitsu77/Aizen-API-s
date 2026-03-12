const axios = require("axios")
const cheerio = require("cheerio")

const headers = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
  "Referer": "https://www.mediafire.com/",
  "Upgrade-Insecure-Requests": "1"
}

function cleanSize(size) {
  if (!size) return null
  return size
    .replace(/KB/i, " KB")
    .replace(/MB/i, " MB")
    .replace(/GB/i, " GB")
    .replace(/\s+/g, " ")
    .trim()
}

async function mediafiredl(url) {
  const res = await axios.get(url, {
    headers,
    maxRedirects: 5
  })

  const $ = cheerio.load(res.data)

  const download = $("#download_link > a.input.popsok").attr("href") || null

  let filename = $(".dl-btn-label").first().text().trim()
  let filesize = $("#download_link > a.input.popsok")
    .text()
    .match(/\(([^)]+)\)/)?.[1] || null

  let filetype = $(".dl-info .filetype span")
    .first()
    .text()
    .trim()

  let uploaded = $(".details li")
    .eq(1)
    .find("span")
    .text()
    .trim()

  return {
    filename: filename || null,
    filetype: filetype || null,
    filesize: cleanSize(filesize),
    uploaded: uploaded || null,
    download: download || null
  }
}

module.exports = async (req, res) => {

  const url = req.query.url

  if (!url) {
    return res.json({
      status: false,
      message: "Parameter 'url' diperlukan"
    })
  }

  try {

    const data = await mediafiredl(url)

    if (!data.download) {
      return res.json({
        status: false,
        message: "Download link tidak ditemukan"
      })
    }

    return res.json({
      status: true,
      creator: "Kanitsu",
      result: {
        filename: data.filename,
        filetype: data.filetype,
        filesize: data.filesize,
        uploaded: data.uploaded,
        download: data.download
      }
    })

  } catch (err) {
    return res.status(500).json({
      status: false,
      error: String(err)
    })
  }

    }
