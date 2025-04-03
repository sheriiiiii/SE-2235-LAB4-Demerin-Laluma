# API Testing Setup

This document describes how to set up and run API tests for the backend.

## Prerequisites

* Node.js and npm installed.
* MongoDB installed (or use MongoDB Atlas).

## Setup

1.  Clone the repository and navigate to the `backend` directory.
2.  Install dependencies: `npm install`.
3.  Install testing dependencies: `npm install jest supertest mongodb-memory-server --save-dev` and `npm install --save-dev 
4.  Run tests: `npm test`.