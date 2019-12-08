<template>
  <router-link :to="`/friends/${id}`">{{ name }}</router-link>
</template>

<script>
  export default {
    name: "Friend",
    props: {
      name: String,
      id: Number
    }
  }
</script>

<style scoped>

</style>
