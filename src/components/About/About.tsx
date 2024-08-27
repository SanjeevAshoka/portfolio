import { useAppContext } from '../../Context/Context';
import { companyLinkHandler } from '../../utils';
import './about.css';

const About = () => {
  const {aboutData} = useAppContext()?.data || {};
  return (
    <div className='about'>
      <div className='aboutText'><span className='munna'>{aboutData?.aboutSectionHeader}</span></div>
      <div className='aboutDesc'>
        <h3 className='aboutDescText'>{aboutData?.aboutDescText} <span className='company' onClick={()=>companyLinkHandler('lowes')}>Lowe's India</span>.</h3>
      </div>
    </div>
  )
}

export default About;