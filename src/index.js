import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import {TeamsContext} from "./components/ContextProvider/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Auth0ProviderWithHistory>
            <TeamsContext>
                <App />
            </TeamsContext>
        </Auth0ProviderWithHistory>
      </BrowserRouter>
  </React.StrictMode>
);
