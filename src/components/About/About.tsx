import { companyLinkHandler } from '../../utils';
import './about.css';

const About = () => {
  return (
    <div className='about'>
      <div className='aboutText'><span className='munna'>About</span></div>
      <div className='aboutDesc'>
        <h3 className='aboutDescText'>I'm a Software Developer with <span>3+</span> years of experience, specializing in building (ocassionally developing) pixel-perfect, engaging and exceptional digital experiences. Currently, I'm focused on building accessible , human-centered web-applications at <span className='company' onClick={()=>companyLinkHandler('lowes')}>Lowe's India</span>.</h3>
      </div>
    </div>
  )
}

export default About;