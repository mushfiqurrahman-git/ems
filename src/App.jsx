import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'


const App = () => {

  const [user, setUser] = useState(null)

  const authData = useContext(AuthContext)
  console.log(authData.employees.find((e)=>e.email == e.email && e.password == password))

  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
    }
    else if (email == 'user@me.com' && password == '123') {
      setUser('employee')
    }
    else {
      alert("Invalid Credentials")
    }

  }

  const data = useContext(AuthContext)
  console.log(data)

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> :<EmployeeDashboard/>}
    </>
  )
}

export default App