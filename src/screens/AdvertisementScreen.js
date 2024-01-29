import { Collapse } from 'antd';
import React from 'react';
import { FaChevronDown, FaChevronLeft } from 'react-icons/fa';
import Layout from '../components/Layout';
import AdsTabs from '../components/ads/AdsTabs';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: '1',
    label: 'Header Advertisement Settings',
    children: <AdsTabs />,
  },
  {
    key: '2',
    label: 'Footer Advertisement Settings',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'Sidebar Advertisement Settings',
    children: <p>{text}</p>,
  },
];

function AdvertisementScreen() {
  const customExpandIcon = ({ isActive }) => {
    const rotateDegree = isActive ? 90 : 180;
    return <FaChevronLeft className='collapse-icon' style={{ transform: `rotate(${rotateDegree}deg)` }} />;
  };

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Layout>
      <div className="ads-container common-margin">
        <Collapse
          className="ads-group-wrap"
          items={items}
          defaultActiveKey={['1']}
          onChange={onChange}
          expandIcon={customExpandIcon}
        />
      </div>
    </Layout>
  );
}

export default AdvertisementScreen;
