import React from 'react';
import Navbar from '../../Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Shared/Footer';


//bg-[radial-gradient(circle,_#585858_1px,_transparent_1px),radial-gradient(circle,_#585858_1.2px,_transparent_1.2px)] bg-[length:40px_40px]

const MainLayout = () => {
    return (
        <div className='pt-4'>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MainLayout;