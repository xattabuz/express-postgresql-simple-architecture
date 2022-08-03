// import packages from node_modules
import { appendFileSync } from 'fs'
import { resolve } from 'path'

export default async function (error, req, res, next) {
	if (error.statusCode != 500) {
		res.status(error.statusCode).json({
			statusCode: error.statusCode,
			message: error.message,
			error: error.name,
			data: null,
			token: null,
		})

		return next()
	}

	const data = `${Date.now()}___${req.url}___${req.method}___${error.name}__${
		error.message
	}\n`

	appendFileSync(resolve(process.cwd(), 'log.txt'), data)

	res.status(error.statusCode).json({
		statusCode: error.statusCode,
		name: error.name,
		message: error.message,
		data: null,
		token: null,
	})
}
