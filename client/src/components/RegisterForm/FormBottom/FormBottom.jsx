import Input from '../../common/Input/Input'
import './FormBottom.scss'

const FormBottom = ({ changeAddress, errors }) => {
    return (
        <div className="form-bottom">
            <h4>כתובת למשלוח</h4>
            <div className="g-4-col-grid">
                <Input
                    handleChange={changeAddress}
                    errors={errors}
                    label={'שם פרטי'}
                    name={'firstName'}
                    classes={'g-col-2'}
                />
                <Input
                    handleChange={changeAddress}
                    errors={errors}
                    label={'שם משפחה'}
                    name={'lastName'}
                    classes={'g-col-2'}
                />
                <Input
                    handleChange={changeAddress}
                    errors={errors}
                    label={"רחוב"}
                    name={'address'}
                    classes={'g-col-2'}
                />
                <Input
                    handleChange={changeAddress}
                    errors={errors}
                    label={"מס' בית"}
                    name={'houseNumber'}
                    classes={'g-col-2'}
                />
                <Input
                    handleChange={changeAddress}
                    errors={errors}
                    label={"עיר"}
                    name={'city'}
                    classes={'g-col-2'}
                />
                <Input
                    handleChange={changeAddress}
                    errors={errors}
                    label={"דירה / כניסה"}
                    name={'apartmentNumber'}
                    classes={'g-col-1'}
                    isRequired={false}
                />
                <Input
                    handleChange={changeAddress}
                    errors={errors}
                    label={"קוד לבניין"}
                    name={'apartmentCode'}
                    classes={'g-col-1'}
                    isRequired={false}
                />
                <Input
                    handleChange={changeAddress}
                    errors={errors}
                    label={"טלפון"}
                    name={'phoneNumber'}
                    classes={'g-col-2'}
                />
            </div>
        </div>
    );
}
 
export default FormBottom;