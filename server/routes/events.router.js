const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/type', rejectUnauthenticated, (req, res) => {
    pool.query(`SELECT * FROM "event_types"`)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error in our get req "/type"', error);
    })
});

//Route to get all events of a certain team
router.get('/', rejectUnauthenticated, (req, res) => {
    pool.query(`SELECT * FROM "players" WHERE id=${req.user.id}`)
    .then((result) => {
        const team = result.rows[0].team;
        pool.query(`SELECT * FROM "events" WHERE team = ${team} ORDER BY date DESC, event_start ASC;`)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error in our nested get query for "/api/events/"', error);
        })
    })
    .catch((error) => {
        console.log('error in our get req for "/api/events/', error);
    })
})

router.post('/', (req, res) => {
    console.log(req.body);
    const event = req.body;
    const sqlText = `INSERT INTO "events" (name, event_start, event_end, description, team, event_type, date) VALUES ($1,$2,$3,$4,$5,$6,$7)`;
    pool.query(sqlText, [event.event.eventName, event.event.start, event.event.end, event.event.eventDescription, event.teamId, event.event.event_type, event.event.eventDate])
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error in our post req "/api/event"',error);
        res.sendStatus(500);
    })
});

module.exports = router;