// import packages from node_modules
import dotenv from "dotenv"
import ip from "ip"

//import packages from LIBUV
import {resolve} from "path"


//set dotenv config path
dotenv.config({
	path: resolve(process.cwd(), '.env')
})


// VALIDATION ENV DATA PORT
process.env.PORT = process.env.PORT ?? 3030

// VALIDATION ENV DATA PG_PORT
process.env.PG_PORT = process.env.PG_PORT ?? 5432

// VALIDATION ENV DATA APP_HOST
process.env.APP_HOST = process.env.APP_HOST ?? `http://${ip.address()}:${process.env.PORT}`