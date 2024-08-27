import './Portfolio.css';
import { FaGithub } from 'react-icons/fa';
import { FaArrowRightLong } from "react-icons/fa6";
import { projectRepoIcons, projectWebsiteLinks } from '../../utils';
import { useAppContext } from '../../Context/Context';

const PortFolio = () => {
  const { portfolioSectionData } = useAppContext()?.data || {};
  return (
    <div className="portfolio">
      <div className="headerTitle"><span>{portfolioSectionData?.portfolioSectionHeader}</span></div>
      <div className="portfolioList">
        {portfolioSectionData?.portfolioCardsData?.length > 0 && portfolioSectionData?.portfolioCardsData.map((portfolioItems: any) => (
          <div className="portfolioCard">
            <div className='imgHol'>
              <img src={portfolioItems.imageSrc} alt={portfolioItems.imageAlt} className='portfolioImg' />
            </div>
            <div className="portfolioDesc">
              <p className='descTitle'>{portfolioItems.projectName}</p>
              <p className='descCard'>{portfolioItems.projectDesc}</p>
              <div className='browseSection'>
                <button className='browseButton'>
                  <span className='btnText'>{portfolioSectionData?.visitBtnText}</span>
                  <span className="icon" onClick={() => projectWebsiteLinks(portfolioItems.projectWebsite)}>
                    <FaArrowRightLong /></span>
                </button>
                <button className='browseButton'>
                  <span className='btnText'>{portfolioSectionData?.gitBtnText}</span>
                  <span className="icon" onClick={() => projectRepoIcons(portfolioItems.gitRepoName)}>
                    <FaGithub /></span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortFolio;
