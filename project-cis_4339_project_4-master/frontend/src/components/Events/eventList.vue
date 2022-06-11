<template> 
<!-- start the template that will contain the page content -->
    <div class="row mb-5 pb-5 ">
        <h3 class="text-center">List of Events</h3>
        <h5 class="text-muted text-center mb-5 pb-5">Below is a list of all events</h5>
        <div class="col-md-12">
            <table class="table table-hover" cellspacing = "0">
                <thead class="thead-dark">
                    <tr>
                        <th>Event Name</th>
                        <th>Event Date</th>
                        <th>State</th>
                        <th>ZIP</th>
                        <th>Organization</th>
                    </tr>
                </thead>
                <tbody> 
                    <!-- loops through the array of events and parse through the data using the key _id, curly brackets render the data into the dom -->
                    <tr v-for="event in events" :key="event._id">
                        <td>{{ event.eventName }}</td>
                        <td>{{ event.eventDate }}</td>
                        <td>{{ event.eventState }}</td>       
                        <td>{{ event.eventZip }}</td>  
                        <td>{{ event.organization }}</td>       
                        <td>
                        <router-link :to="{name: 'eventEmployees', params: { id: event._id }}" class="btn btn-primary" >View Workers</router-link>
                        </td>
                        <td>
                        <router-link :to="{name: 'eventClients', params: { id: event._id }}" class="btn btn-secondary " >View Attendees</router-link>
                        </td>
                        <td>
                        <router-link :to="{name: 'editEvent', params: { id: event._id }}" class="btn btn-warning ">Detail View</router-link>
                        </td>
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
                events: [] //stores the client data into an array 
            }
        },
        // create hook is used to call the axios method that will get data from the endpoint, storing the info to the current vue instance
        created() {
            let apiURL = 'http://localhost:8000/events';
            axios.get(apiURL).then(res => {
                this.events = res.data;
            }).catch(error => {
                console.log(error)
            });
        }
    }
</script>

<style>
.btn {margin-right: 5px;}
</style>
