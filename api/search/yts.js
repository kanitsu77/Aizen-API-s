
module.exports = async (req, res) => {

try {

const q = req.query.q || req.query || req.query.query

if (!q) {
return res.status(400).json({
status: false,
error: "Query is required"
})
}

res.json({
status: true,
creator: "Kanitsu",
result: "Jawa"
})

} catch (error) {

res.status(500).json({
status: false,
error: error.message
})

}

}
