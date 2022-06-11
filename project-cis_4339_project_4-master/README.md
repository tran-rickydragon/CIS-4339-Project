# Group 4's 4339 project documentation

This repository contains the documentation for Group 4's API.

#### Contents

- [Overview](#1-overview)
- [Setup](#2-setup)
- [Resources](#3-resources)
  - [Events](#31-Events)
  - [Clients](#32-Clients)
  - [Workers](#33-Workers)
  - [Aggregate/Use](#34-Aggregate/Use)

## 1. Overview

CIS 4339 Project, Group 4

Isaiah De La Cruz

Jerry C. Perry III

Ricky Tran

## 2. Setup

### Required software

Mongo Shell (mongosh), MongoDB community edition, node.js, MongoDB Compass,

Postman(for ease of requests)


### Installation instructions
After cloning the repository from the GitHub link, you will need to open a terminal pathed to the backend folder and run npm install to install all necessary dependencies. Next create a “.env” file inside the backend folder and write in your desired mongo_url. Then start the app with node app.js and copy the mongo_url into the connection field of MongoDB Compass. Finally you can begin running requests through Postman.

## 3. Resources


### 3.1. Events

#### 3.1.1 Adding an event
Adds an event

```
POST localhost:8000/create-event
```
Example request:

```
POST localhost:8000/create-event
Content-Type: application/json
Accept: */*
Cache-Control: no-cache
Host: localhost:8000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive

{
      "eventID": "1",
      "eventName": "Test event",
      "eventAddress": "example addy",
      "eventDate": "22 OCT",
      "eventDescription": "this event is a test"
}
```
With the following fields:

| Parameter       | Type         | Required?  | Description                                     |
| -------------   |--------------|------------|-------------------------------------------------|
| eventID         | number       | required   | unique ID for the event                         |
| eventName       | string       | required   | The title of the event                          |
| eventDate       | string       | required   | The date of the event                           |
| eventAddress    | string       | optional   | The street of the event                         |
| eventState      | string       | optional   | Two character state abbreviation                |
| eventZIP        | number       | optional   | ZIP code of the event address                   |
| timeSpent       | number       | optional   | Optional field for time spent ex: 1 on 1 services  |
| workerID        | string       | optional   | Identifier for the worker                       |
| eventDescription| string       | required   | Details about what the event is                 |
| clients         | string array | optional   | Clients associated with the event               |

#### 3.1.2 View all Events

This endpoint retrieves a list of all events.

``` 
GET localhost:8000/events 
```
Example response:
```
[
    {
        "_id": "e6dce5c0-9a8f-11ec-a65d-65c8d0f73f01",
        "eventID": 1,
        "eventName": "Test event",
        "eventDate": "22 OCT",
        "eventAddress": "example addy",
        "eventDescription": "Medium’s Developer resources",
        "__v": 0
    },
    {
        "_id": "35aed700-9a98-11ec-a65d-65c8d0f73f01",
        "eventID": 2,
        "eventName": "Test event 2",
        "eventDate": "21 OCT",
        "eventAddress": "example addy 2",
        "eventDescription": "this event is a test 2",
        "__v": 0
    },
    {
        "_id": "3f2182b0-9a98-11ec-a65d-65c8d0f73f01",
        "eventID": 3,
        "eventName": "Test event3",
        "eventDate": "20 OCT",
        "eventAddress": "example addy 3",
        "eventDescription": "this event is a test 3",
        "__v": 0
    }
]
```

#### 3.1.3 Update an Event

This endpoint will update an event, given an event ID

```
PUT localhost:8000/event-update/{{:_id}}
```

#### 3.1.4 Delete an Event
This endpoint will delete an event, given an event ID

```
PUT localhost:8000/event-delete/{{:_id}}
```

### 3.2. Clients

#### 3.2.1 Add a Client

Example request:

```
POST localhost:8000/create-client
Content-Type: application/json
Accept: */*
Cache-Control: no-cache
Host: localhost:8000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive

{
    "clientID": "100",
    "firstName": "Testing events",
    "lastName": "Delacruz",
    "phoneNum": "123-456-7890",
    "workNum": "123-456-7890",
    "birthday": "08-25-1997",
    "SSN": "456-52-2165",
    "driverLiscense": "54446765",
    "language": "English",
    "ethnicity": "Hispanic",
    "gender": "Apache Helicopter",
    "educationLevel": "dumb",
    "employmentStatus": "sad waiter",
    "marriageStatus": "die alone",
    "livingArrangement": "barely",
    "address": "1234 ilivehere ct.",
    "city": "Houston",
    "state": "Texas",
    "zipcode": "77025",
    "subsidized": "true",
    "singleParent": "false",
    "headOfHousehold": "true",
    "monthlyIncome": "2354681",
    "SSI": "0",
    "socialSecurity": "6654",
    "TANF": "546345",
    "foodStamps": "true",
    "events": "1, 2, 3"
}
```

With the following fields:

| Parameter       | Type         | Required?  | Description                                     |
| -------------   |--------------|------------|-------------------------------------------------|
| clientID        | string       | required   | ID for the client                               |
| firstName       | string       | required   | clients FIRST name                              |
| lastName        | string       | required   | clients LAST name                               |
| phoneNum        | string       | required   | phone number of the client                      |
| workNum         | string       | optional   | WORK phone number of the client                 |
| birthday        | string       | required   | birthday of the client                          |
| SSN             | string       | required   | social security number                          |
| driverLicense   | number       | optional   | drivers license number                          |
| language        | string       | required   | language the client speaks                      |
| ethnicity       | string       | required   | client ethnicity                                |
| gender          | string       | required   | client gender                                   |
| educationLevel  | string       | required   | client education level                          |
| employmentStatus| string       | required   | client employment status                        |
| marriageStatus  | string       | required   | client marital status                           |
| livingArrangement|string       | required   | type of living arrangement                      |
| address         | string       | required   | client street address                           |
| city            | string       | required   | client city                                     |
| state           | string       | required   | client state                                    |
| zipcode         | string       | required   | client ZIP                                      |
| subsidized      | bool         | required   | subsidized?                                     |
| singleParent    | bool         | required   | is the client a single parent?                  |
| headOfHousehold | bool         | required   | is the client the head of household?            |
| monthlyIncome   | number       | required   | client monthly income                           |
| SSI             | number       | required   | client Supplemental Security Income             |                
| socialSecurity  | number       | required   | client social security income                   |
| TANF            | number       | required   | client TANF                                     |
| foodStamps      | bool         | required   | is the client on food stamps?                   |
| events          | string array | optional   | events associated with the client               | 


#### 3.2.2 View all Clients
This endpoint retrieves a list of all events.

``` 
GET localhost:8000/clients 
```

Example response:
```
[
    {
        "_id": "15a45140-9aae-11ec-8029-01d8bb3ba893",
        "clientID": "100",
        "firstName": "Testing events",
        "lastName": "Delacruz",
        "phoneNum": "123-456-7890",
        "workNum": "123-456-7890",
        "birthday": "08-25-1997",
        "SSN": "456-52-2165",
        "language": "English",
        "ethnicity": "Hispanic",
        "gender": "Apache Helicopter",
        "educationLevel": "dumb",
        "employmentStatus": "sad waiter",
        "marriageStatus": "die alone",
        "livingArrangement": "barely",
        "address": "1234 ilivehere ct.",
        "city": "Houston",
        "state": "Texas",
        "zipcode": "77025",
        "subsidized": true,
        "singleParent": false,
        "headOfHousehold": true,
        "monthlyIncome": 2354681,
        "SSI": 0,
        "socialSecurity": 6654,
        "TANF": 546345,
        "foodStamps": true,
        "events": [
            "1, 2, 3"
        ],
        "__v": 0
    }
]
```

#### 3.2.3 Update a Client
This endpoint will update a client, given an id from an existing client into the request 
and edit the field you wish to change.

Example Request:

```
PUT localhost:8000/client-update/{{:_id}}

```
```
[
    {
    "_id": "79711c20-9aa5-11ec-bd7f-29df0b7398eb",
    "clientID": "1",
    "firstName": "Isaiah",
    "lastName": "Delacruz",
    "phoneNum": "123-456-7890",
    "workNum": "123-456-7890",
    "birthday": "08-25-1997",
    "SSN": "456-52-2165",
    "language": "English",
    "ethnicity": "Hispanic",
    "gender": "Male",
    "educationLevel": "some college",
    "employmentStatus": "Student",
    "marriageStatus": "Single",
    "livingArrangement": "Leasing House",
    "address": "1234 ilivehere ct.",
    "city": "Houston",
    "state": "Texas",
    "zipcode": "77025",
    "subsidized": true,
    "singleParent": false,
    "headOfHousehold": true,
    "monthlyIncome": 2354681,
    "SSI": 0,
    "socialSecurity": 6654,
    "TANF": 546345,
    "foodStamps": true,
    "events": [ "3a0e4410-9a99-11ec-a1fd-db1060cc3b1f",
       21,
        "Food Drive",
        "08-25-2022",
        "Texas",
        null,
        "79",
        "Food drive for hungry"
       ],
    "__v": 0
    }
]
```


#### 3.2.4 Delete a Client
This endpoint will delete a client, given an ID

```
PUT localhost:8000/client-delete/{{:_id}}
```

### 3.3. Workers

#### 3.3.1 Add a Worker

Example request:

```
POST localhost:8000/create-worker
Content-Type: application/json
Accept: */*
Cache-Control: no-cache
Host: localhost:8000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive

{
  "workerID": "1",
  "firstName": "Jerry",
  "lastName": "Perry",
  "phoneNumber": "213-455-5631"
}
```

With the following fields:

| Parameter       | Type         | Required?  | Description                                     |
| -------------   |--------------|------------|-------------------------------------------------|
| workerID        | number       | required   | ID of the worker                                |
| firstName       | string       | required   | FIRST name of the worker                        |
| lastName        | string       | required   | LAST name of the worker                         |
| phoneNumber     | string       | required   | phone number of the worker                      |

#### 3.3.2 View all Workers
This endpoint retrieves a list of all workers.

``` 
GET localhost:8000/workers
```

Example response:
```
[
    {
        "_id": "1fc4e8d0-9ab1-11ec-8029-01d8bb3ba893",
        "workerID": 1,
        "firstName": "Jerry",
        "lastName": "Perry",
        "phoneNumber": "213-455-5631",
        "__v": 0
    }
]
```

#### 3.3.3 Update a Worker
This endpoint will update a client, given an ID

```
PUT localhost:8000/worker-update/{{:_id}}
```
Example request:

```
PUT localhost:8000/worker-update/{{:_id}}
Content-Type: application/json
Accept: */*
Cache-Control: no-cache
Host: localhost:8000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive

{
  "workerID": "1",
  "firstName": "Jerri",
  "lastName": "Perri",
  "phoneNumber": "212-455-5631"
}
```

#### 3.3.4 Delete a Worker
This endpoint will delete a client, given an ID

```
PUT localhost:8000/worker-delete/{{:_id}}
```

### 3.4. Aggregate/Use
Aggregate Functions and Use cases

#### 3.4.1 Add Event to Client 
In order to add an event to a client's event array there are a series of steps:

1.Request a GET for the client you wish to update
```
GET localhost:8000/client-find/{{:_id}}
```
Example Response:
```

{
    "_id": "79711c20-9aa5-11ec-bd7f-29df0b7398eb",
    "clientID": "1",
    "firstName": "Isaiah",
    "lastName": "Delacruz",
    "phoneNum": "123-456-7890",
    "workNum": "123-456-7890",
    "birthday": "08-25-1997",
    "SSN": "456-52-2165",
    "language": "English",
    "ethnicity": "Hispanic",
    "gender": "Male",
    "educationLevel": "some college",
    "employmentStatus": "Student",
    "marriageStatus": "Single",
    "livingArrangement": "Leasing House",
    "address": "1234 ilivehere ct.",
    "city": "Houston",
    "state": "Texas",
    "zipcode": "77025",
    "subsidized": true,
    "singleParent": false,
    "headOfHousehold": true,
    "monthlyIncome": 2354681,
    "SSI": 0,
    "socialSecurity": 6654,
    "TANF": 546345,
    "foodStamps": true,
    "events": [],
    "__v": 0
}

```
2. Request a GET for the event you wish to add to the client's event array
```
GET localhost:8000/events
```
Example Response:
```
 
{
     "_id": "97049720-9a7e-11ec-9c29-936afa73122d",
    "eventID": 21,
    "eventName": "Food Drive",
    "eventDate": "01-21-22",
    "eventAddress": "123 test ave.",
    "eventState": "Tx",
    "timeSpent": 2,
    "workerID": "21",
    "eventDescription": "Food drive for hungry",
    "clients": [],
     "__v": 0
 }

```
3. Request a PUT with the body text of the client from step 1 and access the array
```
PUT localhost:8000/client-update/{{:_id}}
```
4. Copy and Paste event body from step 2 into the event array
Example Body:
```
 {
    "_id": "79711c20-9aa5-11ec-bd7f-29df0b7398eb",
    "clientID": "1",
    "firstName": "Isaiah",
    "lastName": "Delacruz",
    "phoneNum": "123-456-7890",
    "workNum": "123-456-7890",
    "birthday": "08-25-1997",
    "SSN": "456-52-2165",
    "language": "English",
    "ethnicity": "Hispanic",
    "gender": "Male",
    "educationLevel": "some college",
    "employmentStatus": "Student",
    "marriageStatus": "Single",
    "livingArrangement": "Leasing House",
    "address": "1234 ilivehere ct.",
    "city": "Houston",
    "state": "Texas",
    "zipcode": "77025",
    "subsidized": true,
    "singleParent": false,
    "headOfHousehold": true,
    "monthlyIncome": 2354681,
    "SSI": 0,
    "socialSecurity": 6654,
    "TANF": 546345,
    "foodStamps": true,
    "events": [    {
        "_id": "97049720-9a7e-11ec-9c29-936afa73122d",
        "eventID": 21,
        "eventName": "Food Drive",
        "eventDate": "01-21-22",
        "eventAddress": "123 test ave.",
        "eventState": "Tx",
        "timeSpent": 2,
        "workerID": "21",
        "eventDescription": "Food drive for hungry",
        "clients": [],
        "__v": 0
    }],
    "__v": 0
    }
``` 
5. Delete the field names and client array from the body leaving only necessary data 

Example Body:
```
 {
    "_id": "79711c20-9aa5-11ec-bd7f-29df0b7398eb",
    "clientID": "1",
    "firstName": "Isaiah",
    "lastName": "Delacruz",
    "phoneNum": "123-456-7890",
    "workNum": "123-456-7890",
    "birthday": "08-25-1997",
    "SSN": "456-52-2165",
    "language": "English",
    "ethnicity": "Hispanic",
    "gender": "Male",
    "educationLevel": "some college",
    "employmentStatus": "Student",
    "marriageStatus": "Single",
    "livingArrangement": "Leasing House",
    "address": "1234 ilivehere ct.",
    "city": "Houston",
    "state": "Texas",
    "zipcode": "77025",
    "subsidized": true,
    "singleParent": false,
    "headOfHousehold": true,
    "monthlyIncome": 2354681,
    "SSI": 0,
    "socialSecurity": 6654,
    "TANF": 546345,
    "foodStamps": true,
    "events": [{
        "3a0e4410-9a99-11ec-a1fd-db1060cc3b1f",
        21,
        "Food Drive",
        "08-25-2022",
        "Texas",
        null,
        "79",
        "Food drive for hungry"

    }],
    "__v": 0
    }
```
6. Send update






#### 3.4.2 Retrieve single client by ID
This endpoint will retrieve a client record with a client ID
```
GET localhost:8000/client-find/:id
```
Example Request:

```
GET http://localhost:8000/client-find/1
Content-Type: application/json
Accept: */*
Cache-Control: no-cache
Host: localhost:8000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive


{
    "events": [],
    "_id": "8d074330-9a74-11ec-a155-0ff97ee0e819",
    "clientID": "1",
    "firstName": "Isaiah",
    "lastName": "Delacruz",
    "phoneNum": "123-456-7890",
    "workNum": "123-456-7890",
    "birthday": "08-25-1997",
    "SSN": "456-52-2165",
    "language": "English",
    "ethnicity": "Hispanic",
    "gender": "Male",
    "educationLevel": "some college",
    "employmentStatus": "Student",
    "marriageStatus": "Single",
    "livingArrangement": "Leasing Home",
    "address": "1234 ilivehere ct.",
    "city": "Houston",
    "state": "Texas",
    "zipcode": "77025",
    "subsidized": false,
    "singleParent": true,
    "headOfHousehold": true,
    "monthlyIncome": 2000,
    "SSI": 0,
    "socialSecurity": 200,
    "TANF": 500,
    "foodStamps": false,
    "__v": 0
}
```

### 3.4.3 GET all the clients sorted by last name
This endpoint will get all the clients and sort them by last name
```
GET localhost:8000/all-clients
```
Example Request:

```
GET http://localhost:8000/all-clients
Content-Type: application/json
Accept: */*
Cache-Control: no-cache
Host: localhost:8000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive

[
    {
        "_id": "Allen",
        "firstName": "Barry",
        "phoneNum": "123-456-7890"
    },
    {
        "_id": "Delacruz",
        "firstName": "Isaiah",
        "phoneNum": "123-456-7890"
    },
    {
        "_id": "Wayne",
        "firstName": "Bruce",
        "phoneNum": "123-456-7890"
    }
]
```

### 3.4.4 GET all events by worker ID
This endpoint will get all the events associated with a workerID

```
GET localhost:8000/workerhistory/:id
```

Example Response:
```
[
    {
        "_id": 54,
        "eventName": "Food Drive",
        "eventDate": "01-21-22"
    },
    {
        "_id": 21,
        "eventName": "Food Drive",
        "eventDate": "01-21-22"
    }
]
```

```
GET http://localhost:8000/workerhistory/:id
Content-Type: application/json
Accept: */*
Cache-Control: no-cache
Host: localhost:8000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
```

### 3.4.5 External API endpoint
This endpoint will get the data with parameters first name, last name, and phone number. 

Data comes from the external API: https://cis-4339.herokuapp.com/api/v1/data/
```
GET localhost:8000/:first_name/:last_name/:phone_number
```
Example Request:

```
GET localhost:8000/Richard/Stewart/281-0394-41
```
Content-Type: application/json
Accept: */*
Cache-Control: no-cache
Host: localhost:8000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive

```
{
    "data": [
        {
            "first_name": "Richard",
            "last_name": "Stewart",
            "phone_number": "281-0394-41",
            "mental_health_referral": true,
            "date_last_mental_health_referal": "03/23/2018T00:00:00.0000Z",
            "legal_councel_referal": false,
            "CHW_id": 9241074
        }
    ]
}
```
