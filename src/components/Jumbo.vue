
<script>
export default {
  name: "Jumbo"
}
</script>

<template>

  <div class="mb-jumbo">
    <h2>Jumbo</h2>
  </div>

</template>

<style lang="scss" scoped>
@use "../scss/vars" as *;

  .mb-jumbo{
    background-color: lighten($jumbo-color,32%);
    background-image: url("../assets/img/background-pattern-wavify.png");
  }
</style>