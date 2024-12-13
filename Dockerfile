# Use the Nixpacks base image
FROM ghcr.io/railwayapp/nixpacks:ubuntu-1725321821

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build

# Expose the port your app runs on
EXPOSE 80

# Start the application
CMD ["npm", "run", "start"]
