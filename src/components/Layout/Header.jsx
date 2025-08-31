import React, { useState } from 'react';
import ThemeToggle from '../UI/ThemeToggle';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 h-16 px-6 flex items-center justify-between shadow">
      <div className="flex items-center gap-2 text-primary font-bold text-xl">
        <i className="fas fa-chart-pie"></i>
        <span className="hidden md:inline">Company Name</span>
      </div>
      
      <div className="flex items-center gap-5">
        <ThemeToggle />
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
            JD
          </div>
          <span className="hidden md:inline">John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Header;