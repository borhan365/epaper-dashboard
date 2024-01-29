import { Switch } from 'antd';
import React from 'react';

const MessengerToggleButtonStep = ({ messengerToggle, setMessengerToggle }) => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
    setMessengerToggle(checked);
  };

  return <Switch checked={messengerToggle} onChange={onChange} />;
};

export default MessengerToggleButtonStep;
