const app = Vue.createApp({
  data() {
    return {
      name: 'Maria Belen Ceron',
      age: 21,
      linkImage: 'https://static1-es.millenium.gg/articles/9/49/27/9/@/268941-multiversus-jake-combos-900x506-orig-1-amp_main_img-1.jpg',

    }
  },
  methods: {
    favoriteNumber() {
      return Math.random()
    }
  }
})

app.mount('#assignment')