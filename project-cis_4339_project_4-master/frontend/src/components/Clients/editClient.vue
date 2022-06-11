<template>
   <div class="row justify-content-center" >
      <div class="col-md-8 mb-5">
         <h3 class="text-center">Client Information</h3>
<!-- form fields are used to show data, but are disabled since we dont want to change them -->
            <p class="text-muted text-center">Welcome back, {{client.firstName}} {{client.lastName}}</p>
            <p class="text-muted text-center">Please update your information and press submit</p>
            <form @submit.prevent="handleUpdateForm" class="row g-3">
         <!-- Only certain fields that could be edited are available to -->
            <div class="col-md-6">
               <label class="form-label">First Name</label>
               <input type="text" class="form-control" v-model="client.firstName" disabled>
            </div>
            <div class="col-md-6">
               <label class="form-label">Last Name</label>
               <input type="text" class="form-control" v-model="client.lastName" disabled>
            </div>
            <div class="col-md-6">
               <label class="form-label">Phone Number</label>
               <input type="tel" class="form-control" placeholder="123-456-7890" v-model="client.phoneNum">
            </div>
            <div class="col-md-6">
               <label class="form-label">Work Number</label>
               <input type="tel" class="form-control" placeholder="123-456-7890" v-model="client.workNum">
            </div>
            <div class="col-md-4">
               <label class="form-label">Birthday</label>
               <input type="text" class="form-control" v-model="client.birthday" disabled>
            </div>
            <div class="col-md-4">
               <label class="form-label">SSN</label>
               <input type="text" class="form-control" v-model="client.SSN" disabled>
            </div>
            <div class="col-md-4">
               <label class="form-label">Language</label>
               <input type="text" class="form-control" v-model="client.language" disabled>
            </div>
            <div class="col-md-4">
               <label class="form-label">Ethnicity</label>
               <input type="text" class="form-control" v-model="client.ethnicity" disabled>
            </div>
            <div class="col-md-4">
               <label class="form-label">Gender</label>
               <input type="text" class="form-control" v-model="client.gender" disabled>
            </div>
           <div class="col-md-4">
               <label class="form-label">Education Level</label>
               <select class="form-control" v-model="client.educationLevel" required >
                 <option disabled selected> -- select an option -- </option>
                 <option value="none">none</option>
                 <option value="some schooling<">Some Schooling</option>
                 <option value="High School / GED">High School / GED</option>
                 <option value="Technical School">Technical School</option>
                 <option value="Some College">Some College</option>
                 <option value="Associate Degree">Associate Degree</option>
                 <option value="Bachelor Degree">Bachelor Degree</option>
                 <option value="Master Degree">Master Degree</option>
                 <option value="PHD">PHD</option>
                </select>
            </div>
            <div class="col-md-4">
               <label class="form-label">Employment Status</label>
               <select class="form-control" v-model="client.employmentStatus" required >
						<option disabled selected> -- select an option -- </option>
						<option value="Employed">Employed</option>
						<option value="Unemployed">Unemployed</option>
						<option value="Retired">Retired</option>
						<option value="Housewife">Housewife</option>
					</select>
            </div>
            <div class="col-md-4">
               <label class="form-label">Marriage Status</label>
               <select class="form-control" v-model="client.marriageStatus" required >
						<option disabled selected> -- select an option -- </option>
						<option value="Single">Single</option>
						<option value="Married">Married</option>
						<option value="Separated">Separated</option>
						<option value="Divorced">Divorced</option>
						<option value="Widow">Widow</option>
					</select> 
            </div>
            <div class="col-md-4">
               <label class="form-label">Living Arrangement</label>
               <select class="form-control" v-model="client.livingArrangement" required >
						<option disabled selected> -- select an option -- </option>
						<option value="Renting">Renting</option>
						<option value="Owner of house or trailer">Owner of house or trailer</option>
						<option value="Staying with friends or family">Staying with friends or family</option>
						<option value="Staying in shelter or hotel">Staying in shelter or hotel</option>
						<option value="Living in a car or tent">Living in a car or tent</option>
						<option value="Traveling through the area">Traveling through the area</option>
					</select>
          </div>
            <div class="col-md-4">
               <label class="form-label">Address</label>
               <input type="text" class="form-control" v-model="client.address">
            </div>
            <div class="col-md-4">
               <label class="form-label">City</label>
               <input type="text" class="form-control" v-model="client.city">
            </div>
            <div class="col-md-4">
               <label class="form-label">State</label>
               <input type="text" class="form-control" v-model="client.state">
            </div>
            <div class="col-md-4">
               <label class="form-label">ZIP Code</label>
               <input type="text" class="form-control" v-model="client.zipcode">
            </div>
            <div class="col-md-4">
               <label class="form-label">Subsidized</label>
               <select class="form-control" v-model="client.subsidized" required >
						<option disabled selected> -- select an option -- </option>
						<option value="true">Yes</option>
						<option value="false">No</option>
                </select>
            </div>
            <div class="col-md-4">
               <label class="form-label">Single Parent</label>
               <select class="form-control" v-model="client.singleParent" required >
						<option disabled selected> -- select an option -- </option>
						<option value="true">Yes</option>
						<option value="false">No</option>
                </select>
            </div>
            <div class="col-md-4">
               <label class="form-label">Head Of Household</label>
               <select class="form-control" id="headOfHousehold" v-model="client.headOfHousehold" required >
						<option disabled selected> -- select an option -- </option>
						<option value="true">Yes</option>
						<option value="false">No</option>
                </select>
            </div>
             <div class="col-md-4">
               <label class="form-label">Monthly Income</label>
               <input type="text" class="form-control" v-model="client.monthlyIncome">
            </div>
            <div class="col-md-4">
               <label class="form-label">SSI</label>
               <input type="text" class="form-control" v-model="client.SSI">
            </div>
            <div class="col-md-4">
               <label class="form-label">Social Security</label>
               <input type="text" class="form-control" v-model="client.socialSecurity">
            </div>
            <div class="col-md-4">
               <label class="form-label">TANF</label>
               <input type="text" class="form-control" v-model="client.TANF">
            </div>
            <div class="col-md-4">
               <label class="form-label">Food Stamps</label>
               <select class="form-control" id="foodStamps" v-model="client.foodStamps" required >
						<option disabled selected> -- select an option -- </option>
						<option value="true">Yes</option>
						<option value="false">No</option>
                </select>
            </div>
            <div class="text-center">
                    <button onclick="alert('Client Information Succesfully Updated')" 
                    class="btn btn-primary mt-3">Submit Updated Client Information</button>
                </div>
         </form>
         <br>
         <div class="text-center">
                    <button @click.prevent="deleteClient" class="btn btn-sm btn-danger fw-bold">Delete Client Information</button>
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
                client: {} //stores the client data into an array 
            }
        },
        // create hook is used to call the axios method that will get data from the endpoint, storing the info to the current vue instance
        created() {
            let apiURL = `http://localhost:8000/client-find/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.client = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
        // when update form button is click, this function gets called which updates the data using thhe endpoint below.
        handleUpdateForm() {
            let apiURL = `http://localhost:8000/client-update/${this.$route.params.id}`;
            axios.put(apiURL, this.client).then(() => {
            window.location.reload()
            }).catch(error => {
                console.log(error)
            });
        },
    deleteClient() {
      // Store the API enpoint.
      let deleteURL = `http://localhost:8000/client-delete/${this.$route.params.id}`;
        // PUT(UPDATE): delete client activity record.
        if (window.confirm("Confirm you want to delete this client")) {
        axios.delete(deleteURL).then(() => {
        this.$router.push('/clientList')
        }).catch((error) => {
          console.log(error);
        });
        }
      }
    }
  };  
</script>