// @flow

import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OrderList } from '../components/OrderList';

import { UserAdmin } from './UserAdmin';

export function App() {
    return (
        <BrowserRouter>
         <Routes>
            <Route path='/' element={<UserAdmin />} />
            <Route path='/order' element={<OrderList />} />
         </Routes>
        </BrowserRouter>
    );
}