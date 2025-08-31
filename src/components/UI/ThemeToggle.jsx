// import React, { useState, useEffect } from 'react';

// const ThemeToggle = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const isDark = localStorage.getItem('darkMode') === 'true';
//     setDarkMode(isDark);
//     document.documentElement.classList.toggle('dark', isDark);
//   }, []);

//   const toggleTheme = () => {
//     const newDarkMode = !darkMode;
//     setDarkMode(newDarkMode);
//     localStorage.setItem('darkMode', newDarkMode);
//     document.documentElement.classList.toggle('dark', newDarkMode);
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="text-gray-500 hover:text-blue-600 transition-colors text-xl"
//       aria-label="Toggle theme"
//     >
//       <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
//     </button>
//   );
// };

// export default ThemeToggle;



import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('darkMode');
    const isDark = savedTheme === 'true';
    
    // Check system preference as fallback
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialDarkMode = savedTheme !== null ? isDark : systemPrefersDark;
    
    setDarkMode(initialDarkMode);
    document.documentElement.classList.toggle('dark', initialDarkMode);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors"
      aria-label="Toggle theme"
    >
      <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
    </button>
  );
};

export default ThemeToggle;