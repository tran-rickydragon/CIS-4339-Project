<template>
   <div class="row justify-content-center" >
      <div class="col-md-8 mb-5">
         <h3 class="text-center">Organization info</h3>
            <p class="text-muted text-center">Please make and submit any necessary changes below</p>
            <form @submit.prevent="handleUpdateForm" class="row g-3">
            <div class="col-md-6">
               <label class="form-label">Organization Name</label>
               <input type="text" class="form-control" v-model="organization.organizationName" >
            </div>
            <div class="text-center">
                    <button onclick="alert('Organization Succesfully Updated')" 
                    class="btn btn-primary mt-3">Submit Changes</button>
                </div>
         </form>
      </div>
   </div>
</template>

<script>
// import the axios module so that we can used the axios methods
    import axios from "axios";

    export default {
        data() { // data to be stored
            return {
                organization: [] //stores the the data into an array
            }
        },
        // create hook is used to call the axios method that will get data from the endpoint, storing the info to the current vue instance
        created() {
            let apiURL = `http://localhost:8000/organization-find/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.organization = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
        // when update form button is click, this function gets called which updates the data using thhe endpoint below.
        handleUpdateForm() {
            let apiURL2 = `http://localhost:8000/organization-update/${this.$route.params.id}`;
            axios.put(apiURL2, this.organization).then(() => {
                this.$router.push({ path: `/orgList` })
            }).catch(error => {
                console.log(error)
            });
        },
      }
    };
</script>