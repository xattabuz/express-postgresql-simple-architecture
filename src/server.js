// import packages from node_modules
import fileUpload from 'express-fileupload'
import { resolve } from 'path'
import express from "express"; 
import helmet from "helmet";
import morgan from "morgan";


// import files from config
import './config/index.js'

// import all routes 
import routes from './api/routes.js'

// import errorHandler from helper
import errorHandler from './api/Helpers/errorHandler.Helper.js'

!async function(){
	// init express api
	const app = express()

	// set static file
	app.use(express.static(resolve(process.cwd(), 'src', 'assets')))

	// helmet security use middleware for api
	app.use(helmet())

	// morgan console logger use middleware for api
	app.use(morgan('dev'))

	// file upload use middleware for api max 10mb
	app.use(
		fileUpload({
			limits: {
				fileSize: 10 * 1024 * 1024,
			},
		})
	)

	// express.json converter body to json use middleware for api
	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))

	// routers use middleware for api
	app.use('/api', routes)

	// errorHandler use middleware for api
	app.use(errorHandler)

	app.listen(process.env.PORT, () => console.log(`*${process.env.PORT}`))
}()