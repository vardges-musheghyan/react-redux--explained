import React from 'react';
import ReactDOM from 'react-dom/client';
import ReduxProvider from "./reduxProvider";

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ReduxProvider>
    <App />
    </ReduxProvider>
);
