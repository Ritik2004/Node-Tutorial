const express = require("express")
const {handleGetAllUsers,getUserById,addUser,updateUser,deleteUserById} = require('../controllers/user')
const router= express.Router();

router.get('/',handleGetAllUsers)

router.get('/:id', getUserById)
router.post('/', addUser)

router.patch('/:id',updateUser)
router.delete('/:id',deleteUserById)

module.exports = router;