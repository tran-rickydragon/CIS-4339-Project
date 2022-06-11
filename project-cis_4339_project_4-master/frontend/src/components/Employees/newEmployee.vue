<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
          <h3 class="text-center">Add new employee</h3>
          <h5 class="text-muted text-center mb-5">Use the form below to add a new employee</h5>
            <form @submit.prevent="handleNewWorkerForm" class="mb-5">
                <!-- form data will accept data and pass to v-model, which structures data for the put request -->
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" id="firstName" v-model="worker.firstName" required>
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" id="lastName" v-model="worker.lastName" required>
                </div>

                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="tel" class="form-control" id="phoneNumber" placeholder="123-456-7890" v-model="worker.phoneNumber" required >
                </div>
                <div class="form-group">
                    <label class="form-label">Organization</label>
                    <select class="form-control" id="organization" v-model="worker.organization">
                        <option disabled value="">Select an Organization</option>
                        <option v-for="organization in orgs" :key="organization._id" > {{organization.organizationName}} </option>
                    </select>
                </div>
                <div class="text-center">
                    <button onclick="alert('Employee Succesfully Created')" 
                    class="btn btn-primary mt-3">Create new employee</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    // import axios to use api methods

    export default {
        data() {
            return { // create the model for the worker scheme that will be submited to the api endpoint
                worker: {
                  firstName: '',
                  lastName: '',
                  phoneNumber: '',
                  organization: '',
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
            //when the form is submited, the data gets sent to the endpoint using axios.
            handleNewWorkerForm() {
                let apiURL = `http://localhost:8000/create-worker`;
                
                axios.post(apiURL, this.worker).then(() => {
                    //after submit, the view is changed to this path
                  this.$router.push('/employeeHome')
                  this.worker = {
                  firstName: '',
                  lastName: '',
                  phoneNumber: '',
                  organization: '',
              }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
           
    }
</script>
