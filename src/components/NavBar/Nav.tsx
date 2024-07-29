import { useEffect, useState } from 'react';
import robo from "../../assets/robo.png";
import { SlMenu } from "react-icons/sl";

import './Nav.css';
import { useAppContext } from '../../Context';

const Nav = ({ updateCurrentSection }: { currentSectionUserwants: string, updateCurrentSection: (name: string) => void }) => {
  const [isclicked, setClicked] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [inpPlaceHolder, setInpHolder] = useState('Search...');
  const [shouldExpand, setShouldExpand] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { data, setData } = useAppContext();

  useEffect(() => {
    const handleResize = () => { setShowIcon(window.innerWidth < 750); setShouldExpand(window.innerWidth < 400) }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const handleClick = (e: any) => {
    e.preventDefault();
    setClicked(true);
    setTimeout(() => { setClicked(false); }, 1000);

  }
  const handleInput = () => {
    setInpHolder('');
  }
  const handleInputBlur = () => {
    setInpHolder('Search...');
  }
  const hanldeMenuclick = () => {
    setShowPopup(!showPopup);
  }

  return (
    <div className='nav__parent'>
      <div className='img__child'><img src={robo} alt="" className="logo" /></div>
      <ul className='nav__links'>
        {!showIcon ? <><li className='nav__links_item' onClick={() => updateCurrentSection('about')}>About</li>
          <li className='nav__links_item' onClick={() => updateCurrentSection('portfolio')}>Portfolio</li>
          <li className='nav__links_item' onClick={() => updateCurrentSection('contact')}>Contact</li>
          <li className='nav__links_item itempopup' onClick={() => updateCurrentSection('experience')}>Experience</li></> :
          <div className='iconHolder'>
            <SlMenu size={'1.5em'} onClick={hanldeMenuclick} />
            {showPopup && <ul className='nav__links popuplist'>
              <><li className='nav__links_item' onClick={() => updateCurrentSection('about')}>About</li>
                <li className='nav__links_item' onClick={() => updateCurrentSection('portfolio')}>Portfolio</li>
                <li className='nav__links_item' onClick={() => updateCurrentSection('contact')}>Contact</li>
                <li className='nav__links_item itempopup' onClick={() => updateCurrentSection('experience')}>Experience</li></>
            </ul>}
            {showPopup && <div className="connector"></div>}
          </div>
        }
      </ul>
      <div className="search">
        <form>
          <input type="search" placeholder={inpPlaceHolder}
            onFocus={handleInput}
            onBlur={handleInputBlur}
            className={shouldExpand ? 'inputshorten' : ''}
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <button type="submit" className={isclicked ? 'button clicked' : 'button'} onClick={handleClick}>Search</button>
        </form>
      </div>
    </div>
  )
}

export default Nav;
