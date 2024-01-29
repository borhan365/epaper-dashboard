import { Select } from 'antd';
import React from 'react';
import { FiChevronDown } from "react-icons/fi";


const LanguageSelect = () => (
  <Select
    suffixIcon={<FiChevronDown />}
    showSearch
    style={{
      width: 200,
    }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      { "value": "US", "label": "United States" },
      { "value": "GB", "label": "United Kingdom" },
      { "value": "CA", "label": "Canada" },
      { "value": "AU", "label": "Australia" },
      { "value": "DE", "label": "Germany" },
      { "value": "FR", "label": "France" },
      { "value": "JP", "label": "Japan" },
      { "value": "IT", "label": "Italy" },
      { "value": "ES", "label": "Spain" },
      { "value": "NL", "label": "Netherlands" },
      { "value": "BR", "label": "Brazil" },
      { "value": "CN", "label": "China" },
      { "value": "IN", "label": "India" },
      { "value": "MX", "label": "Mexico" },
      { "value": "AR", "label": "Argentina" },
      { "value": "RU", "label": "Russia" },
      { "value": "SE", "label": "Sweden" },
      { "value": "CH", "label": "Switzerland" },
      { "value": "ZA", "label": "South Africa" },
      { "value": "KR", "label": "South Korea" }
    ]
    }
  />
);
export default LanguageSelect;