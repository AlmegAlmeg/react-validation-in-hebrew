import './Checkbox.scss'

const Checkbox = ({ name, isAcceptAds, handleChange }) => {
    return (
        <div className='checkbox'>
            <input 
                className="checkbox-input"
                type="checkbox" 
                name={name} 
                id={name} 
                onChange={(e)=> handleChange(e)} 
                defaultChecked={isAcceptAds}
            />
            <label htmlFor={name}>אני מאשר/ת קבלת פרסומים למייל</label>
        </div>
    );
}
 
export default Checkbox;