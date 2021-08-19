<template>
  <div>
    <div class="col-8 offset-2 font-primary">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="black"
        style="text-shadow: 3px 2px 2px #333"
      >
        <b-carousel-slide v-for="project in projects" :key="project.id">
          <img
            slot="img"
            class="d-block img-fluid w-100"
            :src="require('../assets/projects/' + project.imgs[0].img + '.png')"
            alt="image slot"
            v-on:click="loadProject(project.id)"
          />
        </b-carousel-slide>

        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid w-100"
            src="../assets/projects/TimeTrackersProjectView.png"
            alt="image slot"
            v-on:click="loadProject(0)"
          />
          TimeTrackers
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCarousel",
  data() {
    return {
      slide: 0,
    };
  },
  methods: {
    loadProject(id) {
      this.$router.push({ name: "ProjectDetails", params: { id: id } });
    },
    closeModal() {
      this.activeId = null;
      this.showProjectDetails = false;
    },
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>

<style scoped>
.backdrop {
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}
</style>