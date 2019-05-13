## Traffic Counter API
Live Version: https://ledgerium-traffic-counter.herokuapp.com/

### Description
As described on the [specifications](./Specifications.md), the main objective of this project is to create a REST API that handles the data recorded by an automated traffic counter.The API controller will retrieve the data from a .txt file, perform a series of calculations and expose the results in the corresponding endpoints. 

### Assumptions 
1. We can assume clean input as the data is machine-generated. 
2. The data is recorded in chronological order. 
3. Missing entries in the record are not going to be considered as part of a  consecutive 1.5 hour period, as is impossible to assure that the car count for that particular entry was 0. 


## User's Guide
### Dependencies
* NodeJS = v8.10.0
* NPM = v6.8.0

### Installation
`npm install`

### Quick start
`npm start` to start express server, with /index.js as an entry point.  

### API Design
The API endpoints structure can be described as follows:
```
/
  /API-1
    /API-1/total-count
    /API-1/count-per-day
    /API-1/top-half-hour-periods
    /API-1/bottom-hour-and-a-half-periods
  /API-2
```
As is shown above, this project consists of two core APIs:

1. **API-1** which returns the results of the calculations in separate endpoints, and 
2. **API-2** which returns **all** the results of the calculations in one endpoint. 

## Endpoints Documentation
#### GET /
Returns APIs property with links to the available APIs.  
```JSON
{
  "data": {
    "APIs": [
      "http://localhost:8080/API-1",
      "http://localhost:8080/API-2"
    ]
  }
}
```

### API-1
#### GET /API-1
Returns endpoints property with links to the available endpoints in API-1.
```JSON
{
  "data": {
    "endpoints": [
      "http://localhost:8080/API-1/total-count",
      "http://localhost:8080/API-1/count-per-day",
      "http://localhost:8080/API-1/top-half-hour-periods",
      "http://localhost:8080/API-1/bottom-hour-and-a-half-periods"
    ]
  }
}
```
#### GET /API-1/total-count
Returns totalCount property, which refers to the total car count found in the input file. 
```JSON
{
  "data": {
    "totalCount": "398"
  }
}
```
#### GET /API-1/count-per-day
Returns countPerDay property, which refers to a sequence of lines where each line contains a date and total car count on that particular day. 
```JSON
{
  "data": {
    "countPerDay": [
      "2016-12-01 179",
      "2016-12-05 81",
      "2016-12-08 134",
      "2016-12-09 4"
    ]
  }
}
```

#### GET /API-1/top-half-hour-periods
Returns topThreeHalfHourPeriods property, which refers to a sequence of lines where each line represents one of the top three half and hour periods on record. In other words, the top three periods with more traffic recorded in the input file.  
```JSON
{
  "data": {
    "topThreeHalfHourPeriods": [
      "2016-12-01T07:30:00 46",
      "2016-12-01T08:00:00 42",
      "2016-12-08T18:00:00 33"
    ]
  }
}
```
#### GET /API-1/bottom-hour-and-a-half-periods
Returns bottomHourAndAHalfPeriods property, which refers to a sequence of lines where each line represents the bottom hour and a half periods on record. In other words, the bottom 1.5 hour periods with less traffic recorded in the input file. 
```JSON
{
  "data": {
    "bottomHourAndAHalfPeriods": [
      "2016-12-01T05:00:00 31"
    ]
  }
}
```

### API-2
#### GET /API-2
Returns all the properties mentioned above, in addition to dataSource and calculatedAt properties.
```JSON
{
  "data": {
    "totalCount": "398",
    "countPerDay": [
      "2016-12-01 179",
      "2016-12-05 81",
      "2016-12-08 134",
      "2016-12-09 4"
    ],
    "topHalfHourPeriods": [
      "2016-12-01T07:30:00 46",
      "2016-12-01T08:00:00 42",
      "2016-12-08T18:00:00 33"
    ],
    "bottomHourAndAHalfPeriods": [
      "2016-12-01T05:00:00 31"
    ],
    "dataSource": "lines.txt",
    "calculatedAt": "2019-05-13T05:57:45.756Z"
  }
}
```

# Developer's Guide
If you would like to contribute to this project the following section will be useful.

### Quick start
`npm run dev` starts express server with nodemon, tracking files and restarting the server if there is any changes.  

### Testing JS
During the development process Test Driven Development (TDD) techniques were implemented as much as possible.Tests were written before functionalities, and used as a base to develop and refactor core components.

* Test Framework: Mocha v6.1.4
* Assertion Library: Chai v4.2.0
* Test Coverage: Istanbul (nyc v14.1.1)

To run tests execute `npm test`.

If you are going to modify or add functionalities to this project remember to double check if the tests are being passed and test coverage reports. 

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

The Google JSON Style Guide also recommends the following when naming convention for JSON properties:
1. Property names must be camelCased, ASCII strings.
2. The first character must be a letter, an underscore (_) or a dollar sign ($).