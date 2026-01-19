React Task Manager

Overview
React Task Manager is a task management web application built with **React**. It allows users to add, edit, and remove tasks with a clean and responsive user interface. Task data is persisted in **localStorage**, ensuring tasks remain available after page reloads. The app also includes a basic login simulation and profile sidebar navigation.

Features
 Add Tasks: Quickly add new tasks with an input form.
 Edit Tasks: Update task text inline with an edit form.
 Remove Tasks: Delete tasks with a single click.
 Login Simulation: Basic login functionality for a personalized experience.
 Profile Sidebar: Navigate between Tasks and Settings pages.
 LocalStorage Persistence: Task data is saved locally for persistence.
 Responsive Design: Compatible with desktop and mobile devices.

Technologies Used
 React (functional components, hooks: useState, useEffect)
 React Router DOM (routing and modal routes)
 JavaScript (ES6+)
 CSS (flexbox, responsive layouts)
 localStorage (task persistence)

Installation & Usage

bash
git clone <repository-url>
cd react-task-manager
npm install
npm start

Then open your browser at http://localhost:3000.

Future Improvements

Integrate a PostgreSQL backend for multi-user storage.
Implement real authentication with JWT tokens.
Add drag-and-drop task reordering.
Deploy to Vercel or Netlify for a live demo.

