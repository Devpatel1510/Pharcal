import React,{useState} from 'react'
import { useauthstore } from '../store/auth.store';
import { Link } from 'react-router';
function Login() {
  const [formdata,setformdata] = useState({
    email : "",
    password : "",
  });

  const {login,isLoginin} = useauthstore();

  const handlesubmit = (e) => {
    e.preventDefault();

    login(formdata);
  }
  return (
   <div className="relative min-h-screen flex flex-col bg-[url('/5630939.jpg')]  bg-cover bg-center h-screen w-full justify-center items-center bg-gradient-to-r from-[#3a0a2a] via-[#0a0a3a] to-[#1a1a5a] overflow-hidden">
     
      <h1 className="font-anton text-white text-4xl motion-preset-blur-right  sm:text-5xl mb-8 select-none">
          LOGIN
        </h1>

     
      
        <form
          onSubmit={handlesubmit}
          className="bg-[#1f1b44] rounded-3xl motion-preset-blur-right p-8 w-72 sm:w-80 flex flex-col space-y-6"
          noValidate
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Enter your email"
            required
            autoComplete="email"
            value={formdata.email}
            onChange={(e)=>setformdata({...formdata,email : e.target.value})}
            className="rounded-full py-3 px-6 text-center bg-white text-gray-900 text-base focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            aria-label="Enter your password"
            required
            autoComplete="current-password"
            value={formdata.password}
            onChange={(e)=>setformdata({...formdata,password : e.target.value})}
            className="rounded-full py-3 px-6 text-center bg-white text-gray-900 text-base focus:outline-none"
          />
          <button
            type="submit"
            className="mt-2 px-12 py-3 rounded-full bg-[#792a51] hover:bg-[#641f43] text-white font-medium text-base transition-all shadow-lg hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
          >
            {isLoginin ? (
                <>
                  
                  Loading...
                </>
              ) : (
                "login"
              )}
          </button>

          
        </form>
      <Link
            to="/signup"
            className="text-white text-sm mt-8  text-center motion-preset-blur-right    transition-colors"
          >
            Create an Account
          </Link>

      <div className="absolute bottom-6 left-6">
          <span className="font-anton text-white text-3xl select-none">
            Pharcal
          </span>
        </div>
    </div>
    
  )
}

export default Login
