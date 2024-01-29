import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useAppContext } from '../context/AppContext';
import logo from '../images/aceva.png';

function Layout({children, toggleRefresh, toggleLoggedInState}) {
  const navigate = useNavigate()
  const {userInfo} = useAppContext()
  const [mobileSidebar, setMobileSidebar] = useState(true)

  const [width, setWidth] = useState(window.innerWidth)

  const [sidebarToggle, setSidebarToggle] = useState(false)

  const windowSizeChangeHandler = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', windowSizeChangeHandler)
    return () => {
      window.removeEventListener('resize', windowSizeChangeHandler)
    }

  }, [userInfo])
  
  const isMobile = width <= 768; 

  let timer;
  // logout handler
  const handleLogout = async () => {

    // Clear the local storage
    localStorage.clear();
    if (typeof toggleLoggedInState === 'function') {
      toggleLoggedInState()
    }
    navigate('/login')
      
  }
  const events = [
    "load",
    "mousemove",
    "mousedown",
    "click",
    "scroll",
    "keypress",
  ];

  // this resets the timer if it exists.
  const resetTimer = () => {
    if (timer) clearTimeout(timer);
  };
  // this function sets the timer that logs out the user after 10 secs
  const handleLogoutTimer = () => {
    timer = setTimeout(() => {
      // clears any pending timer.
      resetTimer();
      // Listener clean up. Removes the existing event listener from the window
      Object.values(events).forEach((item) => {
        window.removeEventListener(item, resetTimer);
      });
      // logs out user
      handleLogout();
    }, 10 * 60 * 1000); // 10000ms = 10secs. You can change the time.
  };

  // when component mounts, it adds an event listeners to the window
  // each time any of the event is triggered, i.e on mouse move, click, scroll, keypress etc, the timer to logout user after 10 secs of inactivity resets.
  // However, if none of the event is triggered within 10 secs, that is app is inactive, the app automatically logs out.
  useEffect(() => {
    Object.values(events).forEach((item) => {
      window.addEventListener(item, () => {
        resetTimer();
        handleLogoutTimer();
      });
    });
  }, []);

  return (
    <>
      <section className='main-section'>
        <div className="dashboard-wrapper">
          {/* desktop sidebar */}
          {/* <div className="mobile-hide">
            <Sidebar isMobile={isMobile} sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
          </div> */}

          {/* mobile sidebar */}
          {/* <div className={mobileSidebar ? "desktop-hide mobile-sidebar-wrapper" : "desktop-hide mobile-sidebar-wrapper active"}>
            <MobileSidebar isMobile={isMobile} mobileSidebar={mobileSidebar} setMobileSidebar={setMobileSidebar} />
          </div> */}
          
          {/* main body */}
          <main className={sidebarToggle ? "active" : ""}>
            <div className="body-container">
              
              {/* header */}
              <section className="header-section">
                <div className="container">
                  <Header toggleLoggedInState={toggleLoggedInState} toggleRefresh={toggleRefresh} isMobile={isMobile} mobileSidebar={mobileSidebar} setMobileSidebar={setMobileSidebar} sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
                </div>
              </section>

              {/* body */}
              <div className="container">
                <div className="body-wrapper">
                  {children}
                </div>
              </div>
            </div>
          </main>

          {/* footer section */}
          {/* <div className={`footer-wrapper dashboard-footer-wrapper`}>
            <Link to="/">
              <div className="footer-logo">
                <img src={logo} alt="logo" />
              </div>
            </Link>
            
            <div className="footer-bottom-info">
              <p>
                <a href={`mailto:info@wipdata.com`}>info@wipdata.com</a>
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Layout