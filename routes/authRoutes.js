import express from 'express'
import {register, login, updateUser} from '../controllers/authController.js'
import authenticateUser from '../middleware/auth.js'

const router = express.Router()

// public
router.route('/register').post(register)
router.route('/login').post(login)

// private
router.route('/updateUser').patch(authenticateUser, updateUser)

export default router