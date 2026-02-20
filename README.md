# Task Manager Web Application

A lightweight task management web application built using Vanilla JavaScript with persistent client-side storage using the LocalStorage API.

This project demonstrates dynamic DOM manipulation, state management using structured JavaScript objects, and persistent data handling without any external libraries or frameworks.

---

##  Features

- Add new tasks
- Delete tasks permanently
- Mark tasks as completed
- Persist tasks after page refresh
- Persist completed (strike-through) state after refresh
- Dynamic rendering of tasks on page load
- Object-based task data modeling

---

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- DOM API
- LocalStorage API

---

##  Project Structure


---

## How the Application Works

### Task Data Modeling

Tasks are stored as JavaScript objects:


This allows the application to track both the task content and its completion status.

---

### Persistent Storage

- All tasks are stored in `localStorage`.
- On page load:
  - Stored tasks are retrieved.
  - Data is parsed from JSON.
  - Tasks are dynamically rendered in the DOM.

---

### Dynamic Rendering

When the page loads:

- The application loops through the stored task array.
- Each task is rendered as a `<li>` element.
- If a task is marked completed, a CSS class is applied automatically.

---

### State Synchronization

Every user interaction updates both:

- The UI (DOM)
- The underlying `tasks` array
- LocalStorage

This ensures consistent state across refreshes.

---

###  Key JavaScript Concepts Used

- `addEventListener`
- DOM element creation
- `forEach`, `map`, `filter`
- Object destructuring
- Spread operator (`...`)
- JSON.parse / JSON.stringify
- Client-side persistence with LocalStorage
- Conditional rendering logic

---

###  Completed Task Persistence

When the "Done" button is clicked:

1. The UI toggles the `.completed` class.
2. The matching task object is updated.
3. The updated array is saved back to LocalStorage.
4. On refresh, completed tasks remain struck-through.

---

###  What This Project Demonstrates

- Understanding of state vs UI rendering
- Data-driven DOM updates
- Persistent client-side application logic
- Clean separation between data storage and UI behavior
- Practical use of modern JavaScript array methods

---

### Future Improvements

- Edit task functionality
- Unique ID-based task identification
- Task filtering (All / Completed / Active)
- Responsive UI styling
- Backend integration (Node.js + Database)
- React version of the application

---



Developed as part of hands-on practice to strengthen JavaScript fundamentals, state management concepts, and client-side persistence logic.
