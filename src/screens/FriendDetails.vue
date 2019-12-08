<template>
  <div>
    <h3>This is details for {{ friendId }}</h3>
    <button @click="goBackAndSaveData">Go Back</button>
    <div v-if="isSavingData">Saving data... wait 2 seconds</div>
  </div>
</template>

<script>
  export default {
    name: "FriendDetails",
    props: ['friendId'],
    data() {
      return {
        isSavingData: false
      }
    },
    methods: {
      goBackAndSaveData() {
        this.isSavingData = true
        setTimeout(() => {
          this.isSavingData = false
          this.$router.push('/friends')
        }, 2000)
      }
    }
  }
</script>

<style scoped>

</style>
