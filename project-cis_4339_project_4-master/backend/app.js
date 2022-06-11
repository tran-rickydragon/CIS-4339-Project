//import packages needed
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require ("dotenv").config();
const cors = require('cors');
//creation of app using express
app.use(cors());
app.use(express.json());

//Import schema from models
let clientModel = require('./models/Client'); 
//Import schema for events
let eventModel = require('./models/Event'); 
//Import schema for workers
let workerModel = require('./models/Worker'); 
//Import schema for organizations
let organizationModel = require('./models/Organization'); 


//Setting up mongoose connection to DB
mongoose.connect(process.env.MONGO_URL)  
.then(() => {
console.log("Database connection Success!");
 })
.catch((err) => {
 console.error("Mongo Connection Error", err);
});
//Declared port number
const port = process.env.port || 8000;
app.listen(port, ()=>{
    console.log('app listening on port 8000')
});
//error catcher
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) 
        err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});


//Essential CRUD Routes

//////////////Routes for read///////////////

//route for viewing client records
app.get('/clients', (req, res, next) => {
    clientModel.find((error, data) => {
        if (error) {
            return next(error)
        } 
        else {
            res.json(data)
        }
    })
});

//This route will allow you to view events
app.get('/events', (req, res, next) => {
    eventModel.find((error, data) => {
        if (error) {
            return next(error)
        } 
        else {
            res.json(data)
        }
    })
});

//route for viewing worker
app.get('/workers', (req, res, next) => {
    workerModel.find((error, data) => {
        if (error) {
            return next(error)
        }
        else {
            res.json(data)
        }
    })
});

//route for viewing organization
app.get('/organizations', (req, res, next) => {
    organizationModel.find((error, data) => {
        if (error) {
            return next(error)
        }
        else {
            res.json(data)
        }
    })
});



//////////////Routes for post//////////////

//route for posting new client record
app.post('/create-client', (req, res, next) => {
    clientModel.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.send('Client added to the database');
        }
      })
  });



//This route will allow you to POST a new event
app.post('/create-event', (req, res, next) => {
    eventModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);}
        else {
            res.send('Event added to database');

        }

    })
});

//route for posting new worker
app.post('/create-worker', (req, res, next) => {
    workerModel.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.send('Worker added to the database');
        }
      })
  });

//route for posting new organization record
app.post('/create-org', (req, res, next) => {
    organizationModel.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.send('Organization added to the database');
        }
      })
  });
//////////////Routes for update///////////////

//PUT: Route to update client
app.put('/client-update/:_id', (req, res, next) => {//ID here is given in the address
    clientModel.findByIdAndUpdate(req.params._id, {$set: req.body}, (error, data) => {
        if (error) {
            return next(error);
        } else {
          res.json(data)
          console.log('Client update successful!')
        }
      })
  });


//This route will allow you to PUT in an event update
app.put('/event-update/:_id', (req, res, next) => {//ID here is given in the address
    eventModel.findByIdAndUpdate(req.params._id, {$set: req.body}, (error, data) => {
        if (error) {
            return next(error);
        } else {
          res.json(data)
          console.log('Event updated')
        }
      });
  });

//This route will allow you to PUT in a worker update
app.put('/worker-update/:_id', (req, res, next) => {//ID here is given in the address
    workerModel.findByIdAndUpdate(req.params._id, {$set: req.body}, (error, data) => {
        if (error) {
            return next(error);
        } else {
          res.json(data)
          console.log('Worker updated')
        }
      });
  });

//This route will allow you to PUT in an organization update
app.put('/organization-update/:_id', (req, res, next) => {//ID here is given in the address
    organizationModel.findByIdAndUpdate(req.params._id, {$set: req.body}, (error, data) => {
        if (error) {
            return next(error);
        } else {
          res.json(data)
          console.log('Organization updated')
        }
      });
  });

//////////////Routes for DELETE//////////////////

//Route to DELETE client
app.delete('/client-delete/:_id', (req,res, next) => {
    clientModel.findByIdAndRemove(req.params._id, (error, data) => {
        if(error){  
            return next(error);
        }
        else if(data === null){
            res.status(404).send('No record found')
        }
        else {
            res.status(200).json({msg: data});
              console.log('Client delete successful!')
        }
    });
});

//This route will allow you to DELETE a worker
app.delete('/worker-delete/:_id', (req, res, next) => {//ID here is given in the address
    workerModel.findByIdAndRemove(req.params._id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({msg: data});
        }
      });
  });

