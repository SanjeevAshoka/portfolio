import { useState } from 'react';
import ContactPopup from '../ContactPopup/ContactPopup';
import {FaTwitter, FaLinkedin, FaGithub} from "react-icons/fa";
import { handleSocialIcons } from '../../utils';
import profile from "../../assets/profile.jpeg";
import './hero.scss';
import { useAppContext } from '../../Context/Context';

const Hero = () => {
    const[contactModal, setContactModal] = useState(false);
    const popupHandle = ()=>{
        setContactModal(!contactModal);
    }
    const {heroSectionData} = useAppContext()?.data || {};
  return (
      <>
          {contactModal && <ContactPopup  popupHandle={popupHandle} />}
          <div className='hero'>
              <div className="imageholder">
                  <img src={profile} alt="Profile Pic" />
              </div>
              <div className='hero__left'>
                  <div className="textholder">
                      <h3>{heroSectionData.heroIam} <span className='namespan'>{heroSectionData.heroName}</span></h3>
                      <h3>{heroSectionData.techRole}</h3>
                      <h3 className='consult'>{heroSectionData.ifConsultant ? heroSectionData.consultantText : ''}</h3>
                  </div>
                  <div className="btnholder">
                      <button className='contactbtn' onClick={popupHandle}>{heroSectionData.contactBtnText}</button>
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
