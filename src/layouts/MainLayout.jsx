import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
               <Outlet></Outlet> 
            </div>
            
        </div>
    );
};

export default MainLayout;