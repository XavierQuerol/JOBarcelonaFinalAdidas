//Require Data
const matches = require("../../../datasets/matches.json");
const players = require("../../../datasets/players.json");
const teams = require("../../../datasets/teams.json");

//Variables
const indexCtrl = {};

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
    const teamId = req.params.team
    for(let indx in teams){
      res.send(indx)
    }
}

module.exports = indexCtrl;
