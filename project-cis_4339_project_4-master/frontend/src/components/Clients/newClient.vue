<template>
   <div class="row justify-content-center" >
      <div class="col-md-8 mb-5">
         <h3 class="text-center">New Client Sign Up</h3>
<!-- form fields are used to show data, but are disabled since we dont want to change them -->
            <p class="text-muted text-center">Please enter your information and press submit</p>
            <p class="text-muted text-center">Answer N/A if not applicable</p>
            <form @submit.prevent="handleNewForm" class="row g-3">
         <!-- the fields in the form are populated using v-model variables as placeholders. then disabled so they can't be changed, since we are only viewing data -->
            <div class="col-md-6">
               <label class="form-label">First Name</label>
               <input type="text" class="form-control" id="firstName" v-model="client.firstName" required >
            </div>
            <div class="col-md-6">
               <label class="form-label">Last Name</label>
               <input type="text" class="form-control" id="lastName" v-model="client.lastName" required >
            </div>
            <div class="col-md-4">
               <label class="form-label">Phone Number</label>
               <input type="tel" class="form-control" id="phoneNum" placeholder="123-456-7890" v-model="client.phoneNum" required >
            </div>
            <div class="col-md-4">
               <label class="form-label">Work Number</label>
               <input type="tel" class="form-control" id="workNum" placeholder="123-456-7890" v-model="client.workNum" >
            </div>
            <div class="col-md-4">
               <label class="form-label">Birthday</label>
               <input type="date" class="form-control" id="birthday" v-model="client.birthday" required >
            </div>
            <div class="col-md-4">
               <label class="form-label">SSN</label>
               <input type="text" class="form-control" id="SSN" placeholder="123-45-6789" v-model="client.SSN" required >
            </div>
            <div class="col-md-4">
               <label class="form-label">Language</label>
               <input type="text" class="form-control" id="language" v-model="client.language" required >
            </div>
            <div class="col-md-4">
               <label class="form-label">Ethnicity</label>
               <select class="form-control" id="ethnicity" v-model="client.ethnicity" required >
						<option disabled selected> -- select an option -- </option>
						<option value="Asian or Pacific Islander">Asian or Pacific Islander</option>
						<option value="Black or African American">Black or African American</option>
                        <option value="Hispanic or Latino">Hispanic or Latino</option>
                        <option value="Native American or Alaskan Native">Native American or Alaskan Native</option>
                        <option value="White or Caucasian">White or Caucasian</option>
                        <option value="Multiracial or Biracial">Multiracial or Biracial</option>
                        <option value="Race/Ethnicity not listed here">Race/Ethnicity not listed here</option>
                </select>
            </div>
            <div class="col-md-4">
               <label class="form-label">Gender</label>
               <select class="form-control" id="gender" v-model="client.gender" required >
						<option disabled selected> -- select an option -- </option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                </select>
            </div>
            <div class="col-md-4">
               <label class="form-label">Education Level</label>
               <select class="form-control" id="gender" v-model="client.educationLevel" required >
						<option disabled selected> -- select an option -- </option>
                        <option value="none">none</option>
						<option value="some schooling<">some schooling</option>
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
               <select class="form-control" id="employmentStatus" v-model="client.employmentStatus" required >
						<option disabled selected> -- select an option -- </option>
						<option value="Employed">Employed</option>
						<option value="Unemployed">Unemployed</option>
						<option value="Retired">Retired</option>
						<option value="Housewife">Housewife</option>
					</select>
            </div>
            <div class="col-md-4">
               <label class="form-label">Marriage Status</label>
               <select class="form-control" id="marriageStatus" v-model="client.marriageStatus" required >
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
               <select class="form-control" id="livingArrangement" v-model="client.livingArrangement" required >
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
               <input type="text" class="form-control" id="address" v-model="client.address" required >
            </div>
            <div class="col-md-4">
               <label class="form-label">City</label>
               <input type="text" class="form-control" id="city" v-model="client.city" required >
            </div>
            <div class="col-md-4">
               <label class="form-label">State</label>
               <input type="text" class="form-control" id="state" v-model="client.state" required >
            </div>
            <div class="col-md-4">
               <label class="form-label">ZIP Code</label>
               <input type="text" class="form-control" id="zipcode" v-model="client.zipcode" required >
            </div>
            <div class="col-md-4">
               <label class="form-label">Subsidized</label>
               <select class="form-control" id="subsidized" v-model="client.subsidized" required >
						<option disabled selected> -- select an option -- </option>
						<option value="true">Yes</option>
						<option value="false">No</option>
                </select>
            </div>
            <div class="col-md-4">
               <label class="form-label">Single Parent</label>
               <select class="form-control" id="singleParent" v-model="client.singleParent" required >
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
               <input type="text" class="form-control" id="monthlyIncome" v-model="client.monthlyIncome" required >
            </div>
            <div class="col-md-4">
               <label class="form-label">SSI</label>
               <input type="text" class="form-control" id="SSI" v-model="client.SSI">
            </div>
            <div class="col-md-4">
               <label class="form-label">Social Security</label>
               <input type="text" class="form-control" id="socialSecurity" v-model="client.socialSecurity" required >
            </div>
            <div class="col-md-4">
               <label class="form-label">TANF</label>
               <input type="text" class="form-control" id="TANF" v-model="client.TANF" required >
            </div>
            <div class="col-md-4">
               <label class="form-label">Food Stamps</label>
               <select class="form-control" id="foodStamps" v-model="client.foodStamps" required >
						<option disabled selected> -- select an option -- </option>
						<option value="true">Yes</option>
						<option value="false">No</option>
                </select>
            </div>
            <div class="col-md-4">
                <label class="form-label">Organization</label>
                <select class="form-control" id="organization" v-model="client.organization">
                    <option disabled value="">Select Organization to Sign Up For</option>
                    <option v-for="organization in orgs" :key="organization._id" > {{organization.organizationName}} </option>
                    </select>
                </div>
            <div class="text-center">
                    <button onclick="alert('New Client Information Succesfully Added')" 
                    class="btn btn-primary mt-3">Submit New Client Application</button>
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
                client: {
                   firstName: '',
                   lastName: '',
                   phoneNum: '',
                   workNum: '',
                   birthday: '',
                   SSN: '',
                   language: '',
                   educationLevel: '',
                   employmentStatus: '',
                   marriageStatus: '',
                   livingArrangement: '',
                   address: '',
                   city: '',
                   state: '',
                   zipcode: '',
                   subsidized: '',
                   singleParent: '',
                   headOfHousehold: '',
                   monthlyIncome: '',
                   SSI: '',
                   socialSecurity: '',
                   TANF: '',
                   foodStamps: '',
                   organization: ''
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
            //uses the applicant dta model as request data to send data to the api endpoint.
            handleNewForm() {
                let apiURL = `http://localhost:8000/create-client`;
               
                axios.post(apiURL, this.client).then(() => {
                    this.$router.push('/clientList')
                    //after the posting of data, takes you to the applicants route view
                  this.client = {
                   firstName: '',
                   lastName: '',
                   phoneNum: '',
                   workNum: '',
                   birthday: '',
                   SSN: '',
                   language: '',
                   educationLevel: '',
                   employmentStatus: '',
                   marriageStatus: '',
                   livingArrangement: '',
                   address: '',
                   city: '',
                   state: '',
                   zipcode: '',
                   subsidized: '',
                   singleParent: '',
                   headOfHousehold: '',
                   monthlyIncome: '',
                   SSI: '',
                   socialSecurity: '',
                   TANF: '',
                   foodStamps: '',
                   organization: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
           
    }

</script>