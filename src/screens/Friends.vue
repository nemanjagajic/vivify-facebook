<template>
  <div>
    <h2>My friends</h2>
    <div v-for="i in 10" :key="i">
      <Friend :id="i" :name="`Friend ${i}`" />
    </div>
  </div>
</template>

<script>
  import Friend from "../components/Friend"
  export default {
    name: "Home",
    components: {Friend}
  }
</script>

<style scoped>

</style>
