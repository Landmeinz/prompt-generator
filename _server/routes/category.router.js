const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();


// ----- GET ----- //
router.get('/', (req, res) => {
  let queryText = `
    SELECT DISTINCT "category"
    FROM 	          "keywords"
    ORDER BY        "category"; `;

  pool.query(queryText)
    .then(result => {
      console.log('in get category.router');
      // console.log('--- router.GET /api/category result.rows', result.rows);
      res.send(result.rows);

    }).catch(error => {
      console.log('ERROR router.GET /api/category', error);
      res.sendStatus(500);
    });
});

module.exports = router;
