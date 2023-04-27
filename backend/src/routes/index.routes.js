const { Router } = require("express");
const router = Router();
const { renderIndex } = require("../controllers/index.controller.js")

router.get('/', renderIndex)


module.exports = router;