import FemalePortrait from './img/FemalePortrait.jpeg'
import MalePortrait from './img/MalePortrait.jpeg'
import MalePortrait2 from './img/MalePortrait2.jpeg'

const Testimonials = () => {
    return (
        <div className="Testimonials">
            <h1 className="testimonials-main-text">What Our Students Say</h1>
            <div className='Testimonial-div'>
                <div className='Testimonial'>
                    <div className="Tst-top">
                        <div>
                            <img src={FemalePortrait} alt="" className='Tst-Portrait' />
                        </div>
                        <div>
                            <p className="Tst-author">Evelyn Rhodes</p>
                            <h2 className='Tst-job'>Associate UI/UX Designer</h2>
                        </div>
                    </div>
                    <div className="Tst-bottom">
                        <p className='Tst-words'>"Great UI/UX course! I learnt a lot from the <br /> knowlegeable instructors and practical exercices. <br /> Highly recommended for those looking to improve <br /> their design skills."</p>
                    </div>
                </div>
                <div className='Testimonial'>
                    <div className="Tst-top">
                        <div>
                            <img src={MalePortrait} alt="" className='Tst-Portrait' />
                        </div>
                        <div>
                            <p className="Tst-author">Miles Avery</p>
                            <h2 className='Tst-job'>Full-Stack developer</h2>
                        </div>
                    </div>
                    <div className="Tst-bottom">
                        <p className='Tst-words'>"The full-Stack Development Course was amazing! <br /> The instructors were knowlegeable and the<br /> course material was comprehensive. I highly <br /> recommend this course to anyone looking to <br /> jumpstart their career in Web-Development"</p>
                    </div>
                </div>
                <div className='Testimonial'>
                    <div className="Tst-top">
                        <div>
                            <img src={MalePortrait2} alt="" className='Tst-Portrait' />
                        </div>
                        <div>
                            <p className="Tst-author">Lucas Chen</p>
                            <h2 className='Tst-job'>Social Media Strategist</h2>
                        </div>
                    </div>
                    <div className="Tst-bottom">
                        <p className='Tst-words'>"The digital Marketing Course exceeded my <br /> expectations! The instructors were <br /> knowlegeable and the course content was <br /> highly relevant. I now feel confident in my ability <br /> to create effective digital marketing campaigns "</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;