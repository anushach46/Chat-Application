import React from 'react';
import { Link } from 'react-router-dom';
import landingImage from '../images/background.jpg'; // Add a sample image in the assets folder

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl">ConnectNow</h1>
        <div>
          <Link to="/login" className="mr-4">Login</Link>
          <Link to="/register">Signup</Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center p-4 bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col md:flex-row items-center">
        <img src={landingImage} alt="Chat" className="w-64 h-64 md:w-96 md:h-96 mb-4 md:mb-0"/>
          <div className="md:ml-8 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl mb-4">
              Welcome to <span className="animate-fade-in-out">ConnectNow</span>
            </h2>
            <p className="text-lg text-justify">
              Connect with your friends and family through one-to-one and group chats. Enjoy seamless audio and video calling, share stories and updates, and much more!
              Stay connected with your loved ones anytime, anywhere. Our app provides an intuitive and user-friendly interface, making it easy to chat, call, and share moments.
              Join now and experience the best way to stay in touch with the people who matter the most. ConnectNow is here to bring you closer to your friends and family.
              ConnectNow is designed for convenience and reliability, ensuring you never miss a moment with your loved ones. Whether you're catching up on the latest news 
              or sharing laughter-filled memories, our app offers seamless communication at your fingertips.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} ConnectNow</p>
      </footer>
    </div>
  );
};

export default LandingPage;
