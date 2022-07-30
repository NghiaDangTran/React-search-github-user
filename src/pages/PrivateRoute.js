import React from 'react';
import {  Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useGlobalContext } from '../context/context';
const PrivateRoute = ({ children }) => {
  const {guest,setGuest}=useGlobalContext()

  const {isAuthenticated, user}=useAuth0()
  const isUser = isAuthenticated && user
  if (guest) return  children
  if (!isUser) {
    return <Navigate to="/login"></Navigate>


  }
  else
  return  children

};
export default PrivateRoute;
