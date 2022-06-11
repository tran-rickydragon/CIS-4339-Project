<template> 
<!-- start the template that will contain the page content -->
    <div class="row mb-5 pb-5 ">
        <h3 class="text-center">List of Events</h3>
        <h5 class="text-muted text-center mb-5 pb-5">Below is a list of all clients who signed up for {{events.eventName}}</h5>
           <br>
            <table class="table table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody> 
                    <!-- loops through the array of events and parse through the data using the key _id, curly brackets render the data into the dom -->
                    <tr v-for="client in clients" :key="client._id">
                        <td>{{ client._id.firstName }}</td>
                        <td>{{ client._id.lastName }}</td>
                        <td>{{ client._id.phoneNum }}</td> 
                    </tr>
                </tbody>
            </table>
        </div>

    
</template>

<script>
// import the axios module so that we can used the axios methods
    import axios from "axios";

    export default {
        data() { // data to be stored
            return {
                events: [], //stores the event data into an array 
                clients: [],
            }
        },
        // create hook is used to call the axios method that will get data from the endpoint, storing the info to the current vue instance
        created() {
            let apiURL = `http://localhost:8000/event-clients-summary/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.clients = res.data;
            }).catch(error => {
                console.log(error)
            });

            let apiURL2 = `http://localhost:8000/event-find/${this.$route.params.id}`;
            axios.get(apiURL2).then(res => {
                this.events = res.data;
            }).catch(error => {
                console.log(error)
            });

        },
        methods: {
            }        
    }
   
</script>