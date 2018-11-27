const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    
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