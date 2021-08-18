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
        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid w-100"
            src="../assets/projects/Volunteer.png"
            alt="image slot"
            v-on:click="loadProject(1)"
          />
          Volunteer
        </b-carousel-slide>
        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid w-100"
            src="../assets/projects/BugLogger.png"
            alt="image slot"
            v-on:click="loadProject(2)"
          />
          Bug Logger
        </b-carousel-slide>
        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid w-100"
            src="../assets/projects/TexasHoldemTable.png"
            alt="image slot"
            v-on:click="loadProject(3)"
          />
          Texas Hold 'em
        </b-carousel-slide>
        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid w-100"
            src="../assets/projects/Pinterest.png"
            alt="image slot"
            v-on:click="loadProject(4)"
          />
          Pinterest Clone
        </b-carousel-slide>
        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid w-100"
            src="../assets/projects/IdleMiner.png"
            alt="image slot"
            v-on:click="loadProject(5)"
          />
          Town Miner
        </b-carousel-slide>
        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid w-100"
            src="../assets/projects/Inspire.png"
            alt="image slot"
            v-on:click="openModal(6)"
          />
          Google's Inspire Clone
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