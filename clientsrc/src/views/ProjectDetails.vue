<template>
  <div class="container color-primary bg">
    <div class="row">
      <div class="col mt-3">
        <i
          class="fa fa-2x fa-arrow-circle-left"
          aria-hidden="true"
          @click="returnToHome"
        ></i>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h1 class="text-center my-3">{{ project.name }}</h1>
      </div>
      <div class="col-10 offset-1 col-lg-8 offset-lg-0 order-lg-2">
        <div class="row">
          <img-comp
            v-for="(img, index) in project.imgs"
            :key="`img-${index}`"
            :data="img"
          />
        </div>
      </div>
      <div class="col-10 offset-1 col-lg-4 offset-lg-0 order-lg-1">
        <ul class="">
          <li
            class="my-4"
            v-for="(d, index) in project.descriptions"
            :key="`d-${index}`"
          >
            {{ d }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ImgComp from "../components/ImgComp.vue";
export default {
  name: "ProjectDetails",
  mounted() {
    this.$store.dispatch("setActiveProject", this.$route.params.id);
  },
  methods: {
    returnToHome() {
      this.$router.push({ name: "Home" });
    },
  },
  computed: {
    project() {
      return this.$store.state.activeProject;
    },
  },
  components: { ImgComp },
};
</script>

<style scoped>
.bg {
  background-color: #29084a;
}
li {
  background-color: #2a313b;
  padding: 1em;
  border-radius: 10px;
  box-shadow: 3px 5px 5px black;
  list-style-type: none;
}
</style>