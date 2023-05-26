
import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import { Spinner } from 'flowbite-react';

function PrivateRoutes({ children }) {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation();

    if (loader) {
        return <div className="w-full h-screen flex justify-center items-center"><Spinner
            aria-label="Extra large spinner example"
            size="xl"
        /></div>
    }

    if (user) {
        return children
    }

    return (<Navigate to='/login' state={{ from: location }}></Navigate>)
}

export default PrivateRoutes
