# Use the official Node.js image as the base
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files from the context to the container
COPY . .

# Expose the port that the app will run on
EXPOSE 5000

# Command to run the app using npm start
CMD ["npm", "start"]




//product mode 

# Use a lightweight Node.js image
FROM node:16-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy only necessary files
COPY package*.json ./

# Install dependencies (for production only)
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the port the service listens on
EXPOSE 3000

# Start the service
CMD ["node", "app.js"]