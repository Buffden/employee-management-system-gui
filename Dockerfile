# Use Node.js 18 as the base image for the build
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Use a lightweight web server (Nginx) to serve the built files
FROM nginx:alpine
COPY --from=build /app/dist/employee-management-system /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
