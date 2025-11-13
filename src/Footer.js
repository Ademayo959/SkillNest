import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Footer = () => {
    return (
        <div className="footer">
            <div className="futa">
                <footer>
                    <div>
                        <Link className="footer-home-link" to="/">
                            <h1 className="logo"><span className="skill">Skill</span><span className="nest">Nest</span></h1>
                        </Link>
                        <p className="footerText">Skill nest is the top-leading platform for learning digital skills, with great instructors and a robust curriculum, we got you covered 😉!</p>
                    </div>
                    <div className="footer-div-two">
                        <div className="list-div">
                            <ul>
                                <li className="top-li">Pages</li>
                                <li><Link to="/courses" className="bottom-li-links">Courses</Link></li>
                                <li><Link to="/blogs" className="bottom-li-links">Blogs</Link></li>
                                <li><Link to="/aboutus" className="bottom-li-links">About Us</Link></li>
                            </ul>
                        </div>
                        <div className="list-div">
                            <ul>
                                <li className="top-li">Social Media</li>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>LinkedIn</li>
                            </ul>
                        </div>
                        <div className="list-div">
                            <ul>
                                <li className="top-li">Products</li>
                                <li>Find Jobs</li>
                                <li>Post Jobs</li>
                                <li>Connect</li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <div className="bottomText">
                    <div>
                        <p>
                            ©2025 Skillnest. All rights reserved
                        </p>
                    </div>
                    <div>
                        <p>
                            Made by <a href="https://x.com/build_pixels/status/1988704383182499998?s=20" className="bottom-link">Olùwámâyõwá</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;