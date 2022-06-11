<template>
   <div class="row justify-content-center" >
      <div class="col-md-8 mb-5">
         <h3 class="text-center">Event Information</h3>
<!-- form fields are used to show data, but are disabled since we dont want to change them -->
            <p class="text-muted text-center">Please update event information and press submit</p>
            <form @submit.prevent="handleUpdateForm" class="row g-3">
         <!-- Only certain fields that could be edited are available to -->
            <div class="col-md-6">
               <label class="form-label">Event Name</label>
               <input type="text" class="form-control" v-model="event.eventName">
            </div>
            <div class="col-md-6">
               <label class="form-label">Event Date</label>
               <input type="date" class="form-control" v-model="event.eventDate">
            </div>
            <div class="col-md-4">
               <label class="form-label">Address</label>
               <input type="tel" class="form-control" v-model="event.eventAddress">
            </div>
            <div class="col-md-4">
               <label class="form-label">State</label>
               <input type="tel" class="form-control" v-model="event.eventState">
            </div>
            <div class="col-md-4">
               <label class="form-label">ZIP</label>
               <input type="text" class="form-control" v-model="event.eventZip">
            </div>
            <div class="col-md-4">
               <label class="form-label">Event Duration</label>
               <select class="form-control" v-model="event.timeSpent" required >
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
            <div class="col-md-4">
               <label class="form-label">Event Description</label>
               <input type="text" class="form-control" v-model="event.eventDescription" required >
            </div>
            <div class="col-md-4">
                <label class="form-label">Organization</label>
                <select class="form-control" v-model="event.organization">
                    <option disabled value="">Select Organization to Add</option>
                    <option v-for="organization in orgs" :key="organization._id" > {{organization.organizationName}} </option>
                    </select>
                </div>
            <div class="text-center">
                    <button onclick="alert('Event Information Succesfully Updated')" 
                    class="btn btn-primary mt-3">Submit Updated Event Information</button>
                </div>
         </form>
         <br>
         <div class="text-center">
                    <button @click.prevent="deleteEvent" class="btn btn-sm btn-danger fw-bold">Delete Event</button>
              </div>
      </div>
   </div>
</template>

<script>
// import the axios module so that we can used the axios methods
    import axios from "axios";

    export default {
        data() { // data to be stored
            return {
                event: {},
                orgs: [] //stores thedata into an array 
            }
        },
        // create hook is used to call the axios method that will get data from the endpoint, storing the info to the current vue instance
        created() {
            let apiURL = `http://localhost:8000/event-find/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.event = res.data;
            }).catch(error => {
                console.log(error)
            });
            let apiURL2 = `http://localhost:8000/organizations`;
            axios.get(apiURL2).then(res => {
                this.orgs = res.data;
            }).catch(error => {
                console.log(error)
                });
        },
        methods: {
        // when update form button is click, this function gets called which updates the data using the endpoint below.
        handleUpdateForm() {
            let apiURL = `http://localhost:8000/event-update/${this.$route.params.id}`;
            axios.put(apiURL, this.event).then(() => {
            window.location.reload()
            }).catch(error => {
                console.log(error)
            });
        },
    deleteEvent() {
      // Store the API enpoint.
      let deleteURL = `http://localhost:8000/event-delete/${this.$route.params.id}`;
        // PUT(UPDATE): delete event activity record.
        if (window.confirm("Confirm you want to delete this event")) {
        axios.delete(deleteURL).then(() => {
        this.$router.push('/eventList')
        }).catch((error) => {
          console.log(error);
        });
        }
      }
    }
  };  
</script>