import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPageView from './landing-page';
import LoginView from './login';

const SiteRoute: React.FC = () => {
    return (<Routes>
        <Route index element={<Navigate to='inicio' />} />
        <Route path="inicio" element={<LandingPageView />} />
        <Route path="entrar" element={<LoginView />} />
    </Routes>);
};

export default SiteRoute;