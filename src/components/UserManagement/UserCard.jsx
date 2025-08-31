import React from 'react';

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {user.name.charAt(0)}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(user)}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            <i className="fas fa-edit"></i>
          </button>
          <button
            onClick={() => onDelete(user.id)}
            className="text-red-600 hover:text-red-800 text-sm"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
      
      <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
        {user.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        <i className="fas fa-envelope mr-2"></i>
        {user.email}
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        <i className="fas fa-phone mr-2"></i>
        {user.phone}
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        <i className="fas fa-globe mr-2"></i>
        {user.website}
      </p>
      
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Company: {user.company?.name}
        </p>
      </div>
    </div>
  );
};

export default UserCard;