# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

COPY package.json ./

RUN npm install

COPY . ./

COPY public/ ./public
COPY src/* ./src

# Expose port 3000 for the React app
EXPOSE 3000

CMD ["npm", "start"]