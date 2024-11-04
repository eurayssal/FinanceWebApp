import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPageView from './landing-page';
import LoginView from './login';
import RegisterView from './register';

const SiteRoute: React.FC = () => {
    return (<Routes>
        <Route index element={<Navigate to='inicio' />} />
        <Route path="inicio" element={<LandingPageView />} />
        <Route path="entrar" element={<LoginView />} />
        <Route path="registrar" element={<RegisterView />} />
    </Routes>);
};

export default SiteRoute;