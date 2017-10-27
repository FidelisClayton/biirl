import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyDFjCRNWMI7_N-LW1jyN6_krHUcIgOTQ7g',
  authDomain: 'biirl-fcd03.firebaseapp.com',
  databaseURL: 'https://biirl-fcd03.firebaseio.com',
  projectId: 'biirl-fcd03',
  storageBucket: 'biirl-fcd03.appspot.com',
  messagingSenderId: '1071252870823'
}

let app = Firebase.initializeApp(config)
let db = app.database()

export const workoutsRef = db.ref('workouts')
export const exercises = db.ref('exercises')
