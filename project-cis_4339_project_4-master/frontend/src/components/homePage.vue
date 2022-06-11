<template>
  <div class="text-justify">
    <h3>CIS 4339-Enterprise Applications Development</h3>
    <h5 class="text-muted mb-5">Full Stack Web Development Project</h5>

    
    <p>
      The goal of this web application is to act as a hub for non-profits across the nation to store and share their data with<br> 
       their employees and clients. We have started with two organizaitons, Bread of Life and The Community Family Center, <br> 
       but have designed the app to easily add on more. This is in hopes that other organizations will see this as a scalable <br>
       solution to their data needs. We will continue to develop and update this app to meet the needs of our users and <br> 
       any new organizations that decied to join us.<br><br>
        <a href="https://gethelp.uh.edu/kb/?q=accessuh" target="_blank" rel="noopener">Contact Us</a> to ask about joining our team or give us feedback.
    </p>


    <div class="container">
      <h5 class="text-muted text-center mt-5 pt-5">Made using NodeJs, Vue, Bootstrap, and Mongo DB.</h5>
      <div class="row justify-content-center">
            <img src="..\assets\node.svg" class="img-responsive">
            <img src="..\assets\vue.svg" class="img-responsive">
            <img src="..\assets\bootstrap.svg" class="img-responsive">
            <img src="..\assets\mongodb.svg" class="img-responsive">
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'homePage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-responsive{
  display: block;
  max-width: 10%;
  height: auto;
}
p {text-align: center;}
h3 {text-align: center;}
h5 {text-align: center;}
</style>
