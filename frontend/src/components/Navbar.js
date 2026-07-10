import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../Hooks/useLogout'
import { useAuthContext } from '../Hooks/userContext'
const Navbar=()=>{
  const {logout} = useLogout()
  const {user}=useAuthContext()
  const handleClick=()=>{
        logout()
  }
  return (
    <header>
    <div className='container'>
        <Link to='/'>
        <h1>FitCode-Workout Buddy</h1>
        </Link>
        <nav>
          {
            user && (
              <div>
            <span>{user.email}</span>
            <button onClick={handleClick}>Log-Out</button>
          </div>
            )
          }
           {
            !user && (
              <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign-Up</Link>
          </div>
            )
          }
        </nav>
    </div>
    </header>
  )
}

export default Navbar
