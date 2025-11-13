import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import AboutSubImage from './img/aboutUs/about-us-sub.jpg'
import DevPic1 from './img/aboutUs/about-us-dev11.jpg'
import DevPic2 from './img/aboutUs/about-us-dev10.jpg'
import DevPic3 from './img/aboutUs/about-us-dev9.jpg'
import DevPic4 from './img/aboutUs/about-us-dev3.jpg'
import DevPic5 from './img/aboutUs/about-us-dev7.jpg'
import DevPic6 from './img/aboutUs/about-us-dev5.jpg'

const AboutUs = () => {

    return (
        <div className="aboutUsPage">
            <div className="aboutUsPgTop">
                <h1 className="aboutUsMainText">About Us</h1>
                <p className="aboutUsSubText">Skillnest is a learning platform built to help developers grow through practical lessons, curated courses, and real-world projects, offering guidance, community support, and tools to turn ideas into polished skills.</p>
            </div>
            <div className="aboutUsPgMid">
                <div>
                    <h1 className='aboutMidMainText'>About <span className="skill">Skill</span><span className="nest">Nest</span></h1>
                    <p className='aboutMidSubText'>Skillnest is a modern learning platform designed to help developers grow through structured courses, practical projects, and collaborative learning. It provides clear guidance, supportive community features, and hands-on challenges that equip learners with real skills, confidence, and opportunities to advance in tech.</p>
                    <p className='aboutMidSubText'>Skillnest also empowers learners by offering personalized learning paths, real-time progress tracking, and community-driven feedback that strengthens understanding. With engaging content, practical examples, and consistent support, users can build confidence, improve their abilities, and stay motivated while growing steadily in their tech journey.</p>
                </div>
                <div>
                    <img src={AboutSubImage} alt="Group of People" className='aboutMidImage' />
                </div>
            </div>
            <div className='aboutUsFactorDiv'>
                <h1 className='aboutUsFactorDivHone'>Our Company's Unique Factor</h1>
                <div className='factorContainer'>
                    <div className='factorDiv'>
                        <div className='factorSvgDiv'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="aboutUsSvg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>
                        </div>
                        <p>Personalised Learning</p>
                    </div>
                    <div className='factorDiv'>
                        <div className='factorSvgDiv'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="aboutUsSvg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>
                        </div>
                        <p>Collaborative Community</p>
                    </div>
                    <div className='factorDiv'>
                        <div className='factorSvgDiv'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="aboutUsSvg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                            </svg>
                        </div>
                        <p>Skill Mapping</p>
                    </div>
                    <div className='factorDiv'>
                        <div className='factorSvgDiv'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="aboutUsSvg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                            </svg>
                        </div>
                        <p>Interactive Projects</p>
                    </div>
                </div>
            </div>
            <div className='teamDiv'>
                <h1 className='teamDivMainText'>Meet Our Team</h1>
                <p className='teamDivSubText'>At Skillnest, our team is made up of passionate developers, designers, and educators committed to helping learners succeed. We bring experience, creativity, and dedication together to build engaging courses, practical projects, and supportive tools that empower students to grow, learn, and achieve real-world success in the world of technology.</p>
                <div className="teamDevDivContainer">
                    <div className="teamDevDiv">
                        <img src={DevPic1} alt="" className='teamDevPic' />
                        <h1 className='teamDevName'>Devin Johnson</h1>
                        <p className='teamDevJob'>Chief Executive Officer</p>
                        <Link className="teamDevLink">in</Link>
                    </div>
                    <div className="teamDevDiv">
                        <img src={DevPic2} alt="" className='teamDevPic' />
                        <h1 className='teamDevName'>Cody Harvey</h1>
                        <p className='teamDevJob'>CFO/ Co-Founder</p>
                        <Link className="teamDevLink">in</Link>
                    </div>
                    <div className="teamDevDiv">
                        <img src={DevPic3} alt="" className='teamDevPic' />
                        <h1 className='teamDevName'>Adewuyi Damola</h1>
                        <p className='teamDevJob'>Chief Marketing Officer</p>
                        <Link className="teamDevLink">in</Link>
                    </div>
                    <div className="teamDevDiv">
                        <img src={DevPic4} alt="" className='teamDevPic' />
                        <h1 className='teamDevName'>Imhran Singh</h1>
                        <p className='teamDevJob'>Chief Technology Officer</p>
                        <Link className="teamDevLink">in</Link>
                    </div>
                    <div className="teamDevDiv">
                        <img src={DevPic5} alt="" className='teamDevPic' />
                        <h1 className='teamDevName'>Brandon Drake</h1>
                        <p className='teamDevJob'>Chief Strategy Officer</p>
                        <Link className="teamDevLink">in</Link>
                    </div>
                    <div className="teamDevDiv">
                        <img src={DevPic6} alt="" className='teamDevPic' />
                        <h1 className='teamDevName'>Sofia Defirst</h1>
                        <p className='teamDevJob'>Chief Operating Officer</p>
                        <Link className="teamDevLink">in</Link>
                    </div>
                </div>
            </div>
            <div className='aboutUsTryit'>
                <h1>Your Tech Career is just one Click away</h1>
                <button>Try It Now For Free</button>
            </div>
        </div>
    );
}

export default AboutUs;