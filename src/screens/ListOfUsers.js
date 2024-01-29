
import { Space, Table, Tag } from 'antd';
import React from 'react';
import Layout from '../components/Layout';
import UserSearchField from '../components/user/UserSearchField';
import RoleDropDown from '../components/user/RoleDropdown';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
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
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'Jane Doe',
    age: 28,
    address: 'Paris No. 1 Lake Park',
    tags: ['awesome', 'designer'],
  },
  {
    key: '5',
    name: 'Jack Smith',
    age: 35,
    address: 'Tokyo No. 1 Lake Park',
    tags: ['funny', 'engineer'],
  },
  {
    key: '6',
    name: 'Jenny Johnson',
    age: 38,
    address: 'Berlin No. 1 Lake Park',
    tags: ['smart', 'scientist'],
  },
  {
    key: '7',
    name: 'Jake Wilson',
    age: 45,
    address: 'Mumbai No. 1 Lake Park',
    tags: ['ambitious', 'manager'],
  },
  {
    key: '8',
    name: 'Jessica Davis',
    age: 29,
    address: 'Seoul No. 1 Lake Park',
    tags: ['artistic', 'artist'],
  },
];


function ListOfUsers() {
  return (
    <Layout>
      <div className="common-margin filter-container">
        <div className="filter-wrap">
          <div className="form-group">
            {/* <UserSearchField /> */}
            <input type="text" placeholder='Search...' />
          </div>
          <div className="form-group">
            {/* <RoleDropDown /> */}
            <select>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Administrator">Administrator</option>
            </select>
          </div>
          <div className="form-group">
            <input type='reset' className="btn disabled" />
          </div>
        </div>
        <div className="action-wrap">
          <Link to="/add-user">
            <button className="btn default-btn">Add User</button>
          </Link>
        </div>
      </div>
      <Table className='table' columns={columns} dataSource={data} />
    </Layout>
  )
}

export default ListOfUsers

