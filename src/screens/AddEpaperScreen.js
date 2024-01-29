import { Tabs } from 'antd';
import React, { useRef, useState } from 'react';
import Layout from '../components/Layout';
import UploadEpaper from '../components/epaper/UploadEpaper';

const initialItems = [
  {
    label: 'Page 1',
    children: <UploadEpaper />,
    key: '1',
  },
  {
    label: 'Page 2',
    children: 'Content of Tab 2',
    key: '2',
  },
  {
    label: 'Page 3',
    children: 'Content of Tab 3',
    key: '3',
    closable: false,
  },
];

function AddEpaperScreen() {

  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);
  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };
  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({
      label: 'New Tab',
      children: 'Content of new Tab',
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const remove = (targetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <Layout>
      <div className="create-epaper-container common-margin">
        <Tabs
          type="editable-card"
          onChange={onChange}
          activeKey={activeKey}
          onEdit={onEdit}
          items={items}
        />
      </div>
    </Layout>
  )
}

export default AddEpaperScreen