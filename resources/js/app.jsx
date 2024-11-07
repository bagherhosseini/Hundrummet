import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './app.scss';
import * as pages from './pages';
import * as components from './components';

export default function App() {
    return (
        <BrowserRouter>
            <components.Header />
            <Routes>
                <Route path="/" element={<pages.Home />} />
                <Route path="/about" element={<pages.About />} />
                <Route path="/services" element={<pages.Services />} />
            </Routes>
            <components.Footer />
        </BrowserRouter>
    );
}
