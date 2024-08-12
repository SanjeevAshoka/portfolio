import { useEffect, useState } from 'react';
import robo from "../../assets/vite.png";
import { SlMenu } from "react-icons/sl";

import './Nav.css';
import { useAppContext } from '../../Context/Context';

const Nav = ({ updateCurrentSection }: { currentSectionUserwants: string, updateCurrentSection: (name: string) => void }) => {
  const [isclicked, setClicked] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [inpPlaceHolder, setInpHolder] = useState('Search...');
  const [shouldExpand, setShouldExpand] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [currLanguage, setCurrLanguage] = useState('En');
  const { data: { navSectionData }, languageUpdate } = useAppContext() || {};
  const { languageOptions, navOptions } = navSectionData;

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
  const handleLanguageClick = (selectedLanguage: string) => {
    languageUpdate(selectedLanguage);
    setCurrLanguage(() => selectedLanguage);
  }
  return (
    <>
      <div className="locale__section">
        {languageOptions && languageOptions.map(
          (languageItem: any) => (<span className={currLanguage === languageItem.languageText ? "child lighten" : "child"} onClick={() => handleLanguageClick(languageItem.languageText)}
          >{showIcon ? languageItem.flag : languageItem.languageText + "-" + languageItem.flag}</span>))}
      </div>
      <div className='nav__parent'>
        <div className='img__child'><img src={robo} alt="" className="logo" /></div>
        <ul className='nav__links'>
          {!showIcon ? <>{
            navOptions && navOptions.map((navOption: string, ind: number) => (
              <li key={ind} className={ind === navOption.length - 1 ? 'nav__links_item itempopup' : 'nav__links_item'} onClick={() => updateCurrentSection(navOption.toLowerCase())}>{navOption}</li>
            ))
          }</> :
            <div className='iconHolder'>
              <SlMenu size={'1.5em'} onClick={hanldeMenuclick} />
              {showPopup && <ul className='nav__links popuplist'>
                <>
                  {
                    navOptions && navOptions.map((navOption: string, ind: number) => (
                      <li key={ind} className={ind === navOption.length - 1 ? 'nav__links_item itempopup' : 'nav__links_item'} onClick={() => updateCurrentSection(navOption.toLowerCase())}>{navOption}</li>
                    ))
                  }
                </>
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
            // value={data}
            // onChange={(e) => setData(e.target.value)}
            />
            <button type="submit" className={isclicked ? 'button clicked' : 'button'} onClick={handleClick}>Search</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Nav;
