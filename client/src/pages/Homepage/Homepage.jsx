import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCurrentUser } from '../../services/userService';
import Login from '../../components/Login/Login';
import './Homepage.scss'

const Homepage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const user = getCurrentUser()
    return (
        <div className="homepage">
            <h2 className="hp-header">
                {user ? `טוב לראות אותך שוב ${user.fullName}` : 'ברוכים הבאים'}
            </h2>
            <div className="links">
                {user ? 
                    <Link className='g-filled-btn' to='/logout'>התנתק</Link>:
                    <div className='inner-links'>
                        <Link className='g-filled-btn' to='/register'>הרשמה</Link>
                        <button className='g-filled-btn' onClick={()=> setIsMenuOpen(true)} >התחברות</button>
                    </div>
                }
            </div>
            {isMenuOpen && <Login setIsMenuOpen={setIsMenuOpen} />}
        </div>
    );
}
 
export default Homepage;