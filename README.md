User Management Dashboard
A modern, responsive dashboard application built with React for managing users with full CRUD operations, search functionality, and theme switching.

🚀 Features
User Management: Full CRUD operations (Create, Read, Update, Delete)

Responsive Design: Mobile-first design that works on all devices

Dark/Light Theme: Toggle between light and dark modes

Search Functionality: Real-time search through user data

Modern UI: Clean, professional interface with Tailwind CSS

Data Fetching: Efficient data handling with Tanstack Query

Form Validation: Robust forms with React Hook Form and Yup validation

🛠️ Tech Stack
Frontend: React 19, JavaScript

Styling: Tailwind CSS v4

Data Fetching: Axios + Tanstack Query

Forms: React Hook Form + Yup validation

Icons: Lucide React + Font Awesome

Build Tool: Vite

Deployment: Vercel

📦 Installation
Clone the repository

bash
git clone https://github.com/your-username/mini_dashboard.git
cd mini_dashboard
Install dependencies

bash
npm install
Start development server

bash
npm run dev
Build for production

bash
npm run build
🎯 Usage
Managing Users
View Users: Browse all users in a clean card layout

Create User: Click "Add User" to create new users

Edit User: Click the edit icon on any user card

Delete User: Click the delete icon (with confirmation)

Search Users: Use the search bar to filter users by name or email

Theme Switching
Click the theme toggle button in the header to switch between light and dark modes

Your preference is saved locally

📁 Project Structure
text
src/
├── components/
│   ├── Layout/
│   │   ├── Header.jsx
│   │   └── Sidebar.jsx
│   ├── UserManagement/
│   │   ├── UserCard.jsx
│   │   ├── UserModal.jsx
│   │   └── UserSearch.jsx
│   └── UI/
│       ├── ThemeToggle.jsx
│       └── Modal.jsx
├── hooks/
│   └── useUsers.js
├── services/
│   └── api.js
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
🔧 API Integration
This project uses JSONPlaceholder API for user data:

GET /users - Fetch all users

GET /users/:id - Fetch single user

POST /users - Create new user

PUT /users/:id - Update user

DELETE /users/:id - Delete user

🎨 Customization
Adding New Features
Create components in the appropriate folder

Add new API calls to services/api.js

Create custom hooks in hooks/ folder

Update Tailwind classes for styling

Modifying Styles
Edit src/styles/index.css for global styles

Use Tailwind utility classes in components

Custom colors and utilities can be added to Tailwind config

📱 Responsive Breakpoints
Mobile: < 768px (Collapsible sidebar, stacked layout)

Tablet: 768px - 1024px (Adaptive layout)

Desktop: > 1024px (Full sidebar, grid layout)

🚀 Deployment
The project is configured for easy deployment on Vercel:

Push your code to GitHub

Connect your repository to Vercel

Deploy automatically on every commit to main branch

Live Demo: [Your Vercel Deployment Link]

🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
JSONPlaceholder for the fake API

Tailwind CSS for the utility-first CSS framework

React Hook Form for form management

Tanstack Query for data fetching and caching

📞 Support
If you have any questions or issues, please open an issue on GitHub or contact:

Email: valchali@yahoo.com, or valchali07@gmail.com

GitHub: @Valchali

Note: This is a demonstration project using a fake API. Create/Update/Delete operations will simulate successful responses but won't persist data permanently.

Built with ❤️ using React and modern web technologies.