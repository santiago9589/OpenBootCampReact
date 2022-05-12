import React from "react";
import { Link }  from "react-router-dom"

const RegisterPage = () => {


    return (
        <div>
            WELCOME TO REGISTER PAGE
            <h3><Link to="/">Go to the home page</Link></h3>
        </div>
    )
}

export default RegisterPage


// import { Navigate } from 'react-router-dom';

// <Routes>
// <Route path="/login" element={isLogin ? <Navigate to="/" /> : <Login />}/>
// </Routes>