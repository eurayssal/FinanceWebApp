import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomeView from './pages/home';
import { Provider } from '../hooks/auth';

const AppRoute: React.FC = () => {
    return (<Provider>
        <Routes>
            <Route index element={<Navigate to='home' />} />
            <Route path="home" element={<HomeView />} />
        </Routes >
    </Provider>);
};

export default AppRoute;