# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the Vite app for production
RUN npm run build

# Install a static file server to serve the production build
RUN npm install -g serve

# Expose the port that your app will run on
EXPOSE 4173

# Serve the built files using 'serve'
CMD ["serve", "-s", "dist", "-l", "4173"]
