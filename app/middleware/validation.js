const Joi = require("joi");

module.exports = {
	validateRegister: (req, res, next) => {
		const schema = Joi.object({
			nama: Joi.string().required(),
			email: Joi.string().required().email(),
			umur: Joi.number(),
			password: Joi.string().min(6).required(),
		});

		const { nama, email, umur, password } = req.body;
		req.validateError = schema.validate({ nama, email, umur, password }).error;
		next();
	},
	validateLogin: (req, res, next) => {
		const schema = Joi.object({
			email: Joi.string().required().email(),
			password: Joi.string().min(6).required(),
		});
		const { email, password } = req.body;
		req.validateError = schema.validate({ email, password }).error;
		next();
	},
};
