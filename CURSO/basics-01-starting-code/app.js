const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn vue',
      courseGoalB: 'Starting the course and learn vue',
      vueLink: 'https://vuejs.org/',
    }
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random()
      if (randomNumber < 0.5) {
        return this.courseGoalA
      } else {
        return this.courseGoalB
      }
    }
  }
})

app.mount('#user-goal')