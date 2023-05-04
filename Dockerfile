# Use the latest version of Node.js
FROM node:alpine

# Set the working directory to the app directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the app directory
COPY react-portfolio/package*.json ./

# Install the app dependencies
RUN npm install

# Copy the React application files to the app directory
COPY react-portfolio/ ./

# Build the React application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
