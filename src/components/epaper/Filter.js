import { Button, DatePicker, Select, Space } from 'antd';
import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { IoChevronDownSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
const { RangePicker } = DatePicker;

function Filter() {

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };


  return (
    <>
      <div className="common-margin filter-container">
        <div className="filter-wrap">
          <Space direction="vertical" size={12}>
            <RangePicker />
          </Space>
          <Select
            
            defaultValue="Published"
            style={{
              width: 120,
            }}
            suffixIcon={<IoChevronDownSharp />}
            onChange={handleChange}
            options={[
              {
                value: 'publish',
                label: 'Publish',
              },
              {
                value: 'draft',
                label: 'Draft',
              },
              {
                value: 'pending',
                label: 'Pending',
              },
              {
                value: 'trashed',
                label: 'Trashed',
              },
            ]}
          />
          <Button>Reset</Button>
          
        </div>
        <div className="action-wrap">
          <Link to="/add-epaper">
            <Button type="primary" icon={<FaPlus />}>
              New Epaper
            </Button>
          </Link>

        </div>
      </div>
    </>
  )
}

export default Filter