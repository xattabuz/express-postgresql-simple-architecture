//import packages from node_modules
import express from "express";

//import routers from ./api/Routers
import authRouter from "./Routers/auth.Router.js"

const router = express.Router()


//auth router use
router.use('/auth', authRouter)


export default router