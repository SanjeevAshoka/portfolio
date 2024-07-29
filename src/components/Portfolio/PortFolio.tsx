import './Portfolio.css';
import moviex from '../../assets/moviex.png';
import landing from '../../assets/landing.png';
import fitClub from '../../assets/fitClub.png';
import { FaGithub } from 'react-icons/fa';
import { FaArrowRightLong } from "react-icons/fa6";
import { projectRepoIcons, projectWebsiteLinks } from '../../utils';

const PortFolio = () => {
  return (
    <div className="portfolio">
      <div className="headerTitle"><span>Portfolio</span></div>
      <div className="portfolioList">
        <div className="portfolioCard">
          <div className='imgHol'>
            <img src={moviex} alt="Moviex" className='portfolioImg' />
          </div>
          <div className="portfolioDesc">
            <p className='descTitle'>Movix Website</p>
            <p className='descCard'>Online OTT Platform like Disney+HotStar...</p>
            <div className='browseSection'>
              <button className='browseButton'>
                <span className='btnText'>Website</span>
                <span className="icon" onClick={() => projectWebsiteLinks('movix')}>
                  <FaArrowRightLong /></span>
              </button>
              <button className='browseButton'>
                <span className='btnText'>GitRepo</span>
                <span className="icon" onClick={() => projectRepoIcons('Moviex')}>
                  <FaGithub /></span>
              </button>
            </div>
          </div>
        </div>
        <div className="portfolioCard">
          <div className='imgHol'>
            <img src={landing} alt="Moviex" className='portfolioImg' />
          </div>
          <div className="portfolioDesc">
            <p className='descTitle'>Landing Page</p>
            <p className='descCard'>Responsive Landing Page for an photography agency...</p>
            <div className='browseSection'>
              <button className='browseButton'>
                <span className='btnText'>Website</span>
                <span className="icon" onClick={() => projectWebsiteLinks('responsive')}>
                  <FaArrowRightLong /></span>
              </button>
              <button className='browseButton'>
                <span className='btnText'>GitRepo</span>
                <span className="icon" onClick={() => projectRepoIcons('Responsive_Landing_Page')}>
                  <FaGithub /></span>
              </button>
            </div>
          </div>
        </div>
        <div className="portfolioCard">
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
        </div>
      </div>
    </div>
  )
}

export default PortFolio;
