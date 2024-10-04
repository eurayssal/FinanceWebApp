import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomeView from './home';
import CadTagView from './cad-tag';

const AppRoute: React.FC = () => {
    return (<Routes>
        <Route index element={<Navigate to='home' />} />
        <Route path="home" element={<HomeView />} />
        <Route path="tag" element={<CadTagView />} />
    </Routes>);
};

export default AppRoute;