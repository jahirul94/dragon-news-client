import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayOut = () => {
    return (
        <div className='mt-4 pt-4'>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>            
        </div>
    );
};

export default LoginLayOut;