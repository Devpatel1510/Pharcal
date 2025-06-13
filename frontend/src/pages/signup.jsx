import React,{useState} from 'react'
import toast from 'react-hot-toast';
import { useauthstore } from '../store/auth.store';
import { Link } from 'react-router';
import './signup.css'
function Signup() {
     const [formdata,setformdata] = useState ({
    fullName:"",
    email:"",
    password:"",
  });

  const validateForm = () => {
    if (!formdata.fullName.trim()) return toast.error("Full name is required");
    if (!formdata.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formdata.email)) return toast.error("Invalid email format");
    if (!formdata.password) return toast.error("Password is required");
    if (formdata.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  };

   

   const { signup , isSigningUp } = useauthstore();

 

  

    

  const handlesubmit = (e) => {
   e.preventDefault();
   const success = validateForm();

    if (success === true) signup(formdata);
  }
  return (
    <div className="relative min-h-screen flex flex-col bg-[url('/5630939.jpg')]  bg-cover bg-center h-screen w-full justify-center items-center bg-gradient-to-r from-[#3a0a2a] via-[#0a0a3a] to-[#1a1a5a] overflow-hidden">
       
        <h1 className="font-anton text-white  motion-preset-blur-right  text-4xl sm:text-5xl mb-8 select-none">
          SIGN UP
        </h1>
        <form
          onSubmit={handlesubmit}
          className="bg-[#1f1b44] rounded-3xl motion-preset-blur-right  p-8 w-72 sm:w-80 flex flex-col space-y-6"
        >
          <input
            type="text"
            name="fullname"
            placeholder="fullname"
            value={formdata.fullName}
            onChange={(e)=>{setformdata({...formdata,fullName:e.target.value})}}
            required
            className="rounded-full py-3 px-6 text-center bg-white text-gray-900 text-base focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formdata.email}
            onChange={(e)=>{setformdata({...formdata,email:e.target.value})}}
            required
            className="rounded-full py-3 px-6 text-center bg-white text-gray-900 text-base focus:outline-none"
          />
          <input
            type="password"
            name="password"
            value={formdata.password}
            onChange={(e)=>{setformdata({...formdata,password:e.target.value})}}
            placeholder="password"
            required
            className="rounded-full py-3 px-6 text-center bg-white text-gray-900 text-base focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#7a2344] text-white rounded-full py-2.5 px-10 mx-auto text-sm"
          >
            {isSigningUp ? (
                <>
                   
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
          </button>
        </form>
        <Link to="/login" className="text-white mt-6 motion-preset-blur-right text-sm select-none">
          Already have an account ?
        </Link>
        <div className="absolute bottom-6 left-6">
          <span className="font-anton text-white text-3xl select-none">
            Pharcal
          </span>
        </div>
      </div>
  )
}

export default Signup
