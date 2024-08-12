import './Contact.css';
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { handleSocialIcons } from '../../utils';
import { useAppContext } from '../../Context/Context';

const Contact = () => {
    const {contactData}  = useAppContext()?.data || {};
  return (
      <>
          <div className='contact'>
              <div className="contactHeader">{contactData.contactSectionHeader}</div>
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
            <div className='ongoingContainer'><span className='headerOngoing'>{contactData.onGoing.ongoingSectionHeader}</span></div>
            <div className="ongoingFeatures">
                {
                    contactData?.onGoing?.ongoingfeatures && contactData?.onGoing?.ongoingfeatures.map((ongoingItem:string)=>(
                        <span key={ongoingItem} className="featureName">{ongoingItem}</span>
                    ))
                }
            </div>
          </div>
          <div className="thanks">
              <div className="thanksMsg">
                  {contactData.thanksMessage}
              </div>
          </div>
      </>
  )
}

export default Contact;