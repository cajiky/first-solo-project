const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//Get route incharge of getting initial state from the db
router.get('/', (req, res) => {
   let sqlText = `SELECT * FROM "players" WHERE person_id = $1;`
   pool.query(sqlText,[req.user.id])
    .then((result) => {
        console.log(result.rows);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error in our get init state request', error);
    })
});


//PUT route from our playerProfileEditSaga to update a row for a user.
router.put('/', (req,res) => {
    const body = req.body;
    //Sql text
    const sqlText = `UPDATE players SET "alias"=$1, "first_name"=$2, "last_name"=$3, "esea"=$4, "cevo"=$5, "faceit"=$6, "dob"=$7,
    "role"=$8, "team"=$9, "image_url"=$10  WHERE "person_id" = ${req.user.id};`
    pool.query(sqlText,[body.alias, body.firstName, body.lastName, body.esea, body.cevo, body.faceit, body.dob, body.role, body.teamId, body.img])
    .then(() => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error in our update request to db from editPlayer', error);
        res.sendStatus(500);
    })
})

module.exports = router;