const Joi = require('joi')

const registerSchema = Joi.object({
    userEmail: Joi.string().email().required(),
    userPassword: Joi.string().min(3).max(16).required(),
    isAcceptAds: Joi.boolean().default(true),
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    city: Joi.string().min(2).required(),
    address: Joi.string().min(2).required(),
    houseNumber: Joi.number().required(),
    phoneNumber: Joi.string().min(8).max(10).required(),
    apartmentNumber: Joi.string().allow(""),
    apartmentCode: Joi.string().allow("")
})

const loginSchema = Joi.object({
    userEmail: Joi.string().email().required(),
    userPassword: Joi.string().min(3).max(16).required(),
})

module.exports = {
    registerSchema,
    loginSchema
}