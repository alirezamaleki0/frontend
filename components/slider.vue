<template>
  <!--Slider-->
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 p-0">
        <div
          id="myCarousel"
          class="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-side-to="0" class="active"></li>
            <li data-target="#myCarousel" data-side-to="1"></li>
            <li data-target="#myCarousel" data-side-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="assets/img/banner3_02.jpg"
                alt="first image"
              />
              <div class="carousel-caption">
                <p>??????? ???????? ????? ????</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="assets/img/banner3_03.jpg"
                alt="second image"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="assets/img/banner3_01.jpg"
                alt="third image"
              />
            </div>
          </div>
          <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#myCarousel" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!--Slider-->
</template>

<script>
export default {};
</script>

<style>
</style>