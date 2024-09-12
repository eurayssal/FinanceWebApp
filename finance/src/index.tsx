import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThemeProvider from './contexts/provider';

const AppRouteLazy = React.lazy(() => import('./app/route'))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<BrowserRouter>
  <ThemeProvider>
    <Routes>
      <Route path='/site/*' element={<AppRouteLazy />} />
      <Route path='*' element={<AppRouteLazy />} />
    </Routes>
  </ThemeProvider>
</BrowserRouter>);

reportWebVitals();
