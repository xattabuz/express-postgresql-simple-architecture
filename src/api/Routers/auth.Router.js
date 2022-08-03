//import packages from node_modules
import express from 'express'

import controller from '../Controllers/auth.Controller.js'

const router = express.Router()

//auth router use
router.post('/login', controller.LOGIN)
router.post('/register', controller.REGISTER)

export default router
