import React from 'react';
import SideBar from './SideBar';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-row'>
      <SideBar/>
      {children}
    </div>
  );
};

export default Layout;
