import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here
import App from './App';

// Create a root and render the App component into it
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
