const express = require('express')
const router = express.Router()
const { registerSchema, loginSchema } = require('../validations/validations')
const { createToken } = require('../config/jwt')
const { createHash, compareHash } = require('../config/bcrypt')
const User = require('../DB/userModel')
const Address = require('../DB/addressModel')

router.post('/register', async (req,res) => {
    try {
        let {
            userEmail, userPassword, isAcceptAds, firstName, 
            lastName, city, address, houseNumber, phoneNumber, 
            apartmentNumber, apartmentCode
        } = await registerSchema.validateAsync(req.body, { abortEarly: false })

        const isUserExists = await User.find({userEmail:userEmail})
        if(isUserExists.length !== 0) 
            throw 'אימייל זה קיים במערכת, יש להתחבר במקום'
        
        userPassword = await createHash(userPassword)
        const newUser = new User({
            userEmail, userPassword, isAcceptAds,
            fullName: `${firstName} ${lastName}`
        })
        await newUser.save()
        const newAddress = new Address({
            firstName, lastName, city, address,
            houseNumber, phoneNumber, apartmentNumber,
            apartmentCode, createdBy: newUser.id
        })
        await newAddress.save()
        res.status(200).send('משתמש חדש נוצר בהצלחה!')
    } catch (err) {
        res.status(400).send(err)
    }
})

router.post('/login', async (req,res) => {
    try {
        const { userEmail, userPassword } = await loginSchema.validateAsync(req.body, { abortEarly: false })
        const isUserExists = await User.find({ userEmail:userEmail })

        if(isUserExists.length === 0 )
            throw 'אימייל זה לא קיים במערכת, אנא בדקו שנית או התחברו'
        
        const isPassOk = await compareHash(userPassword, isUserExists[0].userPassword)
        if(!isPassOk) throw 'סיסמא שגויה'
        
        const token = await createToken({userEmail:userEmail, fullName: isUserExists[0].fullName})
        res.status(200).json({
            token: token
        })
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router