// This route will allow you to DELETE an event by ID
  app.delete('/event-delete/:_id', (req, res, next) => {//ID here is given in the address
    eventModel.findByIdAndRemove(req.params._id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({msg: data});
        }
      })
  });

//Route to DELETE organization
  app.delete('/organization-delete/:_id', (req,res, next) => {
    organizationModel.findByIdAndRemove(req.params._id, (error, data) => {
        if(error){  
            return next(error);
        }
        else if(data === null){
            res.status(404).send('No record found')
        }
        else {
            res.status(200).json({msg: data});
              console.log('Organization delete successful!')
        }
    });
});


//////////////Aggregate Functions and Use cases//////////////

//READ: Endpoint to retreieve client record from ID
app.get('/client-find/:id', (req, res, next) => {
    clientModel.findOne({_id: req.params.id}, (error, data)=> {
       if(error){
           return next(error);
       } 
       else if (data === null){
           res.status(404).send('Client ID not found')
       }
       else{
           res.json(data);
       }
    });
});

//READ: Endpoint to retreieve employee record from ID
app.get('/worker-find/:id', (req, res, next) => {
    workerModel.findOne({_id: req.params.id}, (error, data)=> {
       if(error){
           return next(error);
       } 
       else if (data === null){
           res.status(404).send('Worker ID not found')
       }
       else{
           res.json(data);
       }
    });
});

//READ: Endpoint to retreieve event record from ID
app.get('/event-find/:id', (req, res, next) => {
    eventModel.findOne({_id: req.params.id}, (error, data)=> {
       if(error){
           return next(error);
       } 
       else if (data === null){
           res.status(404).send('Event ID not found')
       }
       else{
           res.json(data);
       }
    });
});

//READ: Endpoint to retreieve org record from ID
app.get('/organization-find/:id', (req, res, next) => {
    organizationModel.findOne({_id: req.params.id}, (error, data)=> {
       if(error){
           return next(error);
       } 
       else if (data === null){
           res.status(404).send('Organization ID not found')
       }
       else{
           res.json(data);
       }
    });
});

//READ: Endpoint to retreieve org record from ID
app.get('/organization-find-name/:organizationName', (req, res, next) => {
    organizationModel.findOne({organizationName: req.params.organizationName}, (error, data)=> {
       if(error){
           return next(error);
       } 
       else if (data === null){
           res.status(404).send('Organization name not found')
       }
       else{
           res.json(data);
       }
    });
});

//endpoint to view only latest events
app.get('/newEvents', (req, res, next) => {
    eventModel.find((error, data) => {
        if (error) {
            return next(error)
        } 
        else {
            res.json(data)
        }
    }).sort({_id:-1}).limit(3)
});

//Route to retrieve a list of all clients with name and phone number
app.get('/all-clients', (req, res, next) => {

    clientModel.aggregate([{ $sort: { lastName: 1 } },
    {
        $group:
        {
            _id: "$lastName",
            firstName: {$first : "$firstName"},
            phoneNum: {$first : "$phoneNum"}
        }
    }], (error, data) => {
        if (error) {
            return next(error);
        }
        else {
            res.json(data);
        }
    }).sort({ lastName: 1 });
});

////////////// EXTERNAL API //////////////
//endpoint will get data from external API 
const axios = require('axios');
 app.get('/:first_name/:last_name/:phone_number', function(req, res){ //gets first name, last name, and phone number from get
     var FN = req.params.first_name; //turns first_name request into variable named FN
     var LN = req.params.last_name; //turns last_name request into variable named LN
     var PN = req.params.phone_number; //turns phone_number request into variable named PN
     var full = (FN + "/" + LN + "/" + PN) //adds all variables with '/' to be added to URL
     var URL = ('https://cis-4339.herokuapp.com/api/v1/data/' + full) //calls API with added variables/parameters 
     axios.get(URL)
     .then(response=>{
         res.status(200).json(response.data);
     })
     .catch((err) => {
         res.status(500).json({message: err });
     });
    });


//READ: Route to retrieve all events associated with a workerID
app.get('/workerhistory/:id', (req, res, next) => {
eventModel.aggregate([ {$match: {workerID: req.params.id}}, { $sort: { eventID: 1 } },
{
    $group: 
    {
    _id: "$eventID",
    eventName: {$first : "$eventName"},
    eventDate: {$first : "$eventDate"}
    }
}], (error, data) => {
    if (error) {
        return next(error);
    }
    else {
        res.json(data);
    }
    }).sort({ eventID: 1 });
});


        ////PATCH endpoints to update arrays////

