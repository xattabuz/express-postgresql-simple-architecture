import { BadRequestError, NotFoundError, InternalServerError } from '../Helpers/error.Helper.js'
import validation from "../Validations/auth.Validation.js"
import model from "../Models/auth.Model.js"
import JWT from "../Utils/jwt.Util.js"
import { resolve } from "path"

const LOGIN = async (req, res, next) => {
	try {
		
		const validate = validation.LOGIN( { ...req.body } )
		if(!validate.status) return next(new BadRequestError(400, validate.message))

		const user = await model.LOGIN({...req.body})

		if(!user) throw new NotFoundError(404, 'User phone number or password incorrect!')

		if(user.user_profile_image) user.user_profile_image = `${process.env.APP_HOST}/uploads/users/${user.user_profile_image}`

		res.status(200).json({
			statusCode: 200,
			message: 'User successfully logged!',
			data: user,
			token: await JWT.sign({
				user_id: user.user_id,
				user_role_name: user.user_role_name,
				user_role_id: user.user_role_id,
			}),
		})

	} catch (error) {
		return next(new InternalServerError(500, error.message))
	}
}

const REGISTER = async (req, res, next) => {
	try {
		let user_profile_image;
		if(req.files?.user_profile_image){
			user_profile_image = Date.now() + '-' + req.files.user_profile_image.name.replace(/\s+/g, '-').toLowerCase()
		}

		const validate = validation.REGISTER({ ...req.body, user_profile_image })
		if(!validate.status) return next(new BadRequestError(400, validate.message))

		if(await model.CHECK_USER_PHONE({...req.body})) return next(new BadRequestError(400, "Phone number already exist!"))
		if(req?.body?.user_role_id) if(await model.CHECK_USER_ROLE({...req.body})) return next(new BadRequestError(400, 'User role not found!'))

		const user = await model.REGISTER({ ...req.body, user_profile_image })

		if(!user) throw new NotFoundError(404, 'User not created!')

		if(user.user_profile_image) user.user_profile_image = `${process.env.APP_HOST}/uploads/users/${user.user_profile_image}`
		
		if(req.files?.user_profile_image){
				await req.files.user_profile_image.mv(
					resolve(
						process.cwd(),
						'src',
						'assets',
						'uploads',
						'users',
						user_profile_image
					)
				)
		}

		res.status(200).json({
			statusCode: 200,
			message: 'User successfully registered!',
			data: user,
			token: await JWT.sign({
				user_id: user.user_id,
				user_role_name: user.user_role_name,
				user_role_id: user.user_role_id,
			}),
		})

	} catch (error) {
		return next(new InternalServerError(500, error.message))
	}
}

export default {
	LOGIN,
	REGISTER,
}
