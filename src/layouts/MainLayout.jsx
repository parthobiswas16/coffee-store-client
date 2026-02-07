import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='bg-white'>
            <Navbar></Navbar>
            <div>
               <Outlet></Outlet> 
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;