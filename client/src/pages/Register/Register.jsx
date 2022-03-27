import './Register.scss'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { userAddressSchema, userDetailsSchema } from '../../validation/Schemas'
import { useValidation } from '../../hooks/useValidation'
import { toast } from 'react-toastify'
import { getCurrentUser, login, register } from '../../services/userService'
import FormHeader from '../../components/RegisterForm/FormHeader/FormHeader'
import FormTop from '../../components/RegisterForm/FormTop/FormTop'
import FormBottom from '../../components/RegisterForm/FormBottom/FormBottom'
import Loading from '../../components/common/Loading/Loading'

const Register = () => {
    const user = getCurrentUser()
    const [isUserRegistered, setIsUserRegistered] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [userDetails] = useState({
        userEmail: '',
        userPassword: '',
        userPasswordConfirm: '',
        isAcceptAds: true
    })

    const [userAddress] = useState({
        firstName: '',
        lastName: '',
        city: '',
        address: '',
        houseNumber: '',
        phoneNumber: '',
        apartmentNumber: '',
        apartmentCode: ''
    })

    const [errors, setErrors] = useState([])

    const { data: dataDetails, errors: errorsDetails, handleChange: changeDetails, validate: validateDetails} = 
        useValidation(userDetails ,userDetailsSchema)

    const { data: dataAddress, errors: errorsAddress, handleChange: changeAddress, validate: validateAddress} = 
        useValidation(userAddress ,userAddressSchema)

        
    const comparePasswords = (pass, confirmPass) => {
        if(pass === confirmPass) return true
        else return false
    }
    
    const validateBtn = () => {
        const addressResult = validateAddress(dataAddress)
        const detailsResult = validateDetails(dataDetails)
        if(!addressResult && !detailsResult) return false
        return true
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        const { userPassword, userPasswordConfirm } = dataDetails
        const passMatch = comparePasswords(userPassword, userPasswordConfirm)
        if(!passMatch) return setErrors(['סיסמתך אינה זהה לאימות שלה'])
        const user = {...dataAddress, ...dataDetails }
        sendData(user)
    }
    
    const sendData = async user => {
        try {
            setIsLoading(true)
            delete user.userPasswordConfirm
            await register(user)
            const { userEmail, userPassword } = user
            const loginUser = { userEmail, userPassword }
            await login(loginUser)
            toast.success("הרשמה למערכת בוצעה בהצלחה!")
            setIsUserRegistered(true)
        } catch (err) {
            const { data } = err.response
            setIsLoading(false)
            if(data.details) return setErrors([data.details[0].message])
            setErrors([data])
        }
    }

    return (
        <form className='register' onSubmit={(e)=> handleSubmit(e)}>
            {isLoading && <Loading />}
            {isUserRegistered && <Navigate to='/'/>}
            {user && <Navigate to='/'/>}
            <FormHeader />
            <FormTop 
                changeDetails={changeDetails}
                errors={errorsDetails}
            />
            <FormBottom
                changeAddress={changeAddress}
                errors={errorsAddress}
            />
            <div className='errors'>
                {errors && errors.map((error, i)=>{
                    return <p key={i}>{error}</p>
                })}
            </div>
            <div className="register-buttons">
                <Link to='/shopping-cart'>{`< חזרה לעגלת הקניות`}</Link>
                <button 
                    type='submit'
                    disabled={validateBtn()} 
                    className={`g-filled-btn ${validateBtn() && 'g-disabled'}`}>
                        המשך לאפשרויות משלוח
                </button>
            </div>
        </form>
    );
}
 
export default Register;