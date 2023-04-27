const { Router } = require("express");
const router = Router();
const {
  renderMatches,
  renderPlayers,
  renderTeams,
  renderSearchTeam,
} = require("../controllers/index.controller.js");

router.get("/matches", renderMatches);

router.get("/players", renderPlayers);

router.get("/teams", renderTeams);

router.get('/teams/:team', renderSearchTeam)

module.exports = router;
