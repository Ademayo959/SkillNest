import facebook from './img/facebook.png'
import google from './img/google.png'
import ibm from './img/ibm.png'
import slack from './img/slack.png'
import zoom from './img/zoom.png'

const Sponsors = () => {
    return ( 
        <div className="Sponsors">
            <p className='sponsor-text'><span>We collaborate with</span> <span className="companies-blue-text">20+ leading companies</span></p>
            <div className='sponsor-companies-div'>
                <img src={google} alt="google logo" className='sponsor-companies' />
                <img src={facebook} alt="facebook logo" className='sponsor-companies' />
                <img src={ibm} alt="ibm logo" className='sponsor-companies' />
                <img src={slack} alt="slack logo" className='sponsor-companies' />
                <img src={zoom} alt="zoom logo" className='sponsor-companies' />
            </div>
        </div>
     );
}
 
export default Sponsors
