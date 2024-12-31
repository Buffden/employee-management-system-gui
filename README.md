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

## Features

### Frontend
- Developed using Angular standalone components.
- Proxy configuration to handle API calls during development.
- CRUD operations for employees with services handling backend communication.
- Form validation using Angular Reactive Forms.

### Backend
- Developed using Spring Boot 3.4.0.
- Global CORS configuration for handling cross-origin requests.
- RESTful APIs for employee management.
- PostgreSQL as the database, running in a Docker container.

---

## APIs

### Endpoints
| Method | Endpoint               | Description              |
|--------|------------------------|--------------------------|
| GET    | `/employees`           | Fetch all employees      |
| GET    | `/employees/{id}`      | Fetch a specific employee|
| POST   | `/employees`           | Add a new employee       |
| PUT    | `/employees/{id}`      | Update an employee       |
| DELETE | `/employees/{id}`      | Delete an employee       |

### Example JSON Request
**Add Employee**
```json
{
  "name": "John Doe",
  "designation": "Software Engineer",
  "salary": 85000,
  "department": {
    "id": 1,
    "name": "Technology"
  }
}
```

---

## Known Issues and Troubleshooting

### CORS Error
If you encounter a CORS issue while running the Angular frontend and backend separately:
1. Ensure the proxy configuration (`proxy.conf.json`) is set up correctly.
2. Verify the Spring Boot backend’s CORS configuration includes:
   ```java
   @Bean
   public CorsFilter corsFilter() {
       UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
       CorsConfiguration config = new CorsConfiguration();
       config.setAllowCredentials(true);
       config.addAllowedOrigin("http://localhost:4200");
       config.addAllowedHeader("*");
       config.addAllowedMethod("*");
       source.registerCorsConfiguration("/**", config);
       return new CorsFilter(source);
   }
   ```
3. Restart both the backend and frontend.

### Debugging Proxy Issues
If Angular requests are not forwarded to the backend:
1. Check the Angular dev server logs when running `ng serve`.
2. Ensure the `pathRewrite` option in `proxy.conf.json` is correctly stripping `/api`.

---

## Future Enhancements
- Add authentication and role-based access control.
- Improve the UI with Angular Material or Bootstrap.
- Containerize the Angular app and integrate with Docker Compose.
- Automate database migrations using Flyway or Liquibase.

---

## Contributors
- **Your Name**

---

## License
This project is licensed under the MIT License.
