const router = require('express').Router();
const db = require('../db.json');

// TODO GET All
/* 
Quick Challenge:
    - Frame a GET route
        - No endpoint is required to access. It will "Get All" based off /routes
            - note: Where is "/routes" coming from?

        No need to work through the logic within the code block.
*/

router.get('/', (req, res) => {
    try {
        
        res.status(200).json({
            results: db
        })

    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
})

// TODO GET One
/* 
    Syntax:
        URL - /:id
            - denotes a paramter value. Endpoint is expecting a reference value.

    example URL w/ a parameter:
*!      http://localhost:4000/routes/1

    - "1" would reference a parameter or flexible string.
        - This could be a name of something or anything that we want.
        - depending on how logic is built.
*/
router.get('/:id', (req, res) => {
    // console.log(req);
    // console.log(req.url); // showing us our endpoint
    console.log(req.params.id);
    /* 
        - used to help us locate one item in our database (db)
        - ID typically has a unique value to help us find that one item.
        - Can help us search several items.
    */
    try {
        let { id } = req.params;
        let results = db.filter(i => i.id == id)
        // console.log('Results: ', results);
        res.status(200).json({
            status: `Found item at id: ${id}`,
            results: results[0].item
        })

    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
})
module.exports = router;