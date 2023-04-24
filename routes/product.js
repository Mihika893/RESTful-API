const express = require("express");
const router = express.Router();

const {getAllProduct} = require("../controller/product")

router.route("/").get(getAllProduct);
// router.route("/testing").get(getAllProductTesting);

module.exports = router;