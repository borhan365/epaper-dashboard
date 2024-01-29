import { Radio, Space } from 'antd';
import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import { MdCloudUpload } from 'react-icons/md';

const UploadAvatarComponent = ({uploadLoading, config, uploadFileHandler, tempImg, setConfig}) => {

  const storedAvatar = [
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702616802/1_gth7c6.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702616804/2_jodftz.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702616804/3_ev2i31.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702616803/4_owd5xo.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702616803/5_seuly1.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702616803/6_ro5ecr.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702616803/7_xjns2d.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702616803/8_drlc1l.png",
    
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702616804/9_pqw2rh.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702616805/10_aljqpq.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702616804/11_mjpuly.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702616804/12_a5amol.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702616804/13_vdkkmg.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702616802/14_becyzz.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702616802/15_snczun.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702616803/16_d67mtn.png",

    "http://res.cloudinary.com/dsvt1ftd0/image/upload/v1702499111/wzkathrfmfs2lgy8cy97.png",
    "http://res.cloudinary.com/dsvt1ftd0/image/upload/v1702499817/yos8g0cuhei5csnehqr5.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500183/avinsxclsqhymkokq9qz.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500183/khlcqubpgf1ghivrc9n3.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500183/umfcoxnym4pkcpqx42rc.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500183/ss2oujnfuigmgtk7jbev.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500183/p7hrimijydljaaeibc8k.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500183/ff6uk5v9qatxol6bglpl.png",

    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500183/amygzxpimnir6hs9h1uh.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500182/i8ohl9lgkvrhmgcrmj9k.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500182/yn4g5szcx0f8aplfgn7u.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500182/elfsbornuqroh91fku2d.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500182/lxnbltstetjznlvbxfuk.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500182/vora4vhuvtd9ixvapze2.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500181/t9yimadcldkk1gfbhxe0.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500181/bbn9xe1xkjpvpdnhuloe.png",
    
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500180/q2mtx7djpqznrsykqini.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500181/vifaybibirxwphbpusqj.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500180/yazepmruiwr9tu8ft1mn.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500181/hyhyg35afcus63vomepk.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500181/j2aq3ymei2olw75b8grs.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500181/ckshtlqpzhsmwrsu0aou.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500182/zvf158wtnpifsdieqfgw.png",
    "https://res.cloudinary.com/dsvt1ftd0/image/upload/v1702500182/bqxqftgwnkca8hquekxy.png"

  ] 

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction='vertical' className='upload-avatar-wrapper'>
        {/* <Radio className='radio-wrap' value={2}>
        </Radio> */}
          
          <div className="custom-avatar-wrapper">
            <div className="avatar-logo-wrap">
              <img className="selected" src={config.botAvatar || tempImg} alt="avatar"/>
            </div>
              <div>
                <p className='upload-ava-title'>Choose from our avatar library</p>
              
                <div className="config-upload-logo avatar-template-wrap avatar-item">
                    {
                      storedAvatar.map(item => <img className={config?.botAvatar === item ?"avatar-profile selected" : "avatar-profile"} src={item} alt="avatar" onClick={() => setConfig({ ...config, botAvatar: item })}/>)
                    }
                </div>
              </div>
          </div>
        {/* <Radio className='radio-wrap' value={1}>
        </Radio> */}
          
          <div className="custom-avatar-wrapper">
            <div className="avatar-logo-wrap blank"></div>
            {/* <div className="avatar-logo-wrap">
            <img src={config?.botAvatar && config?.botAvatar || tempImg} alt="profile photo" />
            </div> */}
            <div>
              <p className='upload-ava-title'>Upload your own avatar</p>
              
              <div className="config-upload-logo">
              {/* <p className='uploaded-label'>Upload new file</p> */}
                <div className="chatbot-upload-image-wrap avatar-item">
                  <label>
                    {
                      uploadLoading && <p>Uploading...</p>
                    }
               
                        <div className="chatbot-upload-content-wrap">
                          <FiUpload className='user-update-icon' />
                          <h3>Upload Avatar Here.</h3>
                          <p>Supported formats: JPG, PNG, SVG, Webp</p>
                          <input type="file" id='image-file' name="profilePic" custom="true" onChange={uploadFileHandler} hidden />
                        </div>
                    
                    {/* {
                      config?.botAvatar && (
                        <div className="user-profile-header-thumb create-group-logo">
                    
                          <img src={config?.botAvatar && config?.botAvatar || tempImg} alt="profile photo" />
                          <div className="user-update-profile create-user-profile-update-icon-wrapper">
                            <input type="file" id='image-file' name="profilePic" custom="true" onChange={uploadFileHandler} hidden />
                            <div className="user-update-profile">
                              <MdCloudUpload className='user-update-icon' />
                            </div>
                          </div>
                        </div>
                      )
                    } */}
                    
                  </label>
                </div>
              </div>
            </div>
          </div>
        
      </Space>
    </Radio.Group>
  );
};
export default UploadAvatarComponent;