const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();


// ----- GET ----- //
router.get('', async (req, res) => {

    console.log('// --- HIT GET keyword.router --- //');
    const categories = await req.query.category || [];
    console.log('--- categories:', categories);
    // let resultList = [{ tacos: 'yes' }];
    // let promises;
    if (Array.isArray(categories)) {

        let resultList = await Promise.all(
            categories.map(async category => {
                let queryText = `
                SELECT *
                FROM "keywords"
                WHERE "category" = $1
                ORDER BY RANDOM()
                LIMIT 1
              `;
                let values = [category];
                let result = await pool.query(queryText, values);
                return result.rows[0];
            })
        );

        res.send(resultList);


        // categories.map(category => {

        //     let queryText = `
        //     SELECT  *
        //     FROM    "keywords"
        //     WHERE   "category" = $1
        //     ORDER BY RANDOM()
        //     LIMIT   1 `;

        //     let values = [category];

        //     pool.query(queryText, values)
        //         .then(result => {
        //             console.log('--- router.GET /api/keyword result.rows', result.rows[0]);
        //             resultList.push(result.rows[0]);
        //             // console.log('-- pool.query resultList:', resultList);
        //             // res.send(result.rows);
        //         }).catch(error => {
        //             console.log('ERROR router.GET /api/keyword', error);
        //             res.sendStatus(500);
        //         })
        // })// promises
        // res.send(resultList);

    }
    else {
        console.log('--- ! --- NOT AN ARRAY --- ! ---');
    }
});

// console.log('--- promises:', promises);


// Promise.all(promises)
//     .then(() => {
//         console.log('--- Promise resultList', resultList);
//         res.send(resultList);
//     })
//     .catch(error => {
//         console.log('ERROR router.GET /api/keyword', error);
//         res.sendStatus(500);
//     });

// let queryText = `
//     SELECT  *
//     FROM 	    "keywords"
//     ORDER BY    "id"; `;

// pool.query(queryText)
//     .then(result => {
//         console.log('--- router.GET /api/keyword result.rows', result.rows);
//         res.send(result.rows)
//     }).catch(error => {
//         console.log('ERROR router.GET /api/keyword', error);
//         res.sendStatus(500);
//     });


// let queryText = `
// SELECT *
// FROM 	        "Keywords"
// WHERE "category" = '${req.query}'
// ORDER BY        "id"; `;

// pool.query(queryText)
//     .then(result => {
//         console.log('--- router.GET /api/keyword result.rows', result.rows);
//         res.send(result.rows);

//     }).catch(error => {
//         console.log('ERROR router.GET /api/keyword', error);
//         res.sendStatus(500);
//     });
// });


// ----- POST ----- //
router.post('/', (req, res) => {

    // if (!res.headersSent) {
    //     res.setHeader('Content-Type', 'application/json');
    //     res.send({ success: true });
    // }
    res.setHeader('Content-Type', 'application/json');
    const newKeywordList = req.body;

    for (const keywordObject of newKeywordList) {
        const sqlText = `
        INSERT INTO "keywords"
        ("category", "sub_category", "sub_category_type", "keyword", "last_ping", "gen_prompt_count")
        VALUES ($1, $2, $3, $4, $5, $6)`;

        let values = [
            keywordObject.category,
            keywordObject.sub_category,
            keywordObject.sub_category_type,
            keywordObject.keyword,
            'TODAY',
            0
        ];

        pool
            .query(sqlText, values)
            .then((response) => {
                // console.log('response from keyword POST: ', response);
                // res.sendStatus(201);
            })
            .catch((error) => {
                console.log(`POST Error  to database: ${sqlText}`, error);
                res.sendStatus(500);
            });
    }
});

module.exports = router;
