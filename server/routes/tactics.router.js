const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/private', (req, res) => {
    pool.query(`SELECT * FROM "players" WHERE id=${req.user.id}`)
   
    .then((result) => {
        pool.query(`SELECT tactics.id, tactics.team, tactics.description, tactics.mini_url, tactics.name, maps.maps, teams.name as teamname, maps.map_img 
        FROM "tactics" JOIN "maps" ON tactics.map = maps.id 
        JOIN "teams" ON teams.id = tactics.team WHERE teams.id = ${result.rows[0].team};`)
        .then((result) => {
            res.send(result.rows)
        })
        .catch((error)=>{
            console.log('error inside of our sub query in /private', error)
        })
    })
    .catch((error) => {
        console.log('error in our post/get tactics from team inside /api/tactics/private', error);
    })
});


router.post('/', (req, res) => {
    console.log(req.body);
    const tactic = req.body;
    const sqlText = `INSERT INTO "tactics"(name,description,map,mini_url,team)
                     VALUES($1,$2,$3,$4,$5)`;
    pool.query(sqlText,[tactic.tacticName, tactic.tacticDescription, tactic.map, tactic.imgUrl, tactic.teamId])
    .then((result)=>{
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error in our post request to tactics /api/tactic', error);
        res.sendStatus(500);
    })
});

//Route in charge of getting the maps from the maps table
router.get('/maps', (req, res) =>{ 
    pool.query('SELECT * FROM "maps";')
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error /api/tactics/map', error);
        res.sendStatus(500);
    })
}) 

module.exports = router;