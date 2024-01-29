import React from 'react';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ path, element, isAuthenticated }) => {
    return isAuthenticated ? element : <Navigate to="/home" />;
  };
  
  const PublicRoute = ({ path, element, isAuthenticated, isHaveBot, userInfo }) => {
    // return isAuthenticated ? <Navigate to="/" /> : element;
    if (isAuthenticated && isHaveBot) {
      return <Navigate to="/" />
    } else if (isAuthenticated && !isHaveBot && new Date(userInfo?.createdAt ? userInfo?.createdAt : '2022-03-03').toISOString().split('T')[0] !== new Date().toISOString().split('T')[0]) {
      console.log(isAuthenticated)
      console.log(isHaveBot)
      return <Navigate to="/" />  
    } else if (isAuthenticated && !isHaveBot && new Date(userInfo?.createdAt ? userInfo?.createdAt : '2022-03-03').toISOString().split('T')[0] === new Date().toISOString().split('T')[0]) {
      console.log(isAuthenticated)
      console.log(isHaveBot)
      return <Navigate to="/create-chatbot-file" />  
    } else {
      return element
    }
  };
const checkIsAuthenticate = (userInfo) => {
    if (userInfo?.token) {
      return true
    } else {
      return false
    }
}
export { ProtectedRoute, PublicRoute, checkIsAuthenticate };
