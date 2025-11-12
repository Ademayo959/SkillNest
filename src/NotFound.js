import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <div className="not-found">
            <div className='papa'>
                <h1 className='not-found-error'>Error 404</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="not-found-svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>
                <h1 className="not-found-main-text">Oops! The page you're looking <br /> for doesn't exist.</h1>
                <h3 className='not-found-sub-text'>It might have been moved or deleted, <br /> or you may have mistyped the address.</h3>
                <Link to="/" className="not-found-link">Go Back Home</Link>
            </div>
        </div>
    );
}

export default NotFound;