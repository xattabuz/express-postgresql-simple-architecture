//BadRequestError 
export class BadRequestError extends Error {
	constructor(statusCode = 400, message) {
		super()
		this.name = 'BadRequestError'
		this.message = message
		this.statusCode = statusCode
	}
}


//UnauthorizedError 
export class UnauthorizedError extends Error{
	constructor(statusCode = 401, message){
		super()
		this.name = "UnauthorizedError",
		this.message = message
		this.statusCode = statusCode
	}
}


//ForbiddenError 
export class ForbiddenError extends Error{
	constructor(statusCode = 403, message){
		super()
		this.name = "ForbiddenError",
		this.message = message
		this.statusCode = statusCode
	}
}


//NotFoundError 
export class NotFoundError extends Error{
	constructor(statusCode = 404, message){
		super()
		this.name = "NotFoundError",
		this.message = message
		this.statusCode = statusCode
	}
}


//InternalServerError 
export class InternalServerError extends Error{
	constructor(statusCode = 500, message){
		super()
		this.name = "InternalServerError",
		this.message = message
		this.statusCode = statusCode
	}
}

