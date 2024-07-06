const express = require("express");
const {handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser} = require('../controllers/user')

const router = express.Router();


// Routes  // Rest API
router.route('/')
.get(handleGetAllUsers)
.post(handleCreateNewUser)

router.get('/:id', handleGetUserById)

router.patch('/:id', handleUpdateUserById)

router.delete('/:id', handleDeleteUserById)


module.exports = router;