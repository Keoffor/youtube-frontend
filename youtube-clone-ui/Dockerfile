# Use an official Node.js LTS (Long Term Support) image as the base
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
RUN npm install

# Copy the entire application from host to the working directory
COPY . .

# Build the Angular app
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/youtube-clone-ui/ /usr/share/nginx/html

# Copy the Nginx configuration from host to the specified location in the container
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
