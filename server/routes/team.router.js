const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

//In charge of getting the data for a particular users team.
router.get('/', rejectUnauthenticated, (req, res) => {
    pool.query(`SELECT * FROM "teams" WHERE owner = ${req.user.id}`)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error in /api/teams/get', error);
        res.sendStatus(500);
    })
});

//going to check to see if the loggedin user is the owner of a team
router.get('/teamOwner', rejectUnauthenticated, (req, res) => {
    pool.query(`SELECT * FROM "teams" ORDER BY id ASC`)
    .then((result) => {
        // console.log(result.rows);
        // console.log(req.user.id);
        let isTeamOwner = false;
        for(let i = 0; i < result.rows.length; i++){
            if(req.user.id === result.rows[i].owner){
                isTeamOwner = true;
            }
        }
        res.send(isTeamOwner);
    })
    .catch((error) => {
        console.log('error in our /teamOwner', error)
    })
})

//Post route to getting the data from the create team page uploaded to the teams table in the db.
router.post('/', rejectUnauthenticated, (req, res) => {
    const body = req.body;
    const sqlText = `INSERT INTO "teams" (name,cal,esea,cevo,faceit,owner)
                     VALUES($1,$2,$3,$4,$5,$6)`;
    pool.query(sqlText, [body.teamName,body.calLink,body.eseaLink,body.cevoLink,body.faceitLink,req.user.id])
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        res.sendStatus(500);
        console.log('our error in the post route for createTeamPage', error);
    })
});

module.exports = router;