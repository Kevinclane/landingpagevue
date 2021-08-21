<template>
  <div>
    <div class="col-6 offset-3 font-primary">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        style="text-shadow: 3px 2px 2px #333"
      >
        <b-carousel-slide v-for="tech in techs" :key="tech.id">
          <img
            slot="img"
            class="d-block w-100 img-fluid"
            :src="require('../assets/techs/' + tech.img + '.png')"
            alt="image slot"
          />
          {{ tech.name }}
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechCarousel",
  data() {
    return {
      slide: 0,
    };
  },
  methods: {},
  computed: {
    techs() {
      return this.$store.state.techs;
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