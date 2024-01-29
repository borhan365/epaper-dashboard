import { Button, Steps, message, theme } from 'antd';
import React, { useState } from 'react';
import CreatePromptScreen from '../../screens/steps/CreatePromptScreen';
import ChangeApearanceStep from '../create-bot-steps/ChangeApearanceStep';
import FinalPreviewStep from '../create-bot-steps/FinalPreviewStep';
import LanguageStep from '../create-bot-steps/LanguageStep';
import SyncingStep from '../create-bot-steps/SyncingStep'
import UploadFileLinksStep from '../create-bot-steps/UploadFileLinksStep';

const ChatbotSteps = () => {
  const [selectedItems, setSelectedItems] = useState(JSON.parse(localStorage.getItem('selectedLinks')) || []);
  const [config, setConfig] = useState({
    botName: 'My Bot',
    welcomeMessage: 'Hi there! How can I help you?',
    placeholder: 'Ask me...',
    logo: null,
    brandColor: '#009688',
    language: [{value: 'en-GB', label: 'English (UK)'}, {value: null, label: null}, {value: null, label: null}],
    ...JSON.parse(localStorage.getItem('botInfo')),
    ...JSON.parse(localStorage.getItem('botConfig'))
  })
  const submitBotConfig = () => {
    localStorage.setItem('botInfo', JSON.stringify({name: config?.botName, scrappedOrUpDataId: JSON.parse(localStorage.getItem('selectedLinks'))}))
    localStorage.setItem('botConfig', JSON.stringify(config))
  };
  const steps = [
    {
      title: 'Upload Link/Files',
      content: <UploadFileLinksStep selectedItems={selectedItems} setSelectedItems={setSelectedItems}/>,
    },
    {
      title: 'Change Appearance',
      content: <ChangeApearanceStep config={config} setConfig={setConfig}/>,
    },
    {
      title: 'Create Prompts',
      content: <CreatePromptScreen />,
    },
    {
      title: 'Set Language',
      content: <LanguageStep  config={config} setConfig={setConfig}/>,
    },
    {
      title: 'Syncing',
      content: <SyncingStep />,
    },
    {
      title: 'Preview and Publish',
      content: <FinalPreviewStep />,
    },
  ];
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: '2px',
    border: `1px solid ${token.colorBorder}`,
    marginTop: 16,
  };
  
  return (
    <>
      <Steps 
        // progressDot={customDot} 
        current={current} 
        items={items} 
        labelPlacement="vertical"
      />
      <div style={contentStyle}>{steps[current].content}</div>
      <div className='create-steps-btn-wrap' style={{ marginTop: 24 }}>
        {current > 0 && (
          <Button
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}

        {/* Render the "dummy button" only for the first step (current === 0) */}
        {current === 0 && (
          <Button className='defaut-button preview-btn' type="primary">
            Previous
          </Button>
        )}

        {/* Render the "Next" button for all steps except the last one */}
        {current < steps.length - 1 && (
          <Button className={(current === 0 && selectedItems.length < 1) ? 'preview-btn' : ''} type="primary" onClick={() => {
              if (current === 0 && selectedItems.length < 1) {
                //do nothing
              } else {
                if (current === 1 || current === 3) {
                  submitBotConfig()
                }
                next()
              }
            }}>
            Next
          </Button>
        )}

        {/* Render the "Publish Your Chatbot" button for the last step */}
        {current === steps.length - 1 && (
          <Button className='defaut-button preview-btn' type="primary" onClick={() => message.success('If your bot configuration is finished, please click on "Publish Your Chatbot" button.')}>
            Next
          </Button>
        )}
      </div>
        
    </>
  );
};
export default ChatbotSteps;