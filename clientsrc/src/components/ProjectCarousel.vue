<template>
  <div class="col-8 offset-2 pt-5">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="black"
      style="text-shadow: 3px 2px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        img-src="../assets/projects/TimeTrackersProjectView.png"
      >
        <h1>TimeTrackers</h1>
      </b-carousel-slide>
      <b-carousel-slide img-src="../assets/projects/Volunteer.png">
        Volunteer
      </b-carousel-slide>
      <b-carousel-slide img-src="../assets/projects/BugLogger.png">
        <h1>Bug Logger</h1>
      </b-carousel-slide>
      <b-carousel-slide img-src="../assets/projects/TexasHoldemTable.png">
        <h1>Texas Hold 'em</h1>
      </b-carousel-slide>
      <b-carousel-slide img-src="../assets/projects/Pinterest.png">
        <h1>Pinterest Clone</h1>
      </b-carousel-slide>
      <b-carousel-slide img-src="../assets/projects/IdleMiner.png">
        <h1>Town Miner</h1>
      </b-carousel-slide>
      <b-carousel-slide img-src="../assets/projects/Inspire.png">
        <h1>Google's Inspire Clone</h1>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
// import BCarouselSlide from "./components/BCarouselSlide.vue";
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  components: {
    // BCarouselSlide,
  },
};
</script>

<style scoped>
h1 {
  font-family: "Aclonica", sans-serif;
}
.test {
  margin-top: 20vh;
}
</style>