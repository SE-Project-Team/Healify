const not_found = (req, res) => {
  res.status(404).send("url does not exist");
};

module.exports = not_found;
