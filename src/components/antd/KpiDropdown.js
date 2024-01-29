import { Dropdown } from 'antd';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';

const KpiDropdown = () => {
  const items = [
    {
      key: '1',
      label: 'Last Month',
    },
    {
      key: '2',
      label: 'Last Week',
    },
    {
      key: '3',
      label: 'Last Day',
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
          <span>Last Month</span>
          <BsChevronDown />
        </div>
      </a>
    </Dropdown>
  );
};

export default KpiDropdown;
