<template>
  <main>
    <v-content>
      <v-container fluid style="padding: 56px 0 56px;">
        <router-view></router-view>
      </v-container>
    </v-content>
  </main>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>
