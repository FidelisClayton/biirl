<template>
  <ul>
    <workout-tile
      v-for="workout in workouts"
      :title="workout.name"
      :image="workout.image"
      :key="workout.id"
    >
    </workout-tile>
    <new-workout-dialog></new-workout-dialog>
  </ul>
</template>

<script>
  import WorkoutTile from './WorkoutTile'

  import { workoutsRef } from '../firebase'
  import NewWorkoutDialog from './NewWorkoutDialog'

  export default {
    name: 'Workouts',
    components: {
      WorkoutTile,
      NewWorkoutDialog
    },
    data () {
      return {
      }
    },
    firebase: {
      workouts: workoutsRef
    }
  }
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
</style>
