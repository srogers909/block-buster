import React from 'react';
import { createRoot } from 'react-dom/client';
import './app.scss';
import App from './app';

document.body.innerHTML = '<div id="root"></div>';

createRoot(document.getElementById('root')).render(<App />);