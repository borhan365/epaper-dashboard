import { Dropdown } from 'antd';
import React from 'react';
import { BsGlobe, BsThreeDotsVertical } from 'react-icons/bs';
import { VscDebugRestart } from 'react-icons/vsc';
const IframeBotDropdown = ({toggleShowLanguage, toggleRefresh}) => {
  const items = [
    {
      key: '1',
      icon: <BsGlobe onClick={() => toggleShowLanguage()}/>,
      label: <span onClick={() => toggleShowLanguage()}>Change Language</span>,
    },
    {
      key: '2',
      icon: <VscDebugRestart onClick={toggleRefresh}/>,
      label: <span onClick={toggleRefresh}>Restart Chat</span>,
    },
  ];
 return (
  <>
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomRight"
      arrow
    >
      {/* <Button>bottomRight</Button> */}
      <BsThreeDotsVertical /> 
    </Dropdown>
  </>
 )
};
export default IframeBotDropdown;