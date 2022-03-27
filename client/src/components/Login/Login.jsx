import './Login.scss'
import { useState } from 'react';
import { useValidation } from '../../hooks/useValidation';
import { loginSchema } from '../../validation/Schemas'
import { login } from '../../services/userService'
import { toast } from 'react-toastify';
import LoginForm from './LoginForm/LoginForm';
import LoginHeader from './LoginHeader/LoginHeader';
import Loading from '../../components/common/Loading/Loading'

const Login = ({ setIsMenuOpen }) => {
    const [isLoading, setIsLoading] = useState(false)

    const [user] = useState({
        userEmail: '',
        userPassword: '',
    })
    const [error, setError] = useState()

    const {data, errors, handleChange, validate} = useValidation(user,loginSchema)

    const validateBtn = () => {
        const result = validate(data)
        if(result) return true
        return false
    }

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            setIsLoading(true)
            const loginUser = { ...data }
            await login(loginUser)
            toast.success("התחברת בהצלחה!")
            setIsMenuOpen(false)
        } catch (err) {
            setIsLoading(false)
            const {data} = err.response
            if(data.details) return setError(data.details[0].message)
            setError(data)
        }
    }

    return (
        <div className='wrapper'>
            {isLoading && <Loading />}
            <div className="login">
                <span className='exit-menu' onClick={()=> setIsMenuOpen(false)}>X</span>
                <LoginHeader />
                <form onSubmit={(e)=> handleSubmit(e)}>
                    <LoginForm 
                        handleChange={handleChange}
                        errors={errors}
                        user={user}
                    />
                    {error && <p className='error'>{error}</p>}
                    <button 
                        type="submit" 
                        disabled={validateBtn()} 
                        className={`login-btn g-filled-btn ${validateBtn() && 'g-disabled'}`}>
                            כניסה לחשבון
                        </button>
                </form>
            </div>
        </div>
    );
}
 
export default Login;