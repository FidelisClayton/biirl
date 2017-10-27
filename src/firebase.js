import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyDFjCRNWMI7_N-LW1jyN6_krHUcIgOTQ7g',
  authDomain: 'biirl-fcd03.firebaseapp.com',
  databaseURL: 'https://biirl-fcd03.firebaseio.com',
  projectId: 'biirl-fcd03',
  storageBucket: 'biirl-fcd03.appspot.com',
  messagingSenderId: '1071252870823'
}

const firebase = Firebase.initializeApp(config)
export const db = firebase.database()
export const storage = firebase.storage()

export const workoutsRef = db.ref('workouts')
export const exercisesRef = db.ref('exercises')
export const workoutsFilesRef = storage.ref('workout_files')

export const FILES_BASE = 'gs://biirl-fcd03.appspot.com'

export default firebase
