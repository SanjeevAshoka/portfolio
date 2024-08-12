import './Portfolio.css';
import { FaGithub } from 'react-icons/fa';
import { FaArrowRightLong } from "react-icons/fa6";
import { projectRepoIcons, projectWebsiteLinks } from '../../utils';
import { useAppContext } from '../../Context/Context';

const PortFolio = () => {
  const {portfolioSectionData} = useAppContext()?.data || {};
  return (
    <div className="portfolio">
      <div className="headerTitle"><span>{portfolioSectionData.portfolioSectionHeader}</span></div>
      <div className="portfolioList">
        {portfolioSectionData?.portfolioCardsData?.length > 0 && portfolioSectionData.portfolioCardsData.map((portfolioItems: any) => (
          <div className="portfolioCard">
            <div className='imgHol'>
              <img src={portfolioItems.imageSrc} alt={portfolioItems.imageAlt} className='portfolioImg' />
            </div>
            <div className="portfolioDesc">
              <p className='descTitle'>{portfolioItems.projectName}</p>
              <p className='descCard'>{portfolioItems.projectDesc}</p>
              <div className='browseSection'>
                <button className='browseButton'>
                  <span className='btnText'>{portfolioSectionData.visitBtnText}</span>
                  <span className="icon" onClick={() => projectWebsiteLinks(portfolioItems.projectWebsite)}>
                    <FaArrowRightLong /></span>
                </button>
                <button className='browseButton'>
                  <span className='btnText'>{portfolioSectionData.gitBtnText}</span>
                  <span className="icon" onClick={() => projectRepoIcons(portfolioItems.gitRepoName)}>
                    <FaGithub /></span>
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="portfolioCard">
          <div className='imgHol'>
            <img src={portfolioSectionData.imageSrc} alt={portfolioSectionData.imageAlt} className='portfolioImg' />
          </div>
          <div className="portfolioDesc">
            <p className='descTitle'>{portfolioSectionData.projectName}</p>
            <p className='descCard'>{portfolioSectionData.projectDesc}</p>
            <div className='browseSection'>
              <button className='browseButton'>
                <span className='btnText'>{portfolioSectionData.visitBtnText}</span>
                <span className="icon" onClick={() => projectWebsiteLinks('responsive')}>
                  <FaArrowRightLong /></span>
              </button>
              <button className='browseButton'>
                <span className='btnText'>{portfolioSectionData.gitBtnText}</span>
                <span className="icon" onClick={() => projectRepoIcons('Responsive_Landing_Page')}>
                  <FaGithub /></span>
              </button>
            </div>
          </div>
        </div> */}
        {/* <div className="portfolioCard">
          <div className='imgHol'>
            <img src={fitClub} alt="FitClub Gym" className='portfolioImg' />
          </div>
          <div className="portfolioDesc">
            <p className='descTitle'>Fitclub Website</p>
            <p className='descCard'>A Responsive Gym Website with  info about gym's services, offers...</p>
            <div className='browseSection'>
              <button className='browseButton'>
                <span className='btnText'>Website</span>
                <span className="icon" onClick={() => projectWebsiteLinks('fitClub')}>
                  <FaArrowRightLong /></span>
              </button>
              <button className='browseButton'>
                <span className='btnText'>GitRepo</span>
                <span className="icon" onClick={() => projectRepoIcons('fit_Club_Website')}>
                  <FaGithub /></span>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default PortFolio;
