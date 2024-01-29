import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/chalaman.png';
import HeaderDropdown from './antd/HeaderDropdown';
import SidebarDrawer from './antd/SidebarDrawer';

function Header({
  isMobile,
  toggleLoggedInState,
  mobileSidebar,
  setMobileSidebar,
}) {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [mode, setMode] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : 'light-theme'
  );
  const [userDetails, setUserDetails] = useState({});
  const [users, setUsers] = useState([]);
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem('userInfo'))
  );
  // console.log(userInfo)

  const navigate = useNavigate();

  /* Method that will fix header after a specific scrollable */
  const scrollHandler = () => {
    const header = document.querySelector('header');
    const scrollTop = window.scrollY;
    scrollTop >= 200
      ? header.classList.add('active')
      : header.classList.remove('active');
  };

  useEffect(() => {
    if (isMobile) {
      window.addEventListener('scroll', scrollHandler);
      return () => {
        window.removeEventListener('scroll', scrollHandler);
      };
    }
  }, [isMobile, userInfo]);

  return (
    <>
      <div className="header-section">
      <header className="container">
        {/* header option */}
        <div className="header-option">
          {/* burger menu */}
          <SidebarDrawer />

          <Link to="/">
            <div className="header-logo-wrap">
              <div className="header-sidebar-logo">
                <img src={logo} alt="logo" />
              </div>
              {/* <h2 className="header-site-title">{settings?.siteName}</h2> */}
            </div>
          </Link>

          {/* <div className="mode" onClick={toggleTheme}>
            { mode ? <MdDarkMode />  : <MdOutlineLightMode /> }
          </div> */}
        </div>
        {/* header profile */}
        <div
          className="header-profile"
          onClick={() => setDropdownToggle(!dropdownToggle)}
        >
          {/* profile */}
          <div className="relative">
            <div className="header-logo-wrap new-header-logo-wrap">
              <div className="header-logo-content"></div>
            </div>

            {/* dropdown */}
            <HeaderDropdown />
          </div>
        </div>
      </header>
      </div>
    </>
  );
}

export default Header;
