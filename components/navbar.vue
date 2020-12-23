<template>
  <!--Navbar-->
  <div class="container-fluid navbar-expand-lg bg-white sticky-top shadow-sm">
    <div class="row py-1">
      <!--login and register-->
      <div class="col-5 col-sm-6 text-right login">
        <nuxt-link to="/auth/login">
          <b-icon icon="person-fill"></b-icon>
          <span class="font-size-12 d-none d-sm-inline-block">ورود</span>
        </nuxt-link>

        <nuxt-link to="/auth/register">
          <b-icon icon="person-plus-fill"></b-icon>
          <span class="font-size-12 d-none d-sm-inline-block">عضویت</span>
        </nuxt-link>
      </div>
      <!--/.login and register-->

      <!--Cart-->
      <div class="col-7 col-sm-6 text-left">
        <ul class="cart">
          <li>
            <a
              href=""
              class="nav-link"
              data-toggle="tooltip"
              data-placement="bottom"
              title="سبد خرید شما خالی است"
            >
              <i class="far fa-heart ml-1"></i
              ><span
                class="font-size-11 text-color-silver d-none d-sm-inline-block"
                >سبد خرید(0)</span
              >
            </a>
          </li>
          <li>
            <a
              href=""
              class="nav-link"
              data-toggle="tooltip"
              data-placement="bottom"
              title="لیست علاقه ها خالی است"
            >
              <i class="fas fa-shopping-cart ml-1"></i
              ><span
                class="font-size-11 text-color-silver d-none d-sm-inline-block"
                >علاقه ها(0)</span
              >
            </a>
          </li>
        </ul>
      </div>
      <!--/.Cart-->
    </div>

    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">

          <nuxt-link class="navbar-brand" to="/">Boutique Plus</nuxt-link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <nuxt-link class="nav-link active" aria-current="page" to="/">Home</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/dashbord">Dashbord</nuxt-link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  </div>
  <!--/.Navbar-->
</template> 

<script>
export default {

};
</script>

<style>
body,
html {
  direction: rtl;
}
.rtl {
  direction: rtl;
}
</style>
