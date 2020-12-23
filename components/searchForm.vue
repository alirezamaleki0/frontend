<template>
  <!-- Search form -->
  <div
    class="container-fluid collapsing bg-light position-absolute shadow-sm"
    id="search-form"
    style="z-index: 2"
  >
    <div class="row">
      <div class="col-12">
        <form
          class="form-inline d-flex justify-content-center md-form search search-2 my-5"
        >
          <input
            class="form-control w-75 bg-light"
            type="text"
            placeholder="نام محصول یا دسته ی دلخواه خود را وارد نمایید"
            aria-label="Search"
          />
          <i class="fas fa-search fa-1x mr-2" aria-hidden="true"></i>
        </form>
      </div>
    </div>
  </div>
  <!--/.Search Form-->
</template>

<script>
export default {};
</script>

<style>
</style>