<template> 
<!-- start the template that will contain the page content -->
    <div class="row mb-5 pb-5 ">
        <h3 class="text-center">List of Employees</h3>
        <h5 class="text-muted text-center mb-5 pb-5">Below is a list of all employees and their organization.</h5>
        <div class="col-md-12">
            <table class="table table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Organization</th>
                    </tr>
                </thead>
                <tbody> 
                    <!-- loops through the array of employees and parses the data using the key _id, curly brackets render the data into the dom -->
                    <tr v-for="worker in workers" :key="worker._id">
                        <td>{{ worker.firstName }}</td>
                        <td>{{ worker.lastName }}</td>
                        <td>{{ worker.phoneNumber }}</td>
                        <td>{{ worker.organization }}</td>             
                       <!-- <td>
                        <router-link :to="{name: 'worker', params: { id: worker._id }}" class="btn btn-success ">Detail View</router-link> 
                        </td> -->
                        <td>
                        <router-link :to="{name: 'viewEmployee', params: { id: worker._id }}" class="btn btn-warning ">Edit</router-link>
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
                workers: [] //stores the worker data into an array 
            }
        },
        // create hook is used to call the axios method that will get data from the endpoint, storing the info to the current vue instance
        created() {
            let apiURL = 'http://localhost:8000/workers';
            axios.get(apiURL).then(res => {
                this.workers = res.data;
            }).catch(error => {
                console.log(error)
            });
        }
    }
</script>
