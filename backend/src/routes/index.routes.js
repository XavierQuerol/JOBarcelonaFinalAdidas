const { Router } = require("express");
const router = Router();
const {
  renderMatches,
  renderPlayers,
  renderTeams,
  renderSearchTeam,
  renderClassifications,
  renderLeagueTeams,
} = require("../controllers/index.controller.js");

router.get("/matches", renderMatches);

router.get("/players", renderPlayers);

router.get("/teams", renderTeams);

router.get("/teams/:team", renderSearchTeam);

router.get("/classifications", renderClassifications);

router.get("/teamleagues", renderLeagueTeams)

module.exports = router;
