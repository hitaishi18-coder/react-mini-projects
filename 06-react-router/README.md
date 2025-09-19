🛣 React Router Advanced Example
This project demonstrates React Router features with nested routes, dynamic routes, optional parameters, NavLink active styling, layout routes, redirects, and a custom 404 page.

It’s a perfect learning example for building multi-page React apps with clean navigation and structured route management.

🚀 How to Run
bash
Copy code
git clone https://github.com/hitaishi18-coder/react-router-advanced.git
cd react-router-advanced
npm install
npm start
🧠 Topics Covered
This project covers almost all React Router concepts:

1️⃣ BrowserRouter Setup
Defined in index.jsx to wrap the <App /> component.

Ensures all routing works correctly across the application.

2️⃣ Layout Routes with <Outlet />
Navbar component is a layout route that contains navigation links and uses <Outlet /> to render nested pages.

Helps avoid repeating the navbar on every page.

3️⃣ Navigation with Link & NavLink
Link is used for navigation without page reloads.

NavLink adds active styling when the link matches the current route.

Example: Navbar links change appearance when active.

4️⃣ Nested Routes
/college contains child routes for Student, Department, and Book.

<Outlet /> in College ensures nested content is displayed in the correct place.

5️⃣ Dynamic Routes with Parameters
/users/:id → Shows user details by id.

/users/:id/:name? → Supports optional name parameter.

Parameters accessed via useParams().

6️⃣ Optional Parameters
Routes like /users/list? and /users/:id/:name? use ? for optional segments.

7️⃣ Redirects with <Navigate />
If the route does not match, user is redirected to /login.

Can also be swapped for a custom 404 page.

8️⃣ Custom 404 Page
PageNotFound component shows a custom message and an image when a route is not found.

9️⃣ Passing Data to Routes
UserList maps over a list of users and creates links with dynamic id and name in the URL.

🛠 Tech Stack
⚛ React

🛣 React Router

🎨 CSS for styling

📂 Folder Structure
bash
Copy code
react-router-advanced/
├── src/
│   ├── App.jsx              # Main route definitions
│   ├── index.jsx            # Entry point with BrowserRouter
│   ├── Navbar.jsx           # Layout route with navigation
│   ├── Home.jsx             # Home page
│   ├── About.jsx            # About page
│   ├── Login.jsx            # Login page
│   ├── College.jsx          # College parent route
│   ├── Student.jsx          # Nested route: Student
│   ├── Department.jsx       # Nested route: Department
│   ├── Book.jsx             # Nested route: Book
│   ├── User.jsx             # User list page
│   ├── UserDetails.jsx      # Dynamic route page
│   ├── PageNotFound.jsx     # 404 page
│   ├── header.css           # Navbar styling
│   ├── App.css
📸 Features
✅ Navbar with active link styling
✅ Nested routing with <Outlet />
✅ Dynamic URL parameters with useParams()
✅ Optional route parameters
✅ Redirects using <Navigate />
✅ Custom 404 page
✅ Separate layout routes for different sections

💡 How It Works
Navbar as Layout Route → All main pages (Home, About, Login, Users) are inside the <Navbar /> layout so navigation is persistent.

College Nested Routes → /college shows different child pages without leaving the parent layout.

Dynamic User Routes → Clicking a user in UserList navigates to /users/:id or /users/:id/:name.

Optional Parameters → :name? allows passing an extra parameter without breaking the route.

Redirects & 404s → If a route isn’t found, you can either redirect or show a custom PageNotFound.

🧑‍💻 Author
Created by @hitaishi18-coder

