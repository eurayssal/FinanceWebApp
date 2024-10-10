import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const SiteRouteLazy = React.lazy(() => import('./site/route'));
const AppRouteLazy = React.lazy(() => import('./app/route'))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<BrowserRouter>
  <Routes>
    <Route path='/site/*' element={<SiteRouteLazy />} />
    <Route path='/app/*' element={<AppRouteLazy />} />
    <Route path='*' element={<SiteRouteLazy />} />
  </Routes>
</BrowserRouter>);

reportWebVitals();
