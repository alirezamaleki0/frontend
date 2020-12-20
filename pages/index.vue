<template>
  <!--Navbar-->
  <div class="container-fluid navbar-expand-lg bg-white sticky-top shadow-sm">
    <div class="row py-1">
      <!--login-->
      <div class="col-5 col-sm-6 text-right login">
        <button type="button" class="btn-login btn-sm btn">
          <i class="material-icons d-inline-block">how_to_reg</i>
          <span class="font-size-12 d-none d-sm-inline-block">????</span>
        </button>

        <a href="membership/addmems.html">
          <i class="material-icons d-inline-block">person_add_alt_1</i>
          <span class="font-size-12 d-none d-sm-inline-block">?????</span>
        </a>
      </div>
      <!--/.login-->

      <!--Cart-->
      <div class="col-7 col-sm-6 text-left">
        <ul class="cart">
          <li>
            <a
              href=""
              class="nav-link"
              data-toggle="tooltip"
              data-placement="bottom"
              title="???? ??????? ?? ???? ???"
            >
              <i class="far fa-heart ml-1"></i
              ><span
                class="font-size-11 text-color-silver d-none d-sm-inline-block"
                >??????? ??(0)</span
              >
            </a>
          </li>
          <li>
            <a
              href=""
              class="nav-link"
              data-toggle="tooltip"
              data-placement="bottom"
              title="??? ???? ??? ???? ???"
            >
              <i class="fas fa-shopping-cart ml-1"></i
              ><span
                class="font-size-11 text-color-silver d-none d-sm-inline-block"
                >??? ????(0)</span
              >
            </a>
          </li>
        </ul>
      </div>
      <!--/.Cart-->
    </div>

    <div class="row">
      <nav class="col-12 navbar navbar-expand-md navbar-light">
        <!--Home Link Icon-->
        <a href="#" class="navbar-brand d-none d-md-block" id="homeLink">
          <i class="fas fa-home"></i>
        </a>

        <!--Collapse Button-->
        <button
          type="button"
          class="navbar-toggler btn btn-sm order-0"
          data-toggle="collapse"
          data-target="#nav-set"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!--Navigation Menu-->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Disabled</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  <!--/.Navbar-->
</template> 

<script>
export default {};
</script>

<style>
body,html {
  direction: rtl;
}
.rtl {
  direction: rtl;
}
</style>
