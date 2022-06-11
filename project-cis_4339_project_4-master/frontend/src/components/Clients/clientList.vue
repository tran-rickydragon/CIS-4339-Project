<template> 
<!-- start the template that will contain the page content -->
    <div class="row mb-5 pb-5 ">
        <h3 class="text-center">List of Clients</h3>
        <h5 class="text-muted text-center mb-5 pb-5">Below is a list of all recorded clients. Select View to review details.</h5>
        <div class="col-md-12">
            <table class="table table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>ZIP Code</th>
                        <th>Organization</th>
                    </tr>
                </thead>
                <tbody> 
                    <!-- loops through the array of clients and parse through the data using the key _id, curly brackets render the data into the dom -->
                    <tr v-for="client in clients" :key="client._id">
                        <td>{{ client.firstName }}</td>
                        <td>{{ client.lastName }}</td>
                        <td>{{ client.phoneNum }}</td>
                        <td>{{ client.zipcode }}</td>
                        <td>{{ client.organization }}</td>               
                        <td>
                        <router-link :to="{name: 'editClient', params: { id: client._id }}" class="btn btn-warning ">Detail View</router-link>
                        </td>
                        <td>
                        <router-link :to="{name: 'clientEvents', params: { id: client._id }}" class="btn btn-primary ">View/Edit Events</router-link>
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
                clients: [] //stores the client data into an array 
            }
        },
        // create hook is used to call the axios method that will get data from the endpoint, storing the info to the current vue instance
        created() {
            let apiURL = 'http://localhost:8000/clients';
            axios.get(apiURL).then(res => {
                this.clients = res.data;
            }).catch(error => {
                console.log(error)
            });
        }
    }
</script>

<style>
.btn {margin-right: 5px}
</style>