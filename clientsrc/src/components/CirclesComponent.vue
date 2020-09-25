<template>
  <div class="circles">
    <i
      v-if="active == true"
      class="fa fa-circle m-2"
      aria-hidden="true"
      onclick="currentDiv(1)"
      type="button"
    />
    <i
      v-else
      class="fa fa-circle-thin m-2"
      aria-hidden="true"
      onclick="currentDiv(1)"
      type="button"
    />
  </div>
</template>

<script>
export default {
  name: "Circles",
  computed: {
    active() {
      if (this.project.name == this.$store.state.activeProject.name) {
        return true;
      } else return false;
    },
  },
  props: ["project"],
};
</script>