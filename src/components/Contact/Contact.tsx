import './Contact.css';
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { handleSocialIcons } from '../../utils';

const Contact = () => {
  return (
      <>
          <div className='contact'>
              <div className="contactHeader">Contact Me</div>
              <div className="contactCards">
                  <div className='iconsWithDesc'>
                      <span className='contactExpLocation'>
                          <span><CiMail className='contactLocIcon'/></span>
                          <a href="mailto:sanjeevashoka123@gmail.com?subject=Remove me & please enter your subject&body=Plese Enter Your message"><span className='contactName'>sanjeevashoka123@gmail.com</span></a>
                      </span>
                  </div>
              </div>
              <div className="belowContact">
                  <div className="contactCards">
                      <div className='iconsWithDesc'>
                          <span className='contactExpLocation'>
                              <span><FiPhone className='contactLocIcon' /></span>
                              <span className='contactName'>+91 9872251544</span>
                          </span>
                      </div>
                  </div>
                  <div className="contactCards">
                      <div className='iconsWithDesc'>
                          <span className='contactExpLocation'>
                              <span><FaLocationDot className='contactLocIcon' /></span>
                              <span className='contactName'>Bengaluru, India</span>
                          </span>
                      </div>
                  </div>
              </div>
              <div className="contactListIcons">
                  <span className="icon" onClick={() => handleSocialIcons('github')}>
                      <FaGithub />
                  </span>
                  <span className="icon" onClick={() => handleSocialIcons('linkedin')}>
                      <FaLinkedin />
                  </span>
                  <span className="icon" onClick={() => handleSocialIcons('twitter')}>
                      <FaTwitter />
                  </span>
              </div>
          </div>
          <div className="ongoingDev">
            <div className='ongoingContainer'><span className='headerOngoing'>Still Ongoing Under Development</span></div>
            <div className="ongoingFeatures">
                <span className="featureName">Making it Fully Customisable(directly from UI)</span>
                <span className="featureName">Support for both light and dark theme</span>
                <span className="featureName">Adding Localisation(Multiple Language Support)</span>
            </div>
          </div>
          <div className="thanks">
              <div className="thanksMsg">
                  Thank you for Scrolling !
              </div>
          </div>
      </>
  )
}

export default Contact;