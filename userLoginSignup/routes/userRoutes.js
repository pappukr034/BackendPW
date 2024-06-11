const express=require('express')

const {home, createUser, login,getUsers, deleteUser, editUser} =require('../controllers/userControllers.js')

const router=express.Router();

router.get('/',home)
router.post('/createuser',createUser)
router.post('/login',login)
router.get('/getusers',getUsers)
router.delete('/deleteuser/:id',deleteUser)
router.put('/edituser/:id',editUser)

module.exports=router