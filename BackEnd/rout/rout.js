const express = require("express");

const router = express.Router();
const controller = require("../controller/controller");

router.post("/api/aplikasi", controller.post)
router.get("/api/aplikasi", controller.get)
router.get("/api/aplikasi/:id", controller.getByID)
router.put("/api/aplikasi/:id", controller.put)
router.delete("/api/aplikasi/:id", controller.delete)

module.exports = router;