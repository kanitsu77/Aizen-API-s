module.exports = function handler(req, res) {
  res.status(200).json({
    status: true,
    message: "YTS endpoint aktif",
    time: Date.now()
  })
}
