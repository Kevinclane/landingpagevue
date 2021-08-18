<template>
  <div class="col-12">
    <img
      class="w-100"
      :src="require('../assets/projects/' + data.img + '.png')"
    />
  </div>
</template>

<script>
export default {
  name: "ImgComp",
  props: ["data"],
  computed: {
    img() {
      return this.data.img;
    },
  },
  methods: {},
};
</script>