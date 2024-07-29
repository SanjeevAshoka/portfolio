import { useState } from 'react';
import ContactPopup from '../ContactPopup/ContactPopup';
import {FaTwitter, FaLinkedin, FaGithub} from "react-icons/fa";
import { handleSocialIcons } from '../../utils';
import './hero.scss';

const Hero = () => {
    const[contactModal, setContactModal] = useState(false);
    const popupHandle = ()=>{
        setContactModal(!contactModal);
    }
  return (
      <>
          {contactModal && <ContactPopup  popupHandle={popupHandle} />}
          <div className='hero'>
              <div className="imageholder">
                  <img src="./../../src/assets/profile.jpeg" alt="" />
              </div>
              <div className='hero__left'>
                  <div className="textholder">
                      <h3>I'm <span className='namespan'>Sanjeev Ashoka</span></h3>
                      <h3>FrontEnd Developer & React</h3>
                      <h3 className='consult'>Consulantant</h3>
                  </div>
                  <div className="btnholder">
                      <button className='contactbtn' onClick={popupHandle}>Contact Me</button>
                  </div>
              </div>
              <div className="hero__right">
                  <div className="socialIcons">
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
          </div>
      </>
  )
}

export default Hero;
