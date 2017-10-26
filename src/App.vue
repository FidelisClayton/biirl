<template>
  <v-app>
    <Toolbar></Toolbar>
    <MainContent></MainContent>
    <BottomNav></BottomNav>
  </v-app>
</template>

<script>
import MainContent from './components/Content'
import Toolbar from './components/Toolbar'
import BottomNav from './components/BottomNav'

export default {
  name: 'app',
  components: {
    MainContent,
    Toolbar,
    BottomNav
  }
}
</script>

<style>
</style>
