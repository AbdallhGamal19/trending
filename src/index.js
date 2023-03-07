import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js"
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.scss';
import MediaContextProvider from './Context/MediaStore';
import ContextUserDataProvider from './Context/UserDataAndLogoutStoe';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        
        <ContextUserDataProvider>
            <MediaContextProvider>
                <App />
            </MediaContextProvider>
        </ContextUserDataProvider>

 



);


reportWebVitals();
