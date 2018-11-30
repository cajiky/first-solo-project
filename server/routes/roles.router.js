const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    pool.query(`SELECT * FROM "roles";`)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error)=>{
        console.log('error in our request to get roles', error);
        res.sendStatus(500);
    })
    
});

module.exports = router;