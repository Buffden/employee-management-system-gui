# Use Node.js 18 as the base image for the build process
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Serve the Angular app using a lightweight server (NGINX)
FROM nginx:alpine
COPY --from=build /app/dist/employee-management-system /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the NGINX server
CMD ["nginx", "-g", "daemon off;"]
