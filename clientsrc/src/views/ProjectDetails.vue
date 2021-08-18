<template>
  <div class="container">
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
      <div class="col-lg-4">
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
      <div class="col-lg-8">
        <div class="row">
          <img-comp
            v-for="(img, index) in project.imgs"
            :key="`img-${index}`"
            :data="img"
          />
        </div>
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