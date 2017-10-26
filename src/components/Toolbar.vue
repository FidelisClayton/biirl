<template>
  <v-toolbar
    color="primary"
    class="navbar"
    dark
    app
  >
    <v-toolbar-title class="white--text toolbar-title">Biirl App</v-toolbar-title>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'Toolbar',
    data () {
      return {}
    }
  }
</script>

<style>
  .navbar {
    position: fixed !important;
    top: 0;
    z-index: 100;
  }

  .toolbar-title {
    text-align: center;
    display: block;
    width: 100%;
  }
</style>
