<template>
  <div class="container-fluid sticky-top nav-bg d-flex align-items-center">
    <div class="row w-100">
      <div class="col-3">
        <i class="fa fa-2x fa-home type-button" aria-hidden="true"></i>
      </div>
      <div
        class="col-6 d-flex justify-content-start align-items-center hide-sm"
      >
        <span>
          <a class="nav-link" href="#About"> About </a>
        </span>
        <span>
          <a class="nav-link" href="#Tech"> Tech </a>
        </span>
        <span>
          <a class="nav-link" href="#Projects"> Projects </a>
        </span>
        <span>
          <a class="nav-link" href="#Demos"> Demos </a>
        </span>
        <span>
          <a class="nav-link" href="#Contact"> Contact </a>
        </span>
      </div>
      <div class="col-3 super-center">
        <span class="pill-button-yellow type-button">Resume</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.nav-bg {
  background: #2a313b;
  color: aliceblue;
  height: 5vh;
  z-index: 10;
}
span {
  font-weight: bold;
  margin-right: 2em;
}
.hide-sm {
  visibility: hidden;
}
@media screen and (min-width: 992px) {
  .hide-sm {
    visibility: visible;
  }
}
.nav-link {
  text-decoration: none;
  color: white;
}
.nav-link:hover {
  text-decoration: none;
  color: #29084a;
  background-color: transparent;
}
</style>
