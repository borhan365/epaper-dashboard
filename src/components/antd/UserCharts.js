// UserCharts.js

import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';

const UserCharts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = async () => {
    try {
      const response = await fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log('fetch data failed', error);
    }
  };

  const config = {
    data,
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      tickCount: 5,
    },
    animation: false,
    slider: {
      start: 0.1,
      end: 0.9,
      trendCfg: {
        isArea: true,
      },
    },
  };

  return <Area {...config} height={300} />;
};

export default UserCharts;
