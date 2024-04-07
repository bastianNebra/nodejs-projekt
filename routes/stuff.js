const express = require('express');
const router = express.Router();

const stuffControlers = require('../controllers/stuff');

router.post('/', stuffControlers.creatThing);

router.get('/:id', stuffControlers.getOneStuff);

router.put('/:id', stuffControlers.updateStuff);

router.delete('/:id',stuffControlers.deleteStuff);
   
router.get('/', stuffControlers.getAllStoff);

module.exports = router;
