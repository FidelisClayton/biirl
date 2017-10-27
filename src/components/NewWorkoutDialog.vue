<template>
  <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay=false>
    <v-btn
      fab
      dark
      color="primary"
      slot="activator"
      fixed
      right
      class="btn-add"
    >
      <v-icon dark>add</v-icon>
    </v-btn>
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon @click.native="dialog = false" dark>
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>New Workout</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark flat @click.native="submit">Save</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-progress-linear
        v-bind:indeterminate="progress.query"
        v-bind:query="true"
        v-model="progress.value"
        v-bind:active="progress.show"
        height="5"
        color="success"
        class="b-progress"
      ></v-progress-linear>

      <v-form class="b-form" v-model="valid" ref="form" lazy-validation>
        <v-text-field
          label="Name"
          v-model="name"
        >
        </v-text-field>
        <input type="file" value="upload" ref="fileUpload" />
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import {
  workoutsRef,
  workoutsFilesRef,
  storage
} from '../firebase'

export default {
  name: 'NewWorkoutDialog',
  data: () => ({
    name: '',
    valid: true,
    image: '',
    dialog: false,
    progress: {
      query: false,
      value: 0,
      show: false
    }
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        this.progress.show = true

        const file = this.$refs.fileUpload.files[0]
        const storageRef = storage.ref(`workout_files/${file.name}`)

        const uploadTask = storageRef.put(file)

        uploadTask.on('state_changed',
          snap => {
            if (snap.bytesTransferred === 0 && this.progress.query === false) {
              this.progress.query = true
            } else {
              this.progress.query = false
            }

            this.progress.value =
              (snap.bytesTransferred / snap.totalBytes) * 100
          },
          console.log,
          () => {
            workoutsFilesRef
              .child(file.name)
              .getDownloadURL()
              .then(url => {
                workoutsRef.push({
                  name: this.name,
                  image: url
                }, error => {
                  if (!error) {
                    this.dialog = false
                    this.progress.show = false
                    this.progress.value = 0
                  }
                })
              })
          }
        )
      }
    }
  }
}
</script>

<style scoped>
.btn-add {
  bottom: 70px;
}

.b-form {
  padding: 24px;
}

.b-progress {
  margin: 0;
}
</style>
