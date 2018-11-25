const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {

});

//Post route to getting the data from the create team page uploaded to the teams table in the db.
router.post('/', (req, res) => {
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