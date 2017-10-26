<template>
  <ul>
    <WorkoutTile
      v-for="workout in workouts"
      :title="workout.name"
      :image="workout.image"
      :key="workout.id"
    >
    </WorkoutTile>
  </ul>
</template>

<script>
  import WorkoutTile from './WorkoutTile'

  export default {
    name: 'Workouts',
    components: {
      WorkoutTile
    },
    data () {
      return {
        workouts: [
          {
            id: 1,
            name: 'Pernas',
            image: 'http://saudavelbrasil.org/wp-content/uploads/2016/07/treino-de-perna.jpg'
          },
          {
            id: 2,
            name: 'Biceps e costas',
            image: 'http://dicasdemusculacao.org/wp-content/uploads/phil-heath-treino-biceps.jpg'
          },
          {
            id: 3,
            name: 'Peito e tríceps',
            image: 'http://dicasdemusculacao.org/wp-content/uploads/supino-reto-exercicio-incompreendido.jpg'
          },
          {
            id: 4,
            name: 'Ombros',
            image: 'http://ganharmassamuscular.net/wp-content/uploads/2015/07/treino-de-ombros-ganharmassamuscular.net_.jpg'
          }
        ]
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
