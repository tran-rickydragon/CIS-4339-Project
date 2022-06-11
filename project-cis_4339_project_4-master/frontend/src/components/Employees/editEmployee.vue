<template>
   <div class="row justify-content-center" >
      <div class="col-md-8 mb-5">
         <h3 class="text-center">Update Employee Information</h3>
<!-- form fields are used to show data, but are disabled since we dont want to change them -->
            <!--<p class="text-muted text-center">Welcome back, {{worker.firstName}} {{worker.lastName}}</p>
            <p class="text-muted text-center">Please update your information and press submit</p>-->
            <form @submit.prevent="handleUpdateForm" class="row g-3">
         <!-- Only certain fields that could be edited are available to -->
            <div class="col-md-6">
               <label class="form-label">First Name</label>
               <input type="text" class="form-control" v-model="worker.firstName" disabled>
            </div>
            <div class="col-md-6">
               <label class="form-label">Last Name</label>
               <input type="text" class="form-control" v-model="worker.lastName" disabled>
            </div>
            <div class="col-md-6">
               <label class="form-label">Phone Number</label>
               <input type="tel" class="form-control" placeholder="123-456-7890" v-model="worker.phoneNumber">
            </div>
            <div class="col-md-6">
               <label class="form-label">Organization</label>
               <input type="text" class="form-control" v-model="worker.organization" disabled>
            </div>
            <div class="text-center">
                    <button onclick="alert('Employee Information Succesfully Updated')" 
                    class="btn btn-primary mt-3">Submit Updated Employee Information</button>
                </div>
         </form>
         <br>
         <div class="text-center">
                    <button @click.prevent="deleteWorker" class="btn btn-sm btn-danger fw-bold">Delete Employee</button>
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
                worker: {} //stores the worker data into an array 
            }
        },
        // create hook is used to call the axios method that will get data from the endpoint, storing the info to the current vue instance
        created() {
            let apiURL = `http://localhost:8000/worker-find/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.worker = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
        // when update form button is click, this function gets called which updates the data using thhe endpoint below.
        handleUpdateForm() {
            let apiURL = `http://localhost:8000/worker-update/${this.$route.params.id}`;
            axios.put(apiURL, this.worker).then(() => {
            window.location.reload()
            }).catch(error => {
                console.log(error)
            });
        },
    deleteWorker() {
      // Store the API enpoint.
      let deleteURL = `http://localhost:8000/worker-delete/${this.$route.params.id}`;
        // PUT(UPDATE): delete worker activity record.
        if (window.confirm("Confirm you want to delete this worker")) {
        axios.delete(deleteURL).then(() => {
        this.$router.push('/employeeHome')
        }).catch((error) => {
          console.log(error);
        });
        }
      }
    }
  };  
</script>