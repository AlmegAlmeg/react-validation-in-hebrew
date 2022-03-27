import { Link } from 'react-router-dom';
import './PageNotFound.scss'

const PageNotFound = () => {
    return (
        <div className='page-not-found'>
            <h3 className="pnf-header">
                אופס...
            </h3>
            <p className='pnf-main-text'>נראה שהגעת לכאן בטעות</p>
            <Link className='g-filled-btn' to='/'>חזרה לדף הבית</Link>
        </div>
    );
}
 
export default PageNotFound;