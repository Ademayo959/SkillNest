import LoginOne from './img/login-one.jpg'
import LoginTwo from './img/login-two.jpg'
import LinkedInLogo from './img/linkedinIcon.png'
import GoogleLogo from './img/googleIcon.png'
import { useState } from 'react';
import {Link} from 'react-router-dom'

const Login = () => {
    const [source, setSource] = useState(LoginOne)

    return (
        <div className="login">
            <div className="login-wrapper">
                <div className='login-left-div'>
                    <h1 className="login-main-text">Log-In</h1>
                    <div className='sign-up-link-div'>
                        <p>Don't have an account?</p>
                        <Link to="/signup">Sign-Up</Link>
                    </div>
                    <form className='login-form'>
                        <label>Email</label>
                        <input type="text" placeholder='Email'/>
                        <label>Password</label>
                        <input type="text" placeholder='Password' />
                        <button>Log-In</button>
                    </form>
                    <div className='login-checkbox-div'>
                        <input type="checkbox" className='login-checkbox' />
                        <p>Remember me</p>
                    </div>
                    <div className='log-in-hr-div'>
                        <hr />
                        <p>OR</p>
                        <hr />
                    </div>
                    <div className='log-in-option-divs'>
                        <div className='log-in-option-div'>
                            <img src={GoogleLogo} alt="google logo" className='log-in-option-logo-one'/>
                            <p>Google</p>
                        </div>
                         <div className='log-in-option-div'>
                            <img src={LinkedInLogo} alt="linkedin logo" className='log-in-option-logo-two'/>
                            <p>LinkedIn</p>
                        </div>
                    </div>
                </div>
                <div className='login-right-div' style={{
                    backgroundImage: `url(${source})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <div className='login-img-btn-div'>
                        <button onClick={() => setSource(LoginOne)}></button>
                        <button onClick={() => setSource(LoginTwo)}></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;