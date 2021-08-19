<template>
  <div class="col-10 offset-1 py-3 my-3 bg-prime text-center">
    <img
      class="w-100"
      :src="require('../assets/projects/' + data.img + '.png')"
    />
    <h5 class="mt-3">
      {{ data.desc }}
    </h5>
  </div>
</template>

<script>
export default {
  name: "ImgComp",
  props: ["data"],
};
</script>

<style scoped>
.bg-prime {
  background-color: #2a313b;
  border-radius: 10px;
  box-shadow: 3px 5px 5px black;
}
</style>