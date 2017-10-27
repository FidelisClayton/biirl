<template>
  <ul>
    <v-touch
      v-on:press="onPressWorkout(workout, $event)"
      v-for="workout in workouts"
      :key="workout['.key']"
      ripple
    >
      <workout-tile
        :title="workout.name"
        :image="workout.image"
      >
      </workout-tile>
    </v-touch>
    <new-workout-dialog></new-workout-dialog>

    <v-bottom-sheet v-model="sheet" v-bind:persistent="sheetPersistent">
      <v-list class="text-xs-center">
        <v-subheader>Actions</v-subheader>

        <v-list-tile @click="deleteWorkout">
          <v-list-tile-action>
            <v-icon color="indigo">delete</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Delete</v-list-tile-title>
          <v-list-tile-action>
            <v-progress-circular
              v-bind:size="25"
              indeterminate
              color="primary"
              v-if="isDeleting"
            >
            </v-progress-circular>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile @click="closeSheets">
          <v-list-tile-action>
            <v-icon color="indigo">close</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Close</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
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
        sheet: false,
        sheetPersistent: true,
        selectedWorkout: null,
        isDeleting: false
      }
    },
    firebase: {
      workouts: workoutsRef
    },
    methods: {
      onPressWorkout (workout, event) {
        event.preventDefault()
        this.sheetPersistent = true
        this.sheet = true
        this.selectedWorkout = workout

        setTimeout(() => {
          this.sheetPersistent = false
        }, 800)
      },
      closeSheets () {
        this.sheet = false
      },
      deleteWorkout () {
        this.isDeleting = true

        workoutsRef
          .child(this.selectedWorkout['.key'])
          .remove()
          .then(() => {
            this.sheet = false
            this.isDeleting = false
          })
      }
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
