const data = require("../data");

const getHomeController = (req, res) => {
  return res.send(data);
};

const postHomeController = (req, res) => {
  //   console.log(req.body);
  //   console.log(req.headers);
  console.log(req.query);
  return res.send("post home controller");
};

const putHomeController = (req, res) => {
  return res.send("put home controller");
};

const deleteHomeController = (req, res) => {
  return res.send("delete home controller");
};

const getOneDataController = (req, res) => {
  const id = req.params.id;

  const oneData = data.find((item) => item.id == id);

  if (!oneData) {
    return res.sendStatus(404);
  }

  return res.send(oneData);
};

module.exports = {
  getHomeController,
  postHomeController,
  putHomeController,
  deleteHomeController,
  getOneDataController,
};
