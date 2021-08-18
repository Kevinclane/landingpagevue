<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Aclonica&family=Luckiest+Guy&display=swap");
.type-button {
  cursor: pointer;
  user-select: none;
}
.pill-button-yellow {
  border-radius: 1rem;
  background-color: #fffc01;
  padding: 0.25em 2em 0.25em 2em;
  color: black;
}
.super-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.dynamic-header-3 {
  font-size: 1.5rem;
}
@media screen and (min-width: 992px) {
  .dynamic-header-3 {
    font-size: 2rem;
  }
}
.font-primary {
  font-family: "Aclonica", sans-serif;
}
.color-primary {
  color: aliceblue;
}
</style>
