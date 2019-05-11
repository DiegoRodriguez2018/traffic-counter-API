## Traffic Counter API
### Description
As described on the [specifications](./Specifications.md), the main objective of this project is to create a REST API that handles the data recorded by an automated traffic counter. The data will be originally stored in a .txt file. The program will read this file, extract the information required and perform a series of calculations. 

As required in the specifications, this project will consist of two REST APIs. The first one will output the result of the previous calculations in separate endpoints, and the second one will output all the results in one endpoint. 

### Assumptions 
* We can assume clean input as the data is machine-generated. 
* The data is recorded in chronological order. 

### Dependencies
* NodeJS = v8.10.0
* NPM = v6.8.0

### Installation
`npm install`

### Quick start
`npm start` to start nodemon server. 

### Testing JS
During the development process Test Driven Development (TDD) techniques were implemented as much as possible.Tests were written before functionalities, and used as a base to develop and refactor core components.

* Test Framework: Mocha v6.1.4
* Assertion Library: Chai v4.2.0

To run tests:
`npm test`