//Route to update client with an event
app.patch('/event-to-client/:id', (req, res, next) => {
    //Variables pulled from json body
    let newEvent = req.body.events  
    //update function that uses $push to append the products array using the variables as parameters
    //https://docs.mongodb.com/manual/reference/operator/update/push/#examples
    clientModel.findByIdAndUpdate(req.params.id, {$push: {events: newEvent}}, (error, data) =>{
        if(error){
            return next(error);
        }
        else{
            res.json(data)
            console.log('Event added to Client!')
        }

    });
})

//Route to update event with a client
app.patch('/client-to-event/:id', (req, res, next) => {
    //Variables pulled from json body
    let newClient = req.body.clients
    //update function that uses $push to append the products array using the variables as parameters
    //https://docs.mongodb.com/manual/reference/operator/update/push/#examples
    eventModel.findByIdAndUpdate(req.params.id, {$push: {clients: newClient}}, (error, data) =>{
        if(error){
            return next(error);
        }
        else{
            res.json(data)
            console.log('Client added to event!')
        }

    });
})

//Route to update event with a worker
app.patch('/worker-to-event/:id', (req, res, next) => {
    //Variables pulled from json body
    let newWorker = req.body.workers
    //update function that uses $push to append the products array using the variables as parameters
    //https://docs.mongodb.com/manual/reference/operator/update/push/#examples
    eventModel.findByIdAndUpdate(req.params.id, {$push: {workers: newWorker}}, (error, data) =>{
        if(error){
            return next(error);
        }
        else{
            res.json(data)
            console.log('Worker added to event!')
        }

    });
})

//Route to update org with a worker
app.patch('/worker-to-org/:id', (req, res, next) => {
    //Variables pulled from json body
    let newWorker = req.body.workers
    //update function that uses $push to append the products array using the variables as parameters
    //https://docs.mongodb.com/manual/reference/operator/update/push/#examples
    organizationModel.findByIdAndUpdate(req.params.id, {$push: {workers: newWorker}}, (error, data) =>{
        if(error){
            return next(error);
        }
        else{
            res.json(data)
            console.log('Worker added to organization!')
        }

    });
})

//Route to update org with a client
app.patch('/client-to-org/:id', (req, res, next) => {
    //Variables pulled from json body
    let newClient = req.body.clients
    //update function that uses $push to append the products array using the variables as parameters
    //https://docs.mongodb.com/manual/reference/operator/update/push/#examples
    organizationModel.findByIdAndUpdate(req.params.id, {$push: {clients: newClient}}, (error, data) =>{
        if(error){
            return next(error);
        }
        else{
            res.json(data)
            console.log('Client added to organization!')
        }

    });
})

//Route to update org with an event
app.patch('/event-to-org/:id', (req, res, next) => {
    //Variables pulled from json body
    let newEvent = req.body.events
    //update function that uses $push to append the products array using the variables as parameters
    //https://docs.mongodb.com/manual/reference/operator/update/push/#examples
    organizationModel.findByIdAndUpdate(req.params.id, {$push: {events: newEvent}}, (error, data) =>{
        if(error){
            return next(error);
        }
        else{
            res.json(data)
            console.log('Event added to organization!')
        }

    });
})

        
//Route to delete an event from a client 
app.patch('/event-from-client/:id/:events', (req, res, next) => {
    //Variables pulled from json body
    let newEvent = req.params.events  
    //update function that uses $push to append the products array using the variables as parameters
    //https://docs.mongodb.com/manual/reference/operator/update/push/#examples
    clientModel.findByIdAndUpdate(req.params.id, {$pull: {events: newEvent}}, (error, data) =>{
        if(error){
            return next(error);
        }
        else{
            res.json(data)
            console.log('Event deleted from Client!')
        }

    });
})

//Route to delete a worker from an event
app.patch('/worker-from-event/:id/:workers', (req, res, next) => {
    //Variables pulled from json body
    let newWorker = req.params.workers  
    //update function that uses $push to append the products array using the variables as parameters
    //https://docs.mongodb.com/manual/reference/operator/update/push/#examples
    eventModel.findByIdAndUpdate(req.params.id, {$pull: {workers: newWorker}}, (error, data) =>{
        if(error){
            return next(error);
        }
        else{
            res.json(data)
            console.log('Worker deleted from Event!')
        }

    });
})

        ////Summary Endpoints////

