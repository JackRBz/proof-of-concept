<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="login"> Login </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'HelloWorld',
  props: {
    msg: String 
  },
  methods: {
    async login() {
      const data = await axios.post('http://localhost/5000/api/auth/login', {email:'test@mail.com', password:'123123123'});
      console.log(data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
