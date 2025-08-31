import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import UserCard from './components/UserManagement/UserCard';
import UserModal from './components/UserManagement/UserModal';
import UserSearch from './components/UserManagement/UserSearch';
import { useUsers, useCreateUser, useUpdateUser, useDeleteUser } from './hooks/useUsers';

const queryClient = new QueryClient();

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { icon: 'fas fa-home', label: 'Dashboard', active: true },
    { icon: 'fas fa-users', label: 'Users', active: false },
    { icon: 'fas fa-cog', label: 'Settings', active: false }
  ];

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow">
        <div className="flex items-center gap-2 text-primary font-bold text-xl">
          <i className="fas fa-chart-pie"></i>
          <span>Dashboard</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-gray-500 dark:text-gray-400"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>
      
      {isOpen && (
        <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white absolute w-full z-10 shadow-lg">
          <ul className="py-2">
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
        </div>
      )}
    </div>
  );
};

const UserDashboard = () => {
  const { data: users, isLoading, error } = useUsers();
  const createUser = useCreateUser();
  const updateUser = useUpdateUser();
  const deleteUser = useDeleteUser();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const filteredUsers = users?.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const handleCreateUser = () => {
    setSelectedUser(null);
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      deleteUser.mutate(id);
    }
  };

  const handleSubmitUser = (userData) => {
    if (isEditing) {
      updateUser.mutate({ id: selectedUser.id, user: userData });
    } else {
      createUser.mutate(userData);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600">Error loading users: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">User Management</h1>
        <button
          onClick={handleCreateUser}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2"
        >
          <i className="fas fa-plus"></i>
          Add User
        </button>
      </div>

      <div className="mb-6">
        <UserSearch 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map(user => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          <i className="fas fa-users text-4xl mb-4"></i>
          <p>No users found{searchTerm ? ` matching "${searchTerm}"` : ''}</p>
        </div>
      )}

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={selectedUser}
        onSubmit={handleSubmitUser}
        isEditing={isEditing}
      />
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 dark:bg-gray-900">
      <MobileSidebar />
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto">
          <UserDashboard />
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>
  );
};

export default App;

// function App() {
//   return (
//     <div className="p-6 bg-blue-500 text-white">
//       <h1 className="text-2xl font-bold">Tailwind CSS v4 is working!</h1>
//       <p>If you see blue background and white text, it's working correctly.</p>
//     </div>
//   );
// }

// export default App;