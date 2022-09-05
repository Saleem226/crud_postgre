var express = require('express');
var router = express.Router();
const userController=require('../controller/userController')
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/',userController.getAllUser)
router.get('/:id',userController.getOneUser)
router.post('/add',userController.postOneUSer)
router.delete('/:id',userController.deleteOneUser)
router.put('/:id',userController.updateOneUser)


module.exports = router;
