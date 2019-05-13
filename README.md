## Traffic Counter API
Live Version: https://ledgerium-traffic-counter.herokuapp.com/

### Description
As described on the [specifications](./Specifications.md), the main objective of this project is to create a REST API that handles the data recorded by an automated traffic counter. The data will be originally stored in a .txt file. The program will read this file, extract the information required and perform a series of calculations. 

As required in the specifications, this project will consist of two REST APIs. The first one will output the result of the previous calculations in separate endpoints, and the second one will output all the results in one endpoint. 

### Assumptions 
1. We can assume clean input as the data is machine-generated. 
2. The data is recorded in chronological order. 
3. In case of a missing entry we are not going to consider it as part of a consecutive 1.5 hour period, as it is impossible to assure that the reading for that half and hour was 0.

### Dependencies
* NodeJS = v8.10.0
* NPM = v6.8.0

## How to use
### Installation
`npm install`

### Quick start
`npm start` to start express server, with /index.js as an entry point.  

## Development
If you would like to contribute to this project the following section will be useful.

### Quick start
`npm run dev` starts express server with nodemon, tracking files and restarting the server if there is any changes.  

### Testing JS
During the development process Test Driven Development (TDD) techniques were implemented as much as possible.Tests were written before functionalities, and used as a base to develop and refactor core components.

* Test Framework: Mocha v6.1.4
* Assertion Library: Chai v4.2.0
* Test Coverage: Istanbul (nyc v14.1.1)

To run tests:
`npm test`

If you are going to modify or add functionalities to this project remember to run `npm test` to double check tests are being passed and the test coverage reports. 

### JSON Style Guide
For this project the [Google JSON Style Guide](https://google.github.io/styleguide/jsoncstyleguide.xml) 
was used as reference. 

Under this style guide a success response returns a data object, eg. 
```JSON 
{
  "data": {
    "id": 7035,
    "name": "Ford"
  }
}
```

On the other hand, an Error response only returns an error object, eg.
```JSON 
{
  "error": {
    "code": 403,
    "message": "Forbidden"
  }
}
```

This style guide also recommends the following when naming JSON properties:
1. Property names must be camelCased, ASCII strings.
2. The first character must be a letter, an underscore (_) or a dollar sign ($).