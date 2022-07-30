import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { useGlobalContext } from '../context/context';
const Dashboard = () => {
  const {loading}=useGlobalContext()
  if (loading)
  {return  <main>
    <Navbar></Navbar>
    <Search></Search>
    <img src={loadingImage} className="loading-img" alt="" />
  </main>}
  return (
    <main>
     <Navbar></Navbar>
     <Search></Search>
     <Info></Info>
     <User></User>
     <Repos></Repos>
    </main>
  );
};

export default Dashboard;
