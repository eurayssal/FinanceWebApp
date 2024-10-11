import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomeView from './pages/home';
import CadTagView from './pages/cad-tag';
import useAuth from '../hooks/auth';

const AppRoute: React.FC = () => {
    useAuth();

    return (<Routes>
        <Route index element={<Navigate to='home' />} />
        <Route path="home" element={<HomeView />} />
        <Route path="tag" element={<CadTagView />} />
    </Routes>);
};

export default AppRoute;