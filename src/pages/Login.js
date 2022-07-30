import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/login-img.svg';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
const Login = () => {
  const {guest,setGuest}=useGlobalContext()
  const { loginWithRedirect } = useAuth0()

  return <Wrapper>
  <div className='container'>

    <img src={loginImg} alt="" />
    <h1>github search user</h1>
    <button className='btn' onClick={loginWithRedirect}>Log in/sign up</button>
    <div><p></p></div>
    <Link to="/" className='btn' onClick={e=>{setGuest(true)}}> guest login</Link>
    {/* <button className='btn' onClick={e=>{setGuest(true)}}>guest login</button> */}
  </div>


  </Wrapper>
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
 
`;
export default Login;
