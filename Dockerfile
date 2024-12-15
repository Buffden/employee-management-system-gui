FROM node:16 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Run the SSR server
CMD ["node", "dist/employee-management-system/server/server.mjs"]
