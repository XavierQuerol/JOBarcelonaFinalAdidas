//Require Data
const matches = require("../../../datasets/matches.json");
const players = require("../../../datasets/players.json");
const teams = require("../../../datasets/teams.json");

//Variables
const indexCtrl = {};

//Functions
const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
} 

indexCtrl.renderMatches = (req, res) => {
  res.status(200).send(matches);
};

indexCtrl.renderPlayers = (req, res) => {
  res.status(200).send(players);
};

indexCtrl.renderTeams = (req, res) => {
  res.status(200).send(teams);
};

indexCtrl.renderSearchTeam = (req, res) => {
  let squadId = ""
  let allResult = [];
  const teamName = req.params.team;
  const result = teams.filter((el) => removeAccents(el.Squad) === removeAccents(teamName))
  result.forEach((el) => {
    squadId = el.Squad_id
  })
  const filteredPlayers = players.filter((el) => el.Squad_id === squadId);
  const arrayConcat = result.concat(filteredPlayers)
  res.status(200).send(arrayConcat)
}

module.exports = indexCtrl;
