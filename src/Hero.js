import heroPhoto from './img/hero.png'
import { easeInOut, motion } from 'framer-motion'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Hero = () => {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 1 }}
            className="Hero">
            <div>
                <h1 className='hero-main-text'>Unlock your <br /> Potential with <br /> Online training</h1>
                <h3 className='hero-sub-text'>Upgrade your skills and achieve your goals with <br /> expert instructors and flexible learning options.</h3>
                <Link to ="/courses">
                    <button className='hero-btn'>Explore out courses</button>
                </Link>
            </div>
            <motion.div className='bat'
                drag
            >
                <motion.div className='day'
                    whileHover={{
                        x: 50,
                    }}
                >
                    <motion.img src={heroPhoto} alt="lady sitting" className='hero-img' />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Hero;