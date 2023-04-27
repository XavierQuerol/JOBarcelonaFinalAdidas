const { Router } = require("express");
const router = Router();
const {
  renderMatches,
  renderPlayers,
  renderTeams,
} = require("../controllers/index.controller.js");

router.get("/matches", renderMatches);

router.get("/players", renderPlayers);

router.get("/teams", renderTeams);

module.exports = router;
