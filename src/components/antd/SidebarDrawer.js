import { Drawer, Space } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsNewspaper } from 'react-icons/bs';
import { FaUsers } from "react-icons/fa";
import { RiAdvertisementFill } from "react-icons/ri";
import { VscMenu } from 'react-icons/vsc';
import { NavLink, useNavigate } from 'react-router-dom';
import { apiUrl } from '../../Variables';



const SidebarDrawer = () => {
  const [chatbots, setChatbots] = useState([]);
  const [botUpgrade, setBotUpgrade] = useState(false);
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem('userInfo'))
  );
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const showDefaultDrawer = () => {
    setSize('default');
    setOpen(true);
  };

  const navigate = useNavigate();

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // Add headers to include JWT token
    const headers = {
      Authorization: `Bearer ${userInfo && userInfo.token}`,
    };

    const featchData = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/chatbot`, { headers });
        setChatbots(data);
      } catch (error) {
        console.log('scrap list fetching fail:', error);
      }
    };
    featchData();
  }, []);
  return (
    <>
      <Space>
        {/* <RxHamburgerMenu onClick={showDefaultDrawer} /> */}
        <VscMenu
          onClick={showDefaultDrawer}
          className="burger-menu-icon header-menu-icon"
        />
      </Space>
      <Drawer
        // title={`${size} Drawer`}
        placement="left"
        size={size}
        onClose={onClose}
        open={open}
      >
        <aside className="sidebar">
          <ul className="sidebar">

            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
              <button
                  className='form-button'
                >
                <span style={{ whiteSpace: 'nowrap' }}>Dashboard</span>
              </button>
            </NavLink>

            <li className="grouped-item">
              <span>EPAPER</span>
              <NavLink
                to="/epaper"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                <div className="flex-label-icon">
                  {/* <MdSpaceDashboard /> */}
                  <BsNewspaper />
                  {<span>Epaper</span>}
                </div>
              </NavLink>
              
            </li>

            <li className="grouped-item">
              <span>USERS</span>
              <NavLink
                to="/list-of-users"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                <div className="flex-label-icon">
                  {/* <MdSpaceDashboard /> */}
                  <FaUsers />
                  {<span>List of Users </span>}
                </div>
              </NavLink>
              
            </li>
            <li>
              <span>ADVERTISEMENT</span>
              <NavLink
                  to="/advertisement"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                <div className="flex-label-icon">
                  {/* <MdSpaceDashboard /> */}
                  <RiAdvertisementFill />
                  {<span>Advertisement</span>}
                </div>
              </NavLink>
            </li>
          </ul>
        </aside>
      </Drawer>
    </>
  );
};
export default SidebarDrawer;
