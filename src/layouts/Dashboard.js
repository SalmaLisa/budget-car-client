import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../components/SideNav';
import Nav from '../shared/Nav';

const Dashboard = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    
          <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
            <div className='py-2 px-5 w-full bg-yellow-200 '>
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </div>
    </label>
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <SideNav></SideNav>
  
  
  </div>
</div>
    </div>
  );
};

export default Dashboard;