import { Dropdown } from 'antd';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

const RoleDropDown = () => {
  const items = [
    {
      key: '1',
      // icon: <MdLogout />,
      label: 'Admin',
    },
    {
      key: '2',
      // icon: <MdLogout />,
      label: 'Editor',
    },
    {
      key: '3',
      // icon: <MdLogout />,
      label: 'Administrator',
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
          <span>Select role</span>
          <BsChevronDown />
        </div>
      </a>
    </Dropdown>
  );
};

export default RoleDropDown;
