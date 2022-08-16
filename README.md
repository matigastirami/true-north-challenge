# true-north-challenge
Code challenge for True North (Full stack)

## Running the app

### Pre-requisites
* Docker installed on your machine

### How to run the full stack application
1. Run docker
2. Run `docker-compose up` on the root folder

# Backend

## Executing automated tests

### Unit tests
1. Open your terminal and execute `cd server/`
2. Execute `npm run test`

![Unit tests](/images/unit-test.jpg?raw=true "Unit tests result")

### e2e tests

1. Open your terminal and execute `cd server/`
2. Execute `npm run test:e2e`

![e2e tests](/images/e2e-test.jpg?raw=true "e2e tests result")

# Running tests on Postman

* GET
![GET](/images/GET.jpg?raw=true "GET request")
* PUT
![PUT](/images/PUT.jpg?raw=true "PUT request")

# Frontend

# Access frontend app
- Open `http://localhost:3000/` on your browser

## Unit tests for frontend (React Testing Library)
1. cd into `client/`
2. Execute `npm run test:unit`