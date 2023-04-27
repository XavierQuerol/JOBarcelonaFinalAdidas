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
  const teamName = req.params.team;
  const result = teams.filter((el) => removeAccents(el.Squad) === removeAccents(teamName))
  res.status(200).send(result)
  teams.forEach(el => console.log(el.Squad))
  //const filteredTeams = teams.filter(idx => idx.squad == "barcelona");
}

module.exports = indexCtrl;
