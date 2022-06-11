<template> 
<!-- start the template that will contain the page content -->
    <div class="row mb-5 pb-5 ">
        <h3 class="text-center">List of Workers</h3>
        <h5 class="text-muted text-center">Below is a list of all workers for {{event.eventName}}</h5>
        <h5 class="text-muted text-center">Host Organization: {{event.organization}}</h5>
        <div class="col-md-12">
           <form @submit.prevent="handleEvent"> 
            <div class="text-center" >
                <select class="text-center" v-model="eventWorkers.workers">
                    <option disabled value="">Select Worker to Add</option>
                    <option v-for="worker in workersFull" :value="worker._id" :key="worker._id" > {{worker.firstName + ', ' + worker.lastName + ', Org: ' + worker.organization}}</option>
                </select>
            </div>
            <div class="text-center">
                <button type="submit" onclick="alert('Worker Added!')" class="btn btn-primary mt-3">Add Worker</button>
                </div>
           </form>
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
                    <tr v-for="worker in workers" :key="worker._id">
                        <td>{{ worker._id.firstName }}</td>
                        <td>{{ worker._id.lastName }}</td>
                        <td>{{ worker._id.phoneNumber }}</td>
                         <td><a class="btn btn-danger is-small " @click.prevent="removeWorker(worker._id.workerID)">Remove from Event</a></td>     
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
                workers: [], //stores the event data into an array 
                event: [],
                workersFull: [],
                eventWorkers:{
                    events: ''
                }
            }
        },
        // create hook is used to call the axios method that will get data from the endpoint, storing the info to the current vue instance
        created() {
            let apiURL = `http://localhost:8000/event-workers-summary/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.workers = res.data;
            }).catch(error => {
                console.log(error)
            });

            let apiURL2 = `http://localhost:8000/event-find/${this.$route.params.id}`;
            axios.get(apiURL2).then(res => {
                this.event = res.data;
            }).catch(error => {
                console.log(error)
            });

            let apiURL3 = 'http://localhost:8000/workers';
            axios.get(apiURL3).then(res => {
                this.workersFull = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            handleEvent(){
                let apiURL4 = `http://localhost:8000/worker-to-event/${this.$route.params.id}`;
                axios.patch(apiURL4, this.eventWorkers).then(() => {
                    window.location.reload()
                }).catch(error => {
                    console.log(error)
                });
            },
            removeWorker(workerID) {
                // Store the API enpoint.
                let removeURL = `http://localhost:8000/worker-from-event/${this.$route.params.id}/${workerID}`;
                // removes worker from array
                if (window.confirm("Confirm you want to remove this worker")) {
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