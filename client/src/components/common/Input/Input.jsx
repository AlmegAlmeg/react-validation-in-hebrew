import './Input.scss'

const Input = ({ name, errors, classes, label, handleChange, isRequired = true, type='text' }) => {
    return (
        <div className={`form-input ${classes}`}>
            <label htmlFor={name}>
                {isRequired && <span className='field-required'>*</span>}
                {label}
            </label>
            <input 
                type={type}
                name={name}
                id={name}
                onChange={(e)=> handleChange(e)}
            />
            {errors[name] && <div className='input-error'>{errors[name]}</div>}
        </div>
    );
}
 
export default Input;