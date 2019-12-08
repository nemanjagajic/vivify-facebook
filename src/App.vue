<template>
  <div>
    <h1>Facebook</h1>
    <router-link class="router-link" to="/">Feeds</router-link>
    <router-link class="router-link" to="/profile">Profile</router-link>
    <router-link class="router-link" to="/friends">Friends</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
  .router-link {
    margin-right: 20px;
  }
</style>
