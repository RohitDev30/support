import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//components

import Dashboard from '../components/Dashboard/Dashboard.js';
import Login from '../components/Login/Login.js';
//import ProtectedRoute from './ProtectedRoute';

function RouterComponent() {
    return (
        <Router>
           
            <Routes>
                {/* <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path='/' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}
                <Route path='/login' element={<Login />} />
               
               
                
              

            </Routes>
        </Router>
    );
}

export default RouterComponent;