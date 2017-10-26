<template>
  <v-bottom-nav
    app
    class="primary bottom-nav"
    :value="true"
    :active.sync="current"
  >
    <v-btn flat dark value="diet" @click="goTo('/diet')">
      <span class="food-icon"></span>
    </v-btn>
    <v-btn flat dark value="workouts-history" @click="goTo('/workouts-history')">
      <v-icon>date_range</v-icon>
    </v-btn>
    <v-btn flat dark value="workouts" @click="goTo('/workouts')">
      <span class="workout-icon"></span>
    </v-btn>
    <v-btn flat dark value="menu" @click="goTo('/home')">
      <v-icon>menu</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
  export default {
    name: 'BottomNav',
    data () {
      return {
        current: 'workouts'
      }
    },
    methods: {
      goTo (route) {
        this.$router.push(route)
      }
    }
  }
</script>

<style>
  .workout-icon {
    width: 56px;
    height: 56px;
    background-image: url(../assets/icons/dumbbell-variant-outline.svg);
    background-size: 33px 33px;
    background-repeat: no-repeat;
    background-position: center;
  }

  .food-icon {
    width: 56px;
    height: 56px;
    background-image: url(../assets/icons/lunch.svg);
    background-size: 25px 25px;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
