module.exports = async (req, res) => {

const text = req.query.text || req.body?.text

if (!text) {
return res.json({ status: false, message: "text parameter required" })
}

return res.json({
status: true,
creator: "KazzTzy",
result: {
input: text,
reply: "Dola reply: " + text
}
})

}
