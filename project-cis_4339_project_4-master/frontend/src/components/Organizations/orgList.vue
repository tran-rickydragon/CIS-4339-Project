<template> 
<!-- start the template that will contain the page content -->
    <div class="row mb-5 pb-5 ">
        <h3 class="text-center">List of Organizations</h3>
        <h5 class="text-muted text-center mb-5 pb-5">Below is a list of all organizations linked to this site</h5>
        <div class="col-md-12">
            <table class="table table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th>Organization Name</th>
                    </tr>
                </thead>
                <tbody> 
                    <!-- loops through the array of events and parse through the data using the key _id, curly brackets render the data into the dom -->
                    <tr v-for="organization in orgs" :key="organization._id">
                        <td>{{ organization.organizationName }}</td>    
                        <td>
                        <router-link :to="{name: 'orgEmployees', params: { organizationName: organization.organizationName }}" class="btn btn-primary ">View Employees</router-link>   
                        <router-link :to="{name: 'orgClients', params: { organizationName: organization.organizationName }}" class="btn btn-primary ">View Clients</router-link>
                        <router-link :to="{name: 'orgEvents', params: { organizationName: organization.organizationName }}" class="btn btn-primary ">View Events</router-link>
                        </td>
                        <td>
                         <router-link :to="{name: 'editOrg', params: { id: organization._id }}" class="btn btn-sm btn-warning fw-bold   ">Edit Org</router-link>   
                         <button @click.prevent="deleteOrg(organization._id)"  class="btn btn-sm btn-danger fw-bold">Delete Org</button>    
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
                orgs: [] //stores the pulled data into an array
            }
        },
        // create hook is used to call the axios method that will get data from the endpoint, storing the info to the current vue instance
        created() {
            let apiURL = 'http://localhost:8000/organizations';
            axios.get(apiURL).then(res => {
                this.orgs = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods:{
      deleteOrg(orgID) {
      // Store the API enpoint.
      let deleteURL = `http://localhost:8000/organization-delete/${orgID}`;
        // PUT(UPDATE): delete client activity record.
        if (window.confirm("Confirm you want to delete this org")) {
        axios.delete(deleteURL).then(() => {
        window.location.reload()
        }).catch((error) => {
          console.log(error);
        });
        }
      }
    }
};
</script>
<style>
.btn {margin-right: 10px}
</style>