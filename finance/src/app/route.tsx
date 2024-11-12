import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomeView from './pages/home';
import { Provider } from '../hooks/auth';
import CadTagView from './pages/cad-tag';

const AppRoute: React.FC = () => {
    return (<Provider>
        <Routes>
            <Route index element={<Navigate to='home' />} />
            <Route path="home" element={<HomeView />} />
            <Route path="tag" element={<CadTagView />} />
        </Routes >
    </Provider>);
};

export default AppRoute;