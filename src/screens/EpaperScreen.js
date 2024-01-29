import { Space, Table, Tag } from 'antd';
import React from 'react';
import Layout from '../components/Layout';
import Filter from '../components/epaper/Filter';

const columns = [
  {
    title: 'Published date',
    dataIndex: 'date',
    key: 'date',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Pages',
    dataIndex: 'pages',
    key: 'pages',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (status) => (
      <>
        {status.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size={[0, 'small']} wrap>
      <Tag bordered={false} color="processing">
        View
      </Tag>
      <Tag bordered={false} color="success">
        Edit
      </Tag>
      <Tag bordered={false} color="error">
        Delete
      </Tag>
    </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    date: '24/01/2024',
    status: ['Draft'],
    pages: 8,
  },
  {
    key: '2',
    date: '25/01/2024',
    status: ['Published'],
    pages: 12,
  },
  // Add more data entries as needed
];

function EpaperScreen() {
  return (
    <Layout>
      <Filter />
      <Table className='table' columns={columns} dataSource={data} />
    </Layout>
  );
}

export default EpaperScreen;
