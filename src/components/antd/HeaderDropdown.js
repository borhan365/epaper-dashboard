import { Dropdown } from 'antd';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { MdLogout, MdOutlineSpaceDashboard } from 'react-icons/md';
import { Link } from 'react-router-dom';

const HeaderDropdown = () => {
  const items = [
    {
      key: '1',
      icon: <MdOutlineSpaceDashboard />,
      label: (
        <Link to="/"> Dashboard</Link>
      ),
    },
    {
      key: '1',
      icon: <MdLogout />,
      label: (
        <Link to="/logout"> Logout</Link>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomRight"
      arrow
    >
      <a onClick={(e) => e.preventDefault()}>
        <div className='dropdown-wrapper'>
          <span>Hi, Admin</span>
          <BsChevronDown />
        </div>
      </a>
    </Dropdown>
  );
};

export default HeaderDropdown;
