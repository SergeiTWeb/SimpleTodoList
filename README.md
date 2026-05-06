# React Todo List App 📝

A modern, feature-rich todo list application built with React. Track your tasks with style!

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

- **Add Todos** - Create new tasks quickly
- **Mark Complete** - Toggle task completion status
- **Delete Todos** - Remove tasks you no longer need
- **Persistent Storage** - Your todos are saved in localStorage
- **Modern UI** - Simple and modern design with smooth animations
- **Responsive** - Works perfectly on mobile and desktop
- **Keyboard Accessible** - Full keyboard navigation support

## Live Demo

Check out the live demo: [https://sergeitweb.github.io/SimpleTodoList/]

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SergeiTWeb/SimpleTodoList.git
   cd react-todo-app
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm run dev
   ```
4. **Open your browser**
   Navigate to http://localhost:5174

## Tech Stack

- React 18 - UI library
- Vite - Build tool and dev server
- CSS3 - Modern styling with gradients and animations
- LocalStorage API - Data persistence

## 📁 Project Structure

```bash
simple-todo-list/
├── src/
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Entry point
│   ├── NewTodoForm.jsx   # Form to add new todos
│   ├── TodoList.jsx      # List container component
│   ├── TodoItem.jsx      # Individual todo item
│   └── styles.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Usage

- Add a Todo: Type your task in the input field and click "Add" or press Enter
- Complete a Todo: Click the checkbox or the task label to toggle completion
- Delete a Todo: Click the "Delete" button to remove a task

## Available Scripts

- npm run dev - Start development server
- npm run build - Build for production
