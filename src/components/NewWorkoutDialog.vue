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
    dialog: false
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        const file = this.$refs.fileUpload.files[0]
        const storageRef = storage.ref(`workout_files/${file.name}`)

        const uploadTask = storageRef.put(file)

        uploadTask.on('state_changed',
          null,
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
  bottom: 70px
}

.b-form {
  padding: 24px;
}
</style>
