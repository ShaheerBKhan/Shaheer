import React from 'react';
import { BrowserRouter, Routes , Route, Link } from 'react-router-dom';

import { Dashboard } from '../Dashboard/Dashboard';

export const AppRouter = ():JSX.Element => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
            </Routes>
        </BrowserRouter>
    );
}