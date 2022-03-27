import './LoginForm.scss'
import Input from '../../common/Input/Input'
import { Link } from 'react-router-dom'

const LoginForm = ({ user,handleChange, errors }) => {
    
    return (
        <div className='login-form'>
            <Input 
                handleChange={handleChange}
                errors={errors}
                label={'מייל'}
                name={'userEmail'}
                values={user}
            />
            <Input 
                handleChange={handleChange}
                errors={errors}
                label={'סיסמה'}
                name={'userPassword'}
                type={'password'}
                values={user}
            />
            <Link className='forgot-password' to='/forgot-password'>שכחתי סיסמא</Link>
        </div>
    );
}
 
export default LoginForm;