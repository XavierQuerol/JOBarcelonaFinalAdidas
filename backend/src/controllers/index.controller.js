//Require Data
const matches = require("../../../datasets/matches.json");
const players = require("../../../datasets/players.json");
const teams = require("../../../datasets/teams.json");
const classifications = require("../../../datasets/classifications.json");
const teamLeagues = require("../../../datasets/equipos_liga.json")

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
  const teamName = req.params.team;
  const result = teams.filter((el) => removeAccents(el.Squad) === removeAccents(teamName))
  result.forEach((el) => {
    squadId = el.Squad_id
  })
  const filteredPlayers = players.filter((el) => el.Squad_id === squadId);
  const arrayConcat = result.concat(filteredPlayers)
  res.status(200).send(arrayConcat)
}

indexCtrl.renderClassifications = (req, res) => {
  classifications.forEach((el) => {
    console.log(Object.values(el))
  })
  
  res.status(200).send(classifications)
}

//Renderiza la ruta para los equipos de liga
indexCtrl.renderLeagueTeams = (req, res) => {
  let leagueName = [];
  let leagueTeams = [];
  teamLeagues.forEach((el) => leagueName.push(el.name))
  teamLeagues.forEach((el) => leagueTeams.push(el.teams))
  const allData = leagueName.concat(leagueTeams);
  res.status(200).send(allData)
  console.log(allData);
}

module.exports = indexCtrl;
