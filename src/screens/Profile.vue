<template>
  <div>
    <h2>Profile</h2>
    <router-link class="router-link" to="/profile/info">Info</router-link>
    <router-link class="router-link" to="/profile/settings">Settings</router-link>
    <router-view></router-view>
    <div>some footer</div>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    beforeRouteEnter(to, from, next) {
      console.log('checking if user is authenticated...')
      setTimeout(() => {
        next()
      }, 1000)
    }
  }
</script>

<style>
  .router-link {
    margin-right: 20px;
  }
</style>
