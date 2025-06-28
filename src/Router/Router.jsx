import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import MainLayout from './Layout/MainLayout';

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children:[
            {
                index: true,
                Component: Home
            }
        ]
    }
])

export default router;