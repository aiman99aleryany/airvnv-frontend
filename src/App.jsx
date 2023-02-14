import React from 'react';
import { RouterProvider } from 'react-router-dom';
import AppRoutes from 'AppRoutes';

import './styles/css/index.css';

function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={AppRoutes} />
        </React.StrictMode>
    );
}

export default App;
