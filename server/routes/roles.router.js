const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "roles";`)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error)=>{
        console.log('error in our request to get roles', error);
        res.sendStatus(500);
    })
    
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;