<template>
  <div>
    <h3>This is details for {{ $route.params.friendId }}</h3>
    <router-link to="/friends">Go Back</router-link>
  </div>
</template>

<script>
  export default {
    name: "FriendDetails"
  }
</script>

<style scoped>

</style>
