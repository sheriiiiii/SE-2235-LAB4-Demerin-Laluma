<!-- # Installation
Run the following command to clone the repository
```
git clone https://github.com/alokyadav1/mern-todo-app.git
```
Go to ```frontend``` and ```backend``` directory to install packages
```
cd frontend
npm install
```
```
cd backend
npm install
```
# Configuration
Create ```.env``` file inside ```backend``` directory and copy the following code

```
MONGO_URI=Your mongodb URI
GMAIL_USERNAME=your gmail address 
GMAIL_PASSWORD=password created inside 'App Password' section under google accounts setting
PORT=8000
JWT_SECRET=a random secret key eg. thisisasecretkey
```
# Run the App
Go to ```backend``` and ```frontend``` directory and start the server
```
cd backend
nodemon server
```
```
cd frontend
npm start
```
# Live Preview
Check live preview here [https://todo-app-b96a5.web.app/](https://todo-app-b96a5.web.app/)

 -->



# API Testing Setup

This document describes how to set up and run API tests for the backend.

## Prerequisites

* Node.js and npm installed.
* MongoDB installed (or use MongoDB Atlas).

## Setup

1.  Clone the repository and navigate to the `backend` directory.
2.  Install dependencies: `npm install`.
3.  Install testing dependencies: `npm install jest supertest mongodb-memory-server --save-dev` and `npm install --save-dev @babel/preset-env babel-jest`.
4.  Create a `.env` file in the `backend` directory with the following content:

    ```
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

5.  Run tests: `npm test`.

## Test Results

* Tests pass for all happy paths.
* Tests fail for all sad paths.

## Notes

* The tests use `mongodb-memory-server` for an in-memory database.
* The tests verify the `/api/tasks` and `/api/users` endpoints.
* The tests verify that correct status codes are returned.
* Please ensure the .env file has correct values.