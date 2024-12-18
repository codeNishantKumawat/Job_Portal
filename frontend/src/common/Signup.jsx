import React from 'react';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BsTelephone } from "react-icons/bs";
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form";
const SignUp = () => {
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }
  return (
    <div className="flex justify-center  items-center min-h-screen bg-gray-100">

        

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 bg-white p-8 w-[450px] rounded-2xl shadow-lg">
      <h1 className='text-3xl font-bold'>SignUp for <span className='text-blue-700'>JobWorld</span></h1>
        {/* Name Input */}
        <div>
          <label className="block text-gray-800 font-semibold mb-1">Name</label>
          <div className="flex items-center border-2 border-gray-200 rounded-lg px-3 py-2 focus-within:border-blue-500">
            <svg
              height={24}
              viewBox="0 -9 32 32"
              width={24}
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-400"
            >
              <g id="Layer_3" data-name="Layer 3">
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
              </g>
            </svg>
            <input
              type="text"
              {...register("name")}
              placeholder="Enter your Name"
              className="ml-2 w-full outline-none"
            />
          </div>
        </div>

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

        {/* Mobile No Input */}

        <div>
          <label className="block text-gray-800 font-semibold mb-1">Mobile No</label>
          <div className="flex items-center border-2 border-gray-200 rounded-lg px-3 py-2 focus-within:border-blue-500">
            <BsTelephone/>
            <input
              type="number"
              {...register("mobile")}
              placeholder="Enter your Mobile No"
              className="ml-2 w-full outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button  className=" w-full py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800">
          Sign Up
        </button>
       

        {/* Footer */}
        <p className="text-center text-gray-600">
          Already have an account?{' '}
          <Link to={"/login"}><span className="text-blue-500 font-medium cursor-pointer">Login</span></Link>
        </p>
        
      </form>
    </div>
  );
};

export default SignUp;
