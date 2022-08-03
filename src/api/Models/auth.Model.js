import query from '../Querys/auth.Query.js'
import db from '../../config/db.js'

const LOGIN = async ({ user_phone_number, user_password }) => {
	const [ data ] = await db(query.LOGIN, user_phone_number, user_password)
	return data
}

const REGISTER = async ({user_first_name, user_last_name, user_phone_number, user_password, user_profile_image, user_role_id}) => {
	const [ data ] = await db(
		query.REGISTER,
		user_first_name,
		user_last_name,
		user_phone_number,
		user_password,
		user_role_id,
		user_profile_image
		
	)
	return data
}

const CHECK_USER_PHONE = async ({ user_phone_number }) => {
	const [ data ] = await db(query.CHECK_USER_PHONE, user_phone_number)
	return data
}

const CHECK_USER_ROLE = async ({ user_role_id }) => {
	const [ data ] = await db(query.CHECK_USER_ROLE, user_role_id)
	return data
}



export default {
	LOGIN,
	REGISTER,
	CHECK_USER_PHONE,
	CHECK_USER_ROLE
}
