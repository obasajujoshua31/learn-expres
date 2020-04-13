const { Router } = require("express");
const controller = require("../controllers/index");

const router = Router();

router
  .route("/")
  .get(controller.getHomeController)
  .put(controller.putHomeController)
  .delete(controller.deleteHomeController);

router
  .route("/:id")
  .post(controller.postHomeController)
  .get(controller.getOneDataController);

module.exports = router;
