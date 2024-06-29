const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const stuffCtrl = require('../controllers/stuff');

router.get('/get', function(){
    console.log("Hello World");
})
router.get('/', stuffCtrl.getAllStoff);

router.post('/', multer, stuffCtrl.creatThing);

router.get('/:id',stuffCtrl.getOneStuff);

router.put('/:id',auth, stuffCtrl.updateStuff);

router.delete('/:id',auth, stuffCtrl.deleteStuff);
   


module.exports = router;
