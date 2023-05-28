<template>
  <!--====== HEADER PART START ======-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <div class="container px-4">
      <p class="navbar-brand m-0">
        <router-link to="/" class="navbar-brand">
          Start Bootstrap
        </router-link>
      </p>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
            <li :class="`nav-item ${currentRoute == '/' ? 'active' : ''}`">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li :class="`nav-item ${currentRoute == '/experiment' ? 'active' : ''}`">
              <router-link to="/experiment" class="nav-link">Experiment</router-link>
            </li>
          </ul>
        </div>
    </div>
  </nav>
  <!--====== HEADER PART ENDS ======-->


  <router-view></router-view>


  <!--====== FOOTER PART START ======-->
  <!-- Footer Section -->
  <footer id="footer" class="footer-area">
    <div class="container text-center">
      <h6 class="text-white">2023 &#169; Copyright by Ssas</h6>
    </div>
  </footer>
  <!-- End: Footer Section -->
  <!--====== FOOTER PART ENDS ======-->
</template>

<script>
export default {
  name: 'App',

  data () {
    return {
      currentRoute: ''
    }
  },

  created () {
    this.currentRoute = this.$route.path
  },

  watch: {
    '$route.path' (to) {
      if (to != this.currentRoute) {
        this.currentRoute = to
      }
      console.log(this.currentRoute);
    }
  }
}
</script>

<style scoped>
  .nav-item {
    position: relative;
    margin-left: 40px;
  }

  .nav-item.active a::before,
  .nav-item a:hover::before {
    width: 100%;
  }

  .nav-item a::before {
    position: absolute;
    content: '';
    bottom: 0px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: rgb(255, 200, 0);
    transition: all 0.3s ease-out 0s;
  }

  .nav-item.active a {
    color: rgb(255, 200, 0);
  }

  .footer-area {
    background-color: #073C64;
    padding-top: 15px;
    padding-bottom: 30px;
  }
</style>
