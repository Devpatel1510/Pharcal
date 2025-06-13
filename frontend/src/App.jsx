import React,{useEffect} from 'react'
import { Route , Routes , Navigate ,useLocation} from 'react-router-dom'
import Signup from './pages/signup'
import Login from './pages/login'

import { useauthstore } from './store/auth.store'
import Nav from './Components/Nav'
import PTRCalculator from './Components/ptr'
import Breakeven from './Components/breakeven'
import Dosage from './Components/dosage'
import Projectedr from './Components/projectedr'
import Welcome from './Components/welcome'
import Stock from './pages/Stock'
import Add from './Components/add'
import Delete from './Components/delete'
import Update from './Components/update'
import Allproducts from './Components/allproducts'
import { Toaster } from 'react-hot-toast';

function App() {
  const {authUser ,checkAuth} = useauthstore();
useEffect (() => { checkAuth()},[checkAuth] );

const Location = useLocation();
const hideNavbarRoutes = ["/login", "/signup"];
const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

console.log({authUser});
  return (
    <div >
      <Toaster />
      {!shouldHideNavbar && <Nav />}
      <div className="relative min-h-screen flex flex-col bg-[url('/5630939.jpg')]  bg-cover bg-center h-screen w-full justify-center items-center bg-gradient-to-r from-[#3a0a2a] via-[#0a0a3a] to-[#1a1a5a] overflow-hidden">
      <Routes>
        <Route path='/' element={authUser ? <Welcome  /> : <Navigate to="/login" />} />
        <Route path='/signup' element={!authUser ? <Signup /> : <Navigate to="/" />} />
        <Route path='/login' element={!authUser ? <Login /> : <Navigate to="/" />} />
        <Route path='/ptr' element={authUser ? <PTRCalculator /> : <Navigate to="/login"/>} />
        <Route path='/breakeven' element={authUser ? <Breakeven />: <Navigate to="/login" />} />
        <Route path='/dosage' element={authUser ? <Dosage/>: <Navigate to="/login" />} />
        <Route path='/projectedr' element={authUser ? <Projectedr/>: <Navigate to="/login" />} />
        <Route path='/stock' element={authUser ? <Stock />: <Navigate to="/login" />} />
        <Route path='/add' element={authUser ? <Add />: <Navigate to="/login" />} />
        <Route path='/delete' element={authUser ? <Delete />: <Navigate to="/login" />} />
        <Route path='/update' element={authUser ? <Update />: <Navigate to="/login" />} />
        <Route path='/allproducts' element={authUser ? <Allproducts />: <Navigate to="/login" />} />
        
        
      </Routes>
      </div>

    </div>
  )
}

export default App
