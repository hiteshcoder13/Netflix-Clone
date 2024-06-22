import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-7bmkqtk57diqu1j4.us.auth0.com"
    clientId="2QvqnLhiWklOsJmPNeSqnrxjvrip1K1E"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
)
