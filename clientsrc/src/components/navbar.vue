<template>
  <div class="container-fluid sticky-top nav-bg d-flex align-items-center">
    <div class="row w-100">
      <div class="col-3">
        <i class="fa fa-2x fa-home type-button" aria-hidden="true"></i>
      </div>
      <div class="col-6 d-flex justify-content-start align-items-center">
        <span class="type-button">About</span>
        <span class="type-button">Projects</span>
        <span class="type-button">Tech</span>
        <span class="type-button">Demos</span>
        <span class="type-button">Contact</span>
      </div>
      <div class="col-3 super-center">
        <span class="pill-button-yellow">Resume</span>
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
</style>
