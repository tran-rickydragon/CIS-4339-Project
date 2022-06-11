<template> 
<!-- start the template that will contain the page content -->
    <div class="row mb-5 pb-5 ">
        <h3 class="text-center">List of Events</h3>
        <h5 class="text-muted text-center">Below is a list of all events linked to {{client.firstName}} {{client.lastName}}</h5>
        <div class="col-md-12">
           <form @submit.prevent="handleEvent"> 
            <div class="text-center" >
                <select class="text-center" v-model="clientEvents.events">
                    <option disabled value="">Select Event to Add</option>
                    <option v-for="event in eventsfull" :value="event._id" :key="event._id" > {{event.eventName +' on '+ event.eventDate}}</option>
                </select>
            </div>
            <div class="text-center">
                <button type="submit" onclick="alert('Event Added!')" class="btn btn-primary mt-3">Add New Event</button>
                </div>
           </form>
           <br>
            <table class="table table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th>Event Name</th>
                        <th>Event Date</th>
                        <th>Adress</th>
                        <th>State</th>
                        <th>ZIP Code</th>
                        <th>Organization</th>
                    </tr>
                </thead>
                <tbody> 
                    <!-- loops through the array of events and parse through the data using the key _id, curly brackets render the data into the dom -->
                    <tr v-for="event in events" :key="event._id">
                        <td>{{ event._id.eventName }}</td>
                        <td>{{ event._id.eventDate }}</td>
                        <td>{{ event._id.eventAddress }}</td>
                        <td>{{ event._id.eventState }}</td>       
                        <td>{{ event._id.eventZip }}</td>  
                        <td>{{ event._id.organization }}</td>
                        <td><a class="btn btn-danger is-small " @click.prevent="removeEvent(event._id.eventID)">Delete</a></td>       
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>



<script>
// import the axios module so that we can used the axios methods
    import axios from "axios";

    export default {
        data() { // data to be stored
            return {
                events: [], //stores the event data into an array 
                client: [],
                eventsfull: [],
                clientEvents:{
                    events: ''
                }
            }
        },
        // create hook is used to call the axios method that will get data from the endpoint, storing the info to the current vue instance
        created() {
            let apiURL = `http://localhost:8000/client-events-summary/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.events = res.data;
            }).catch(error => {
                console.log(error)
            });

            let apiURL2 = `http://localhost:8000/client-find/${this.$route.params.id}`;
            axios.get(apiURL2).then(res => {
                this.client = res.data;
            }).catch(error => {
                console.log(error)
            });

            let apiURL3 = 'http://localhost:8000/newEvents';
            axios.get(apiURL3).then(res => {
                this.eventsfull = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            handleEvent(){
                let apiURL4 = `http://localhost:8000/event-to-client/${this.$route.params.id}`;
                axios.patch(apiURL4, this.clientEvents).then(() => {
                    window.location.reload()
                }).catch(error => {
                    console.log(error)
                });
            },
            removeEvent(eventID) {
                // Store the API enpoint.
                let removeURL = `http://localhost:8000/event-from-client/${this.$route.params.id}/${eventID}`;
                // PUT(UPDATE): delete client activity record.
                if (window.confirm("Confirm you want to remove this event")) {
                    axios.patch(removeURL).then(() => {
                    window.location.reload()
                 }).catch((error) => {
                    console.log(error);
                    });
                }
            }     
        }
    }
   
</script>