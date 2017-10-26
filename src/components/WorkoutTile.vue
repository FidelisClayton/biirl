<template>
  <li class="workout-tile" ripple>
    <label class="tile-title">{{ title }}</label>
    <img :src="image" class="background-image">
  </li>
</template>

<script>
  export default {
    name: 'WorkoutTile',
    props: {
      title: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: ''
      }
    },
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .workout-tile {
    flex: 1;
    display: flex;
    height: 160px;
    overflow: hidden;
    position: relative;
    background: #000;
    justify-content: center;
    align-items: center;
  }

  .workout-tile .tile-title {
    font-size: 20pt;
    color: white;
    display: block;
    text-align: center;
  }

  .workout-tile .background-image {
    opacity: 0.4;
    width: 100%;
    position: absolute;
  }
</style>
