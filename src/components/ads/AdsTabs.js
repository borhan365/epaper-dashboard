import { Tabs } from 'antd';
import React from 'react';
import CodeAds from './CodeAds';
import UploadAds from './UploadAds';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Current Ads (Image)',
    children: <UploadAds />,
  },
  {
    key: '2',
    label: 'Current Ads (Code)',
    children: <CodeAds />,
  },
  {
    key: '3',
    label: 'Default Ads',
    children: <UploadAds />,
  },
];
const AdsTabs = () => {

  return (
    <>

      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        // indicator={{
        //   size: (origin) => origin - 20,
        //   align: alignValue,
        // }}
      />
    </>
  );
};
export default AdsTabs;