//Endpoint to view all events in a client record
app.get('/client-events-summary/:id', (req, res, next) => {

    clientModel.aggregate([
        {$match : { _id: req.params.id}},
        {$lookup : {from : 'event',localField : 'events',foreignField : '_id', as : 'client-events-summary'}},
        {$unwind: '$client-events-summary'},
        {$group: {_id: {
            eventName: '$client-events-summary.eventName', 
            eventDate: '$client-events-summary.eventDate', 
            eventAddress: '$client-events-summary.eventAddress',
            eventState: '$client-events-summary.eventState',
            eventZip: '$client-events-summary.eventZip',
            organization: '$client-events-summary.organization', 
            eventID: '$client-events-summary._id',
            }}},
    ], (error, data) => {
        if (error) {
          return next(error)
        } else {
            res.json(data);
    }
    })
});

//Enpoint to view all records in the worker array of an event document
app.get('/event-workers-summary/:id', (req, res, next) => {

    eventModel.aggregate([
        {$match : { _id: req.params.id}},
        {$lookup : {from : 'worker',localField : 'workers',foreignField : '_id', as : 'event-workers-summary'}},
        {$unwind: '$event-workers-summary'},
        {$group: {_id: {
            firstName: '$event-workers-summary.firstName', 
            lastName: '$event-workers-summary.lastName', 
            phoneNumber: '$event-workers-summary.phoneNumber',
            workerID:  '$event-workers-summary._id',
            }}},
    ], (error, data) => {
        if (error) {
          return next(error)
        } else {
            res.json(data);
    }
    })
});

//endpoint to pull all clients linked to an event
app.get('/event-clients-summary/:_id', (req, res, next) => {
    eventModel.aggregate([
        {$match : { _id: req.params._id}},
        {$lookup : {from : 'client',localField : '_id',foreignField : 'events', as : 'event-clients-summary'}},
        {$unwind: '$event-clients-summary'},
        {$group: {_id : {
        firstName : '$event-clients-summary.firstName', 
        lastName : '$event-clients-summary.lastName', 
        phoneNum : '$event-clients-summary.phoneNum',
        clientID: '$event-clients-summary._id',
    }}},
    ], 
    (error, data) => {
        if (error) {
          return next(error)
        } 
        else {
            res.json(data);
        }
    })
});

//Endpoint to pull all clients linked to an org
app.get('/org-clients-summary/:organizationName', (req, res, next) => {
    organizationModel.aggregate([
        {$match : { organizationName: req.params.organizationName}},
        {$lookup : {from : 'client',localField : 'organizationName',foreignField : 'organization', as : 'org-clients-summary'}},
        {$unwind: '$org-clients-summary'},
        {$group: {_id : {
        firstName : '$org-clients-summary.firstName', 
        lastName : '$org-clients-summary.lastName', 
        phoneNum : '$org-clients-summary.phoneNum',
    }}},
    ], 
    (error, data) => {
        if (error) {
          return next(error)
        } 
        else {
            res.json(data);
        }
    })
});

//Endpoint to pull all workers linked to an org
app.get('/org-workers-summary/:organizationName', (req, res, next) => {
    organizationModel.aggregate([
        {$match : { organizationName: req.params.organizationName}},
        {$lookup : {from : 'worker',localField : 'organizationName',foreignField : 'organization', as : 'org-workers-summary'}},
        {$unwind: '$org-workers-summary'},
        {$group: {_id : {
        firstName : '$org-workers-summary.firstName', 
        lastName : '$org-workers-summary.lastName', 
        phoneNumber : '$org-workers-summary.phoneNumber',
    }}},
    ], 
    (error, data) => {
        if (error) {
          return next(error)
        } 
        else {
            res.json(data);
        }
    })
});


//Endpoint to pull all events linked to an org
app.get('/org-events-summary/:organizationName', (req, res, next) => {
    organizationModel.aggregate([
        {$match : { organizationName: req.params.organizationName}},
        {$lookup : {from : 'event',localField : 'organizationName',foreignField : 'organization', as : 'org-events-summary'}},
        {$unwind: '$org-events-summary'},
        {$group: {_id : {
        eventName: '$org-events-summary.eventName', 
        eventDate: '$org-events-summary.eventDate',
        eventDuration: '$org-events-summary.timeSpent', 
        eventDescription: '$org-events-summary.eventDescription',
    }}},
    ], 
    (error, data) => {
        if (error) {
          return next(error)
        } 
        else {
            res.json(data);
        }
    })
});
