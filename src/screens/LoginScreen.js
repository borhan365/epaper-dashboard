import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { apiUrl } from '../Variables';
import ErrorText from '../components/ErrorText';
import MiniLoading from '../components/MiniLoading';
import { useAppContext } from '../context/AppContext';
import Logo from '../images/aceva.png';
import loginThumb from '../images/bg/login-thumb-2.png';

function LoginScreen({toggleLoggedInState}) {

  const navigate = useNavigate();
  
  const [success, setSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const {register, handleSubmit, formState: {errors}} = useForm();
  const {userInfo, refresh, setRefresh} = useAppContext();
  const [chatbots, setChatbots] = useState([])
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {

    // Retrieve userInfo from localStorage
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (!userInfo || !userInfo.token) {
      console.error('User token not found.');
      return;
    }

    // Add headers to include JWT token
    const headers = {
      Authorization: `Bearer ${userInfo.token}`,
    };

    const featchData = async () => {
      try {
        const {data} = await axios.get(`${apiUrl}/chatbot`, {headers})
        console.log('chatbot', data)
        console.log('chatbots?.length', data.length)
        setChatbots(data)
      } catch (error) {
        console.log('scrap list fetching fail:', error)
        toast.error(`Error: ${error?.message || error?.response?.data}`)
      }
    }
    featchData()
  },[/*errorMessage*/])
 
  
  const onSubmit = async (data) => {
    // header supports
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }
    setLoading(true)
    await axios.post(`${apiUrl}/user/login`, data, config).then(async res => {
      localStorage.setItem('userInfo', JSON.stringify(res.data))
      const headers = {
        Authorization: `Bearer ${res.data?.token}`,
      };
      localStorage.setItem('isAuthenticated', JSON.stringify(true))
      await axios.get(`${apiUrl}/chatbot`, {headers}).then(res => {
        if(res.data?.length > 0) {
          localStorage.setItem('isHaveBot', JSON.stringify(true))
        } else {
          localStorage.setItem('isHaveBot', JSON.stringify(false))
        }
        setLoading(false)
        toggleLoggedInState()
      }).catch(err => {
        console.log('chatbot list fetching fail:', err)
      })
    }).catch(error => {
      setLoading(false)
      console.log(error); // this is the main part. Use the response property from the error object
        setErrorMessage(error.response?.data && "Email or password is wrong!")
    })
  }

  const handleInputFocus = () => {
    // Clear the error message when the input field is focused
    setErrorMessage('');
  };

  console.log('error message', errorMessage)

  return (
    <>
      <Helmet>
        <title>Sign In | Aceva GPT</title>
      </Helmet>

        {/* <HeaderMenu /> */}
      <section className="register-section">
        <div className="register-container landing-container">

          {/* wrapper */}
          <div className="register-wrapper">
          
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="form-header-wrap">
                <div className="header-sidebar-logo">
                  <img src={Logo} alt="logo" />
                </div>
                <div className="form-title login-title">
                  <h2>Admin Login</h2>
                </div>

              </div>

              {
                errorMessage && (
                  <p className='error-text error-box'>{errorMessage}</p>
                )
              }

              {/* email */}
              <div className="form-group">
                <label htmlFor="email">Username</label>
                <input onFocus={handleInputFocus}  className={errors.email?.message && "error-input"} {...register('email', {required: "Email is required!"})} type="email" placeholder='Email address' id='email' />
                <ErrorText error={errors.email?.message} />
              </div>

              <div className="form-row">
                {/* Password */}
                <div className="form-group">
                <label htmlFor="Password">
                  <span>Password</span>
                </label>
                    <div className="form-group-input-icon">
                      <input
                        onFocus={handleInputFocus} 
                        className={errors.password?.message && "error-input"}
                        {...register('password', { required: "Password is required!" })}
                        type={showPassword ? 'text' : 'password'}
                        placeholder='********'
                        id='Password'
                      />
                      <span onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <BsEyeSlash /> : <BsEye />}
                      </span>
                      <ErrorText error={errors.password?.message} />
                    </div>
                  </div>
              </div>

              <Link to="/">
                <div className="button-wrap">
                  <button type="submit" className="form-button full-width">
                    {loading ? (
                      <>
                        Loading <MiniLoading />
                      </>
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
              </Link>

            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginScreen