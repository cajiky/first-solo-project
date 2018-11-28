const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
//GET ROUTE IN CHARGE OF GETTING THE USEFULL PLAYER INFORMATION
router.get('/', (req, res) => {
    pool.query(`SELECT players.id, teams.name as "teamname", players.alias, players.first_name, players.last_name, players.team FROM "players" JOIN "teams" ON teams.id = players.team WHERE players.id = ${req.user.id}`)
    .then((result) => {
        console.log('this is our "getUserDataSagas query response"', result.rows);
        res.send(result.rows)
    })
    .catch((error) => {
        console.log('error in /api/players get', error);
    })
});


router.post('/', (req, res) => {

});

module.exports = router;