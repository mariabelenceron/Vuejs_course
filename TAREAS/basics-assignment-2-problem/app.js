const app = Vue.createApp({
  data() {
    return {
      message: '',
      messageEnter: '',
    }
  },
  methods: {
    onClick() {
      alert("You clicked me!")
    },
    onKeyUp(event) {
      this.message = event.target.value
    },
    onEnter(event) {
      this.messageEnter = this.message
    }
  }
})

app.mount('#assignment')