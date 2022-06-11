<!-- Used BOL homepage as a template -->
<template>
  <div>
   <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand float-left" href="/">TPD Solutions </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto" >
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Clients
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="nav-link dropdown" to="/clientList">View Clients</router-link>
              <li><hr class="dropdown-divider"></li>
              <router-link class="nav-link dropdown" to="/newClient">Create Clients</router-link>
            </ul>
          </li>
           <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Employees
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="nav-link dropdown" to="/employeeHome">View Employees</router-link>
              <li><hr class="dropdown-divider"></li>
              <router-link class="nav-link dropdown" to="/newEmployee">Create Employees</router-link>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Events
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="nav-link dropdown" to="/eventList">View Events</router-link>
              <li><hr class="dropdown-divider"></li>
              <router-link class="nav-link dropdown" to="/newEvent">Create Events</router-link>
            </ul>
          </li>
           <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Organizations
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="nav-link dropdown" to="/orgList">View Organizations</router-link>
              <li><hr class="dropdown-divider"></li>
              <router-link class="nav-link dropdown" to="/newOrg">Add Organizations</router-link>
            </ul>
          </li>
          </ul>
      </div>
    </div>
  </nav>

    <div class="jumbotron text-center">
      <img class="img-fluid" src="@\assets\DB.png">
      <p>A Data Hub for Non-Profits.</p> 
    </div>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>


  </div>
</template>


<script>
//https://therichpost.com/how-to-add-bootstrap-5-in-vue-3-application/
//importing bootstrap 5
//imports the css to be used on this page
import "bootstrap/dist/css/bootstrap.min.css";
export default {
 
}
</script>


<style>
/* import the fonts from google */
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
@import url('https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic');
/* https://www.w3schools.com/bootstrap/bootstrap_theme_company.asp */
/* used the css from this template above to help put the frontend ui together */
  body {
    font: 400 15px Lato, sans-serif;
    line-height: 1.8;
    color: #303030;
  }
  h2 {
    font-size: 24px;
    text-transform: uppercase;
    color: #303030;
    font-weight: 600;
    margin-bottom: 30px;
  }
  h4 {
    font-size: 19px;
    line-height: 1.375em;
    color: #303030;
    font-weight: 400;
    margin-bottom: 30px;
  }  
  .jumbotron {
    background-color: #80bde6;
    color: #303030;
    padding-top: 3rem;
    padding-bottom: 6rem;
    font-family: Montserrat, sans-serif;
    font-size: 1.25rem;
  }
  .container-fluid {
    padding: 60px 50px;
  }
  .bg-grey {
    background-color: #f6f6f6;
  }
  .img-fluid{
    max-width: 10%;
    height: auto;
  }
  .logo-small {
    color: #0c35ee;
    font-size: 50px;
  }
  .logo {
    color: #0c35ee;
    font-size: 200px;
  }
  .thumbnail {
    padding: 0 0 15px 0;
    border: none;
    border-radius: 0;
  }
  .thumbnail img {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
  }
  .carousel-control.right, .carousel-control.left {
    background-image: none;
    color: #0c35ee;
  }
  .carousel-indicators li {
    border-color: #0c35ee;
  }
  .carousel-indicators li.active {
    background-color: #0c35ee;
  }
  .item h4 {
    font-size: 19px;
    line-height: 1.375em;
    font-weight: 400;
    font-style: italic;
    margin: 70px 0;
  }
  .item span {
    font-style: normal;
  }
  .panel {
    border: 1px solid #80bde6; 
    border-radius:0 !important;
    transition: box-shadow 0.5s;
  }
  .panel:hover {
    box-shadow: 5px 0px 40px rgba(0,0,0, .2);
  }
  .panel-footer .btn:hover {
    border: 1px solid #0400e9;
    background-color: #fff !important;
    color: #1100fc;
  }
  .panel-heading {
    color: #fff !important;
    background-color: #110df3 !important;
    padding: 25px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .panel-footer {
    background-color: white !important;
  }
  .panel-footer h3 {
    font-size: 32px;
  }
  .panel-footer h4 {
    color: #aaa;
    font-size: 14px;
  }
  .panel-footer .btn {
    margin: 15px 0;
    background-color: #1e22f4;
    color: #fff;
  }
  .navbar {
    margin-bottom: 0;
    background-color: #3f72cf;
    z-index: 9999;
    font-size: 1.25rem;
    border: 0;
    border-radius: 0;
    font-family: Montserrat, sans-serif;
    
  }
  .navbar-brand {
    font-size: 1.75em;
    transition: font-size 0.3s;
  }
  .navbar li a, .navbar .navbar-brand {
    color: #000000 !important;
  }
  .navbar-nav li a:hover, .navbar-nav li.active a {
    color: #80bde6 !important;
    
  } 
  .navbar-default .navbar-toggle {
    border-color: transparent;
    color: rgb(0, 0, 0) !important;
  }
  footer .glyphicon {
    font-size: 20px;
    margin-bottom: 20px;
    color: #1e22f4;
  }
  .slideanim {visibility:hidden;}
  .slide {
    animation-name: slide;
    -webkit-animation-name: slide;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    visibility: visible;
  }
  @keyframes slide {
    0% {
      opacity: 0;
      transform: translateY(70%);
    } 
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @-webkit-keyframes slide {
    0% {
      opacity: 0;
      -webkit-transform: translateY(70%);
    } 
    100% {
      opacity: 1;
      -webkit-transform: translateY(0%);
    }
  }
  @media screen and (max-width: 768px) {
    .col-sm-4 {
      text-align: center;
      margin: 25px 0;
    }
    .btn-lg {
      width: 100%;
      margin-bottom: 35px;
    }
  }
  @media screen and (max-width: 480px) {
    .logo {
      font-size: 150px;
    }
  }
</style>

