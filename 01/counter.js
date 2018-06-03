let i = 0

exports.counter = (req, res) => {
  i++
  res.end(i.toString())
}
