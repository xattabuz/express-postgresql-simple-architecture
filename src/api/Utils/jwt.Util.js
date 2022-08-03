import JWT from 'jsonwebtoken'

import '../../config/index.js'

export default {
	sign: async payload => JWT.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' }),
	verify: async payload => JWT.verify(payload, process.env.JWT_SECRET),
}
