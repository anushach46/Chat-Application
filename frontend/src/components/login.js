import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/login.jpg'; // Add a sample image in the assets folder

const Login = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-transparent bg-opacity-80 p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Login</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm text-white font-medium text-gray-700">Username</label>
            <input 
              type="text" 
              id="username" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm text-white font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            />
          </div>
          <div className="mb-4 text-right">
            <Link 
              to="/forgot-password" 
              className="text-sm text-blue-600 hover:text-blue-800 transition duration-200"
            >
              Forgot password?
            </Link>
          </div>
          <button 
            type="submit" 
            className="w-full px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
