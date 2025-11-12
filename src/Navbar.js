import { Link } from 'react-router-dom'
import { animate, motion } from 'framer-motion';
import { type } from '@testing-library/user-event/dist/type';

const Navbar = () => {
    const navariants = {
        initial: {
            y: '-100vh',
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0,
                duration: 1,
                type: 'spring',
            }
        }
    }
    return (
        <motion.div
            variants={navariants}
            initial="initial"
            animate="animate"
            className="Navbar">
            <Link className="logoLink" to="/">
                <h1 className="logo"><span className="skill">Skill</span><span className="nest">Nest</span></h1>
            </Link>
            <div className="secondDiv">
                <div>
                    <select className="dropdown">
                        <option value="Courses">Categories</option>
                        <option value="Design & Creative">Design & Creative</option>
                        <option value="Software-Development">Software-Development</option>
                        <option value="Data-Analytics">Data-Analytics</option>
                        <option value="Medecine & Surgery">Medecine & Surgery</option>
                    </select>
                </div>
                <div className="inputBar">
                    <input type="text" placeholder="Search Courses" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </div>
            <div className="thirdDiv">
                <div className="navLinks">
                    <Link to="/courses">Courses</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/aboutus">About Us</Link>
                </div>
                <div className="btnDiv">
                    <Link to="/login" className="btnDiv-button">Log In</Link>
                    <Link to="/signup" className="btnDiv-button">Sign Up</Link>
                </div>
            </div>
        </motion.div>
    );
}

export default Navbar;