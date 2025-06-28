import React from 'react';
import Navbar from '../../Shared/Navbar';
import { Outlet } from 'react-router';

//bg-[radial-gradient(circle,_#585858_1px,_transparent_1px),radial-gradient(circle,_#585858_1.2px,_transparent_1.2px)] bg-[length:40px_40px]

const MainLayout = () => {
    return (
        <div className='p-4'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;