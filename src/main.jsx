import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-0bz5ny8v8sjew2ef.us.auth0.com"
  clientId="uTRZCQGG8iAUBYRJ7AqADODsLBItAvnm"
  
  authorizationParams={{
    redirect_uri: window.location.origin
  }}>
  
  {/* o en vez de authorizationParams, poner:
    redirect_uri: {window.location.origin}>
  */}
  
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Auth0Provider>
)
