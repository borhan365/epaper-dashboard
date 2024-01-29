import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsChatText, BsX } from 'react-icons/bs'
import { TbPrompt } from 'react-icons/tb'
import { apiUrl } from '../Variables'

import { toast } from 'react-hot-toast'
import { AiOutlineLink } from 'react-icons/ai'
import { FaRobot } from 'react-icons/fa'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdOutlineColorLens, MdSpaceDashboard } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import logo from '../images/aceva.png'

function Sidebar() {

  const [loading, setLoading] = useState(true)
  const [chatbots, setChatbots] = useState([])

  useEffect(() => {
    // Retrieve userInfo from localStorage
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (!userInfo || !userInfo.token) {
      console.error('User token not found.');
      return;
    }

    // Add headers to include JWT token
    const headers = {
      Authorization: `Bearer ${userInfo.token}`,
    };

    const featchData = async () => {
      try {
        setLoading(true)
        const {data} = await axios.get(`${apiUrl}/chatbot`, {headers})
        setChatbots(data)
        localStorage.setItem('selectedLinks', JSON.stringify(data?.map((item) => item?._id)));
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log('scrap list fetching fail:', error)
        toast.error(`Error: ${error?.message || error?.response?.data}.`)
      }
    }
    featchData()
    
  },[])

  return (
    <>
      <aside className='sidebar active'>
            <ul className="sidebar active">
              <BsX className='mobile-sidebar-cross'/>
              <li>
                <NavLink to="/">
                  <div className="header-logo-wrap">
                    <div className="header-sidebar-logo">
                      <img src={logo} alt="logo" />
                    </div>
                  {/* <h2 className="header-site-title">{settings?.siteName}</h2> */}
                </div>
                </NavLink>
              </li>

              {/* <li className="bot-select-wrap">
              
                <div className="header-logo-wrap">
                    <div className="header-sidebar-logo bot-avatar">
                      <img src={logo} alt="logo" />
                    </div>
                </div>
                <div className="choose-table-header bot-select">
                  <p htmlFor="">List of bots</p>
                  <select name="" id="">
                        {
                          chatbots?.map((item, index) => (
                            <option value={item?._id} key={index}>{item?.name}</option>
                          ))
                        }
                  </select>
                </div>
              </li> */}

              {/* <li className={toggle ? "" : "dropdown-menu-item active"} onClick={() => setToggle(!toggle)} >
                <NavLink to="/" className={({ isActive }) =>isActive ? "active-link" : ""}>
                  <div className='flex-label-icon'>
                  <MdSpaceDashboard />
                  { sidebarToggle === true && <span>Dashboard</span> }
                  </div>
                </NavLink>
              </li> */}

              <li className="dropdown-menu-item active">
                <NavLink to="/" className={({ isActive }) =>isActive ? "active-link" : ""}>
                  <div className='flex-label-icon'>
                  <MdSpaceDashboard />
                  { <span>Dashboard</span> }
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink to="#" className={({ isActive }) =>isActive ? "active-link" : "sub-ancor"}>
                  <div className='flex-label-icon sub-lable'>
                  { <span>CONTENT</span> }
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink to="/file-list" className={({ isActive }) =>isActive ? "active-link" : ""}>
                  <div className='flex-label-icon'>
                  <AiOutlineLink />
                  { <span>Links</span> }
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink to="#" className="sub-ancor">
                  <div className='flex-label-icon sub-lable'>
                  { <span>CUSTOMIZATIONS</span> }
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink to="/chatbot-list" className={({ isActive }) =>isActive ? "active-link" : ""}>
                  <div className='flex-label-icon'>
                  <FaRobot />
                  { <span>All Chatbots</span> }
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink to="/prompt" className={({ isActive }) =>isActive ? "active-link" : ""}>
                  <div className='flex-label-icon'>
                  <TbPrompt />
                  { <span>Menu Option</span> }
                  </div>
                </NavLink>
              </li>

              {/* <li>
                <NavLink to="/appearance" className={({ isActive }) =>isActive ? "active-link" : ""}>
                  <div className='flex-label-icon'>
                  <MdOutlineColorLens />
                  { <span>Appearance</span> }
                  </div>
                </NavLink>
              </li> */}
              
              <li>
                <NavLink to="/file-list" className={({ isActive }) =>isActive ? "active-link" : "sub-ancor"}>
                  <div className='flex-label-icon sub-lable'>
                  { <span>ADVANCE</span> }
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink to="/chatlogs" className={({ isActive }) =>isActive ? "active-link" : ""}>
                  <div className='flex-label-icon'>
                  <BsChatText />
                  { <span>Chat History</span> }
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink to="/settings" className={({ isActive }) =>isActive ? "active-link" : ""}>
                  <div className='flex-label-icon'>
                  <IoSettingsOutline />
                  { <span>Settings</span> }
                  </div>
                </NavLink>
              </li>
              
              {
                // data?.map((item, index) => (
                //   <li key={index} className={toggle ? "" : "dropdown-menu-item active"} onClick={() => setToggle(!toggle)} >
                //     <NavLink to={item.path} className={({ isActive }) =>isActive ? "active-link" : ""}>
                //       <div className='flex-label-icon'>
                //       {item.icon}
                //       { sidebarToggle === false && <span>{item.label}</span> }
                //       </div>
                //       { item?.dropdown && <FiChevronDown className='dropdown-icon' /> }
                //     </NavLink>
                    
                //     {/* sub menu */}
                //     { item?.dropdown && (
                //       <div className="sub-menu-wrapper">
                //         <ul>
                //           {
                //             item?.subMenu?.map((sub, subIndex) => (
                //               <li onClick={() => setToggle(!toggle)} key={subIndex}>
                //                 <NavLink to={sub?.path} className={({ isActive }) =>isActive ? "active-link" : ""}>
                //                   <div className='flex-label-icon'>
                //                   {sub?.icon}
                //                   <span>{sub?.label}</span>
                //                   </div>
                //                 </NavLink>
                //               </li>
                //             ))
                //           }
                //         </ul>
                //       </div>
                //     ) }
                //   </li>
                // ))
              }
              
            </ul>
        </aside>
    </>
  )
}

export default Sidebar