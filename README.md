# Employee Management System

## Overview
This project is an **Employee Management System** built with the following stack:

- **Frontend**: Angular 19.0.5
- **Backend**: Spring Boot 3.4.0
- **Database**: PostgreSQL (running in a Docker container)
- **Development Environment**:
  - Backend running in Docker
  - Frontend running locally with `ng serve`

The system manages employee data such as names, designations, salaries, and departments, with full CRUD functionality.

---

## Project Setup

### Prerequisites
- Node.js and npm
- Angular CLI
- Docker and Docker Compose

### Backend Setup (Spring Boot)
1. Clone the repository.
2. Navigate to the backend directory.
3. Build the Docker image for the backend:
   ```bash
   docker build -t employee-management-system-app .
   ```
4. Start the backend server using Docker:
   ```bash
   docker run -p 8080:8080 --name employee-management-system-app employee-management-system-app
   ```
5. Verify the backend is running by visiting:
   ```
   http://localhost:8080/employees
   ```

### Database Setup (PostgreSQL)
1. Ensure Docker is running.
2. Start a PostgreSQL container:
   ```bash
   docker run --name postgres-ems -e POSTGRES_PASSWORD=yourpassword -d -p 5432:5432 postgres
   ```
3. Connect to the database using a client (e.g., pgAdmin) and ensure the schema matches the backend configuration.

---

### Frontend Setup (Angular)
1. Navigate to the frontend directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the proxy configuration for development to avoid CORS issues:
   - **`proxy.conf.json`**:
     ```json
     {
       "/api/*": {
         "target": "http://localhost:8080",
         "secure": false,
         "logLevel": "debug",
         "changeOrigin": true,
         "pathRewrite": {
           "^/api": ""
         }
       }
     }
     ```
   - Update `angular.json`:
     ```json
     "serve": {
       "options": {
         "proxyConfig": "proxy.conf.json"
       }
     }
     ```
4. Start the Angular development server:
   ```bash
   ng serve
   ```
5. Open the application at:
   ```
   http://localhost:4200
   ```

---

# Employee Management System (EMS)

## Vision
The Employee Management System (EMS) is a modern web application designed to simplify and enhance the management of employee data and organizational processes. It caters to **Admins**, **HR personnel**, **Managers**, and **Employees** by offering a role-based experience with features such as **employee tracking**, **performance reviews**, **analytics**, and a **responsive dashboard**. The application is scalable and serves as the backbone for **employee lifecycle management** within an organization.

---

## Core Features

### Dashboard
- **Key Metrics**: Total Employees, Total Departments, Turnover Rate.
- **Visualizations**:
  - Line charts for employee growth.
  - Pie charts for department distribution.
- **Recent Activity Table**: List of recently added or updated employees.

### Employee Management
- CRUD operations for managing employee data.
- Detailed employee profiles with overlays for quick edits.
- Performance reviews and ratings by managers.

### Department Management
- View and manage departments.
- Assign employees to specific departments.

### Analytics
- HR-focused dashboards for performance trends, turnover analysis, and other insights.
- Individual employee performance graphs and history.

### Authentication and Profile Management
- Secure login for all user roles.
- User-specific profile page with editable information (e.g., name, password, and contact info).

---

## Pages and Routing Overview

| **Page**             | **Path**            | **Role/Access**     | **Description**                                                                                   |
|-----------------------|---------------------|---------------------|---------------------------------------------------------------------------------------------------|
| **Login Page**        | `/login`           | Public              | Secure login for all users (Admin, HR, Manager, Employee).                                       |
| **Dashboard**         | `/dashboard`       | Admin, HR, Manager  | Displays KPIs, charts, and recent activity.                                                     |
| **Employees Table**   | `/employees`       | Admin, HR, Manager  | Table listing all employees with search, filter, and pagination.                                 |
| **Employee Details**  | `/employees/:id`   | Admin, HR, Manager  | Individual employee profile page with detailed info and performance reviews.                     |
| **Departments Table** | `/departments`     | Admin, HR           | Table listing all departments, their heads, and the number of employees in each department.      |
| **Profile Page**      | `/profile`         | All Users           | Logged-in user’s profile with editable information.                                              |
| **Analytics**         | `/analytics`       | HR                  | Advanced analytics and trends, including turnover rates and performance comparisons.             |
| **Performance Reviews** | `/reviews/:id`   | Manager, HR         | Rate employees and view their review history and analytics.                                      |

---

## UI/UX and Content Overview

### Login Page
- Fields: Username, Password.
- Button: Login.
- Redirects users to appropriate landing pages based on their roles.

### Dashboard
- **Cards**:
  - Total Employees, Departments, Turnover Rate.
- **Charts**:
  - Employee growth (line chart).
  - Department distribution (pie chart).
- **Recent Activity Table**:
  - Displays recently added or updated employees.

### Employees Table
- **Features**:
  - Search by name, email, or department.
  - Filter employees by status (Active, Inactive).
  - Pagination for large datasets.
- **Actions**:
  - View detailed employee profiles.
  - Edit employee details via overlays.

### Employee Details Page
- **Overview Section**:
  - Name, email, phone, position, hire date.
- **Performance Reviews**:
  - Ratings from managers.
  - Historical performance trends (chart).
- **Actions**:
  - Update employee info.
  - Add a new performance review.

### Departments Table
- **Columns**:
  - Department Name, Head, Number of Employees.
- **Actions**:
  - View employees in a department.
  - Assign/remove department heads.

### Profile Page
- **Content**:
  - Basic user info (editable fields for name, contact info).
  - Change password functionality.

### Analytics Page (For HR)
- **Charts**:
  - Turnover analysis (line chart).
  - Employee performance distribution (bar chart).
- **Trends**:
  - Department growth trends.
  - Employee lifecycle analysis.

### Performance Reviews Page
- **Table**:
  - List of employees managed by the logged-in manager.
  - Ratings and comments history.
- **Actions**:
  - Add/update performance reviews.

---

## Features Based on User Hierarchy

| **Role**   | **Features**                                                                                       |
|------------|---------------------------------------------------------------------------------------------------|
| **Admin**  | Manage users, manage departments, view all employee data, full access to analytics.               |
| **HR**     | Manage employees, manage departments, view analytics, performance reviews, and trends.            |
| **Manager**| Rate employees, view performance reviews, see department-specific analytics.                      |
| **Employee**| View own profile, view performance reviews and personal analytics.                               |

---

## Integration with Database

### Login Credentials
- Pulled from the **Users** table during authentication.
- JWT tokens generated for secure access.

### Dashboard Data
- Cards and charts query data from **Employees** and **Departments** tables.

### Employees Table
- CRUD operations backed by the **Employees** table.
- Filters use indexes on `department_id` and `status`.

### Performance Reviews
- Data pulled from the **Performance Reviews** table and visualized.

---

## Future Enhancements
- Role-based notifications for important events.
- Advanced reporting for employee performance comparisons.
- Multi-language support for global teams.
- Integration with third-party tools (e.g., payroll systems, email notifications).

---

## Contributing
We welcome contributions! Feel free to fork the repository, create a branch, and submit a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).
