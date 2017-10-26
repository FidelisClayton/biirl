<template>
  <v-app>
    <Drawer></Drawer>
    <Toolbar></Toolbar>
    <Content></Content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import Content from './components/Content'
import Drawer from './components/Drawer'
import Toolbar from './components/Toolbar'

export default {
  name: 'app',
  components: {
    Content,
    Drawer,
    Toolbar
  }
}
</script>

<style>
</style>
