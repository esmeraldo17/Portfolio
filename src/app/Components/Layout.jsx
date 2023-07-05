import React from 'react';
import SideBar from './SideBar';

const Layout = ({ children }) => {
  return (
    <div className='retalive  bg-cyan-800'>
      <SideBar/>
      {children}
    </div>
  );
};

export default Layout;
