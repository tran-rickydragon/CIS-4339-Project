<template>
   <div class="row justify-content-center" >
      <div class="col-md-8 mb-5">
         <h3 class="text-center">New Event Creation</h3>
<!-- form fields are used to show data, but are disabled since we dont want to change them -->
            <p class="text-muted text-center">Please enter event information</p>
            <form @submit.prevent="handleNewEventForm" class="row g-3">
         <!-- the fields in the form are populated using v-model variables as placeholders. then disabled so they can't be changed, since we are only viewing data -->
            <div class="col-md-6">
               <label class="form-label">Event Name</label>
               <input type="text" class="form-control" id="eventName" v-model="event.eventName" required >
            </div>
            <div class="col-md-6">
               <label class="form-label">Event Date</label>
               <input type="date" class="form-control" id="eventDate" v-model="event.eventDate" required >
            </div>
            <div class="col-md-6">
               <label class="form-label">Address</label>
               <input type="text" class="form-control" id="eventAddress" v-model="event.eventAddress" required >
            </div>
            <div class="col-md-6">
               <label class="form-label">State</label>
               <input type="text" class="form-control" id="eventState" v-model="event.eventState" required >
            </div>
            <div class="col-md-6">
               <label class="form-label">ZIP</label>
               <input type="text" class="form-control" id="eventZip" v-model="event.eventZip" required >
            </div>
            <div class="col-md-6">
               <label class="form-label">Event Duration</label>
               <select class="form-control" id="timeSpent" v-model="event.timeSpent"  >
						<option disabled selected> -- select an option -- </option>
						<option value="1">1 Hour</option>
                        <option value="2">2 Hours</option>
                        <option value="3">3 Hours</option>
                        <option value="4">4 Hours</option>
                        <option value="5">5 Hours</option>
                        <option value="6">6 Hours</option>
                        <option value="7">7 Hours</option>
                        <option value="8">8 Hours</option>
                </select>
            </div>
            <div class="col-md-6">
               <label class="form-label">Event Description</label>
               <input type="text" class="form-control" id="eventDescription" v-model="event.eventDescription" required >
            </div>
            <div class="col-md-6">
                <label class="form-label">Organization</label>
                <select class="form-control" id="organization" v-model="event.organization">
                    <option disabled value="">Select Host Organization</option>
                    <option v-for="organization in orgs" :key="organization._id" > {{organization.organizationName}} </option>
                    </select>
            </div>
            <div class="text-center">
                    <button onclick="alert('Event Succesfully Created')" 
                    class="btn btn-primary mt-3">Create new event</button>
                </div>
         </form>

      </div>
   </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                // variables are used for v-if, applicant data model is usd to submit form data. 
                event: {
                   eventName: '',
                   eventDate: '',
                   eventAddress: '',
                   eventState: '',
                   eventZip: '',
                   timeSpent: '',
                   eventDescription: '',
                   organization: ''
                },
                orgs: []

            }
        },
        created() {
            let apiURL = `http://localhost:8000/organizations`;
            axios.get(apiURL).then(res => {
                this.orgs = res.data;
            }).catch(error => {
                console.log(error)
                });
            },
        methods: {
            //uses the applicant data model as request data to send data to the api endpoint.
            handleNewEventForm() {
                let apiURL = `http://localhost:8000/create-event`;
               
                axios.post(apiURL, this.event).then(() => {
                    this.$router.push('/eventList')
                    //after the posting of data, takes you to the applicants route view
                  this.event = {
                   eventName: '',
                   eventDate: '',
                   eventAddress: '',
                   eventState: '',
                   eventZip: '',
                   timeSpent: '',
                   eventDescription: '',
                   organization: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
           
    }

</script>