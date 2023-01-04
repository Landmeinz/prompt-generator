const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

// GO GET THE CURRENT DATE FROM THE SERVER // 

router.get('/', (req, res) => {

    let queryText = `
        SELECT CURRENT_DATE, CURRENT_DATE + INTERVAL '1d day' AS "tomorrow",
            DATE_PART('year', NOW()) AS "year",
            DATE_PART('month', NOW()) AS "month",
            DATE_PART('day', NOW()) AS "day" ; `;

    pool.query(queryText)
        .then(result => {
            console.log('--- router.GET /api/date result.rows', result.rows);
            res.send(result.rows);
        }).catch(error => {
            console.log('ERROR router.GET /api/date', error);
            res.sendStatus(500);
        });
});

module.exports = router;