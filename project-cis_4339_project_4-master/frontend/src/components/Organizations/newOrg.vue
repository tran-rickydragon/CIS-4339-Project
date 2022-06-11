<template>
   <div class="row justify-content-center" >
      <div class="col-md-8 mb-5">
         <h3 class="text-center">New Organization Creation</h3>
<!-- form fields are used to show data, but are disabled since we dont want to change them -->
            <p class="text-muted text-center">Please enter new organization name</p>
            <form @submit.prevent="handleNewForm" class="row g-3">
         <!-- the fields in the form are populated using v-model variables as placeholders. then disabled so they can't be changed, since we are only viewing data -->
            <div>
               <input type="text" class="form-control" id="organizationName" v-model="organization.organizationName" required >
            </div>
            <div class="text-center">
                    <button onclick="alert('Organization Succesfully Created')" 
                    class="btn btn-primary mt-3">Create new organization</button>
                </div>
         </form>

      </div>
   </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                // variables are used for v-if, applicant data model is usd to submit form data. 
                organization: {
                   organizationName: '',
                }
            }
        },
        methods: {
            //uses the applicant dta model as request data to send data to the api endpoint.
            handleNewForm() {
                let apiURL = `http://localhost:8000/create-org`;
               
                axios.post(apiURL, this.organization).then(() => {
                    this.$router.push('/orgList')
                    //after the posting of data, takes you to the applicants route view
                  this.organization = {
                   organizationName: '',
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
           
    }

</script>