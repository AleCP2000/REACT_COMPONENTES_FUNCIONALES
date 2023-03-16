import { useState } from 'react'
import Navbar from './components/Navbar'
import { useAuth0 } from '@auth0/auth0-react'
import Logout from './components/Logout';
import Login from './components/Login';

function App() {

  const { user,isAuthenticated } = useAuth0();
  console.log(window.location.origin)
  return (
    <div>
      {isAuthenticated ? (
        <>
          <Navbar name={user.name}></Navbar>
        </>
      ) : (
        <Login/>
      )} 

    </div>
  )
}

export default App
