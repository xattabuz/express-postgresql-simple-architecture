import pg from 'pg'
import { InternalServerError } from "../api/Helpers/error.Helper.js"

const pool = new pg.Pool({
	user: process.env.PG_USER,
	port: process.env.PG_PORT,
	password: process.env.PG_PASS,
	host: process.env.PG_HOST,
	database: process.env.PG_DB,
})

async function db(query, ...params) {
	const client = await pool.connect()

	try {
		const { rows } = await client.query(query, params.length ? params : null)
		return rows
	} catch (error) {
		console.log(error.message)
		throw new InternalServerError(500, error.message)
	} finally {
		client.release()
	}
}

export default db