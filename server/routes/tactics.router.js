const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    
});


router.post('/', (req, res) => {

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