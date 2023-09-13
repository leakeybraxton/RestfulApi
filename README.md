# REST API Build with Node.js and Express 

This represents a basic REST API created using Node.js and Express to handle user data management, utilizing a MongoDB database.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)

## Introduction

This REST API built with Node.js and Express facilitates fundamental CRUD (Create, Read, Update, Delete) actions on user data stored in a MongoDB database. It enables the creation, retrieval, updating, and deletion of user records.

## Prerequisites

Make sure you have the following prerequisites installed, before utilizing this API:

- MongoDB: [Install and set up MongoDB](https://docs.mongodb.com/manual/installation/)
- Node.js: [Download and install Node.js](https://nodejs.org/)

## Installation

 Clone the repository:
   bash
   git clone https://github.com/your-username/your-project.git
   cd your-project
   

 Install dependencies:
 bash
  npm install
 

## Usage
Start the server
  bash
    npm start
  
You are now able to utilize the API for conducting CRUD operations on user data.

## Endpoints
### Insert a person
- URL: /api

- Method: POST

- Request Body: JSON object containing a mandatory 'name' field.

- Example:
  bash
    {
      "name": "Leakey"
    }
  
- Response: JSON object containing the data of the user that was created.
- Example:
  bash
  {
    "_id": "65020388c05103075390d263",
    "name": "Leakey Braxton III",
    "__v": 0
  }
  

### Fetch All Persons from the db
- URL: /api
- Method: GET
- Response: JSON respons array containing all user records

### Retrieve a person by ID
- URL: /api/:id
- Method: GET
- Response: A JSON object containing the person data, or 'person not found' if the person is not located.


### Update a person by ID
- URL: /api/:id

- Method: PUT

- Request Body: A JSON object containing the 'name' field to be updated.

- Example:
  bash
  {
  "name": "Updated Name"
  }
  
- Response: A JSON object containing the updated person's data, or 'Person not found' if the user is not located.

### Delete a Person by ID
- URL: /api/:id
- Method: DELETE
- Response: A JSON object containing the data of the deleted person, or 'Person not found' if the person is not located.


## Contributing
We encourage contributions! If you wish to participate in this project, kindly initiate an issue or send a pull request.
