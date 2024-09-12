import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomeView from './home';
import ThemeJss from '../theme/theme.jss';

const AppRoute: React.FC = () => {
    return (
        <Routes>
            <Route index element={<Navigate to='home' />} />
            <Route path="home" element={<HomeView />} />
        </Routes>
    );
};

export default AppRoute;