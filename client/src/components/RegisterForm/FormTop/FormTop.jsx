import { Link } from "react-router-dom";
import Checkbox from "../../common/Checkbox/Checkbox";
import Input from '../../common/Input/Input';
import './FormTop.scss'

const FormTop = ({ changeDetails, errors }) => {

    return (
        <div className="form-top">
            <div className="ft-flexbox">
                <h4>פרטי משתמש</h4>
                <p>
                    האם ברשותך חשבון באתר?
                    <Link to='/'>התחבר/י לחשבון</Link>
                </p>
            </div>
            <div className="g-4-col-grid">
            <Input 
                handleChange={changeDetails}
                errors={errors}
                label={'מייל'}
                name={'userEmail'}
                classes={'g-col-4'}
            />
            <Input 
                handleChange={changeDetails}
                errors={errors}
                label={'בחר סיסמה'}
                name={'userPassword'}
                type={'password'}
                classes={'g-col-2'}
            />
            <Input 
                handleChange={changeDetails}
                errors={errors}
                label={'אימות סיסמה'}
                name={'userPasswordConfirm'}
                type={'password'}
                classes={'g-col-2'}
            />
            </div>
            <Checkbox
                isAcceptAds={true}
                name={'isAcceptAds'}
            />
        </div>
    );
}
 
export default FormTop;