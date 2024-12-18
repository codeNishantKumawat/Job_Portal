import React from 'react';
import {Link} from 'react-router-dom'
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 bg-white p-8 w-[450px] rounded-2xl shadow-lg">
      <h1 className='text-3xl font-bold'>Login for <span className='text-blue-700'>JobWorld</span></h1>
       

        {/* Email Input */}
        <div>
          <label className="block text-gray-800 font-semibold mb-1">Email</label>
          <div className="flex items-center border-2 border-gray-200 rounded-lg px-3 py-2 focus-within:border-blue-500">
            <svg
              height={20}
              viewBox="0 0 32 32"
              width={20}
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-400"
            >
              <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
            </svg>
            
            <input
              type="text"
              {...register("email")}
              placeholder="Enter your Email"
              className="ml-2 w-full outline-none"
            />
          </div>
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-gray-800 font-semibold mb-1">Password</label>
          <div className="flex items-center border-2 border-gray-200 rounded-lg px-3 py-2 focus-within:border-blue-500">
           <RiLockPasswordLine/>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter your Password"
              className="ml-2 w-full outline-none"
            />
          </div>
        </div>


        {/* Submit Button */}
        <button className="w-full py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800">
          Login
        </button>

        {/* Footer */}
        <p className="text-center text-gray-600">
          Don't have an account?{' '}
          <Link to='/signup'><span className="text-blue-500 font-medium cursor-pointer">SignUp</span></Link>
        </p>
        
      </form>
    </div>
  );
};

export default Login;
