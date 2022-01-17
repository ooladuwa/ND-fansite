import React from 'react';
import Navbar from './Navbar';
import logo from '../assets/images/NOTREDAME.svg';
import SidebarFooter from './SidebarFooter';

const Sidebar = () => {
  return (
    <div className='container bg-irishgreen bg-opacity-75 w-1/4 h-screen'>
      <div className='logo-container flex justify-center my-10'>
        <img src={logo} alt='NotreDame' />
      </div>
      <section className='navbar h-1/2 flex justify-center'>
        <Navbar />
      </section>
      <section className='navbarFooter flex justify-center'>
        <SidebarFooter />
      </section>
    </div>
  );
};

export default Sidebar;
