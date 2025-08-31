import React from 'react';

const Sidebar = () => {
  const navItems = [
    { icon: 'fas fa-home', label: 'Dashboard', active: true },
    { icon: 'fas fa-users', label: 'Users', active: false },
    { icon: 'fas fa-cog', label: 'Settings', active: false },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white w-64 min-h-screen hidden md:block">
      <div className="p-6">
        <div className="flex items-center gap-2 text-xl font-bold">
          <i className="fas fa-chart-pie"></i>
          <span>Dashboard</span>
        </div>
      </div>
      
      <nav className="mt-8">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center gap-3 p-4 text-white/90 hover:text-white hover:bg-white/10 transition-colors font-medium ${
                  item.active ? 'bg-white/10 text-white' : ''
                }`}
              >
                <i className={`${item.icon} w-5 text-center`}></i>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;