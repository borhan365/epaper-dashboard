import { Switch } from 'antd';
import React from 'react';

const WhatsappToggleButtonStep = ({ whatsappToggle, setWhatsappToggle }) => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
    setWhatsappToggle(checked);
  };

  return <Switch checked={whatsappToggle} onChange={onChange} />;
};

export default WhatsappToggleButtonStep;
