const { createApp } = Vue
    
createApp({
  data() {
    return {
      titulo: 'Hello Vue!',
      input_name: ""
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      this.titulo = this.input_name;
      this.input_name = '';
    }
  }
}).mount('#app')