<template>
  <div class="card">
    <a :href="activeProject.link" target="_blank">
      <img
        :src="require('../assets/' + activeProject.img)"
        alt="error loading image"
        class="w-100"
      />
      <div class="card-body bg-white">
        <h5 class="card-title text-black text-center">
          {{ activeProject.name }}
        </h5>
        <p class="card-text text-black">{{ activeProject.description }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "ProjectComponent",
  computed: {
    activeProject() {
      return this.$store.state.activeProject;
    },
  },
};
</script>

<style scoped>
</style>