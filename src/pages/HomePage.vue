<template>
  <!--====== content PART START ======-->
  <section id="home" class="header_area">
    <div class="header_hero" id="home">
      <div class="container-fluid main-home-bg d-flex align-items-center">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10">
            <div class="text-center text-white">
              <h2 class="hero-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">OFDM SIMULATOR</h2>
              <p class="hero-description wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <a href="assets/docs/dummy.pdf" class="main-btn wow fadeInUp rounded-pill" data-wow-duration="1.3s" data-wow-delay="0.8s">PANDUAN</a>
            </div> <!-- hero content -->
          </div>
        </div> <!-- row -->
      </div> <!-- container -->
    </div> <!-- header hero -->
  </section>

  <section id="content" class="content-area my-5">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <div class="section_title text-center pb-25">
            <h4 class="display-6 mb-3 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Overview</h4>
            <p class="content-description wow fadeInUp text-justify text-muted" data-wow-duration="1.3s" data-wow-delay="0.4s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div> <!-- section title -->
        </div>
      </div> <!-- row -->
      <div class="text-center">
        <img class="img-fluid" src="assets/images/diagram-ofdm.png">
      </div>
    </div> <!-- container -->
  </section>

  <!--====== content PART ENDS ======-->
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
  .main-home-bg {
    height: 700px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    z-index: 1;
    background-image: url(https://learn.g2.com/hubfs/What_is_Information_Technology.jpg);
  }

  .main-home-bg::before {
    position: absolute;
    content: '';
    background-color: rgba(43, 42, 61, 0.7);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
  }

  .hero-title {
    font-size: 40px;
    line-height: 60px;
    color: #fff;
    margin-top: 15px;
  }

  .hero-description {
    font-size: 16px;
    margin-top: 30px;
  }

  .main-btn {
    margin-top: 45px;
    text-decoration: none;
    display: inline-block;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 0;
    padding: 0 40px;
    font-size: 16px;
    height: 45px;
    line-height: 45px;
    border-radius: 0;
    color: #fff;
    cursor: pointer;
    z-index: 5;
    transition: all 0.4s ease-out 0s;
    background-color: #000000;
  }

  .main-btn:hover {
    background-color: #f4c522;
    color: rgb(0, 0, 0);
  }

  .content-description {
    font-size: 18px;
  }
</style>