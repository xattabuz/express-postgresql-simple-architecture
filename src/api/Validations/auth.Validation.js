import Joi from 'joi'

const LOGIN = data => {
	const schema = Joi.object({
		user_phone_number: Joi.string().pattern(new RegExp('^998[389][012345789][0-9]{7}$')).required(),
		user_password: Joi.string().min(6).max(30).required(),
	})
	try {
		if (schema.validate(data).error) {
			return {
				status: false,
				message: schema.validate(data).error.details[0].message,
			}
		}
		return {
			status: true,
		}
	} catch (err) {
		return err
	}
}

const REGISTER = data => {
	const schema = Joi.object({
		user_first_name: Joi.string().pattern(new RegExp('^[a-zA-Z]*$')).min(3).max(30).required(),
		user_last_name: Joi.string().pattern(new RegExp('^[a-zA-Z]*$')).min(3).max(30),
		user_phone_number: Joi.string().pattern(new RegExp('^998[389][012345789][0-9]{7}$')).required(),
		user_password: Joi.string().min(6).max(30).required(),
		user_profile_image: Joi.string().min(3).max(30),
		user_role_id: Joi.string().min(10).max(30)
	})
	try {
		if (schema.validate(data).error) {
			return {
				status: false,
				message: schema.validate(data).error.details[0].message,
			}
		}
		return {
			status: true,
		}
	} catch (err) {
		return err
	}
}

export default {
	LOGIN,
	REGISTER,
}
