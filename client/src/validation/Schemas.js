import Joi from 'joi-browser'

export const userDetailsSchema = {
    userEmail: Joi.string().email().required(),
    userPassword: Joi.string().min(2).max(10).required(),
    userPasswordConfirm: Joi.string().min(2).max(10).required(),
    isAcceptAds: Joi.boolean().default(true)
}
    
export const userAddressSchema = {
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    city: Joi.string().min(2).required(),
    address: Joi.string().min(2).required(),
    houseNumber: Joi.number().required(),
    phoneNumber: Joi.string().min(8).max(10).required(),
    apartmentNumber: Joi.string().allow(""),
    apartmentCode: Joi.string().allow("")
}

export const loginSchema = {
    userEmail: Joi.string().email().required(),
    userPassword: Joi.string().min(2).max(10).required(),
}
