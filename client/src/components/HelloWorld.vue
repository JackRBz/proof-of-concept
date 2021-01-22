<template>
  <div>
    <h1>{{ msg }}</h1>
    <button  v-on:click="login">login</button>
    <button  v-on:click="register">register</button>
  </div>
</template>

<script>
import axios from 'axios';

const transport = axios.create({
  headers: {
    'content-Type': 'application/json',
  },
});

// transport.interceptors.request.use(
//   (config) => {
//     //const authToken = localStorage.getItem('event-logger-authToken');

//     // if (authToken) {
//     //   config.headers.Authorization = `Bearer ${authToken}`;
//     // }

//     return config;
//   },
//   (err) => Promise.reject(err),
// );

// // Log user out if there is ever a 401 status code returned
// transport.interceptors.response.use(
//     (response) => response,
//     async (err) => {
//         if (err.response.status === 401 && window.location.pathname !== "/auth/login") {
//             await api.logUserOut();
//             localStorage.removeItem("event-logger-authToken");
//             localStorage.removeItem("event-logger-user");
//             alert("Your session has expired. You have been logged out");
//             document.location.href = "/auth/login"
//         }
//         return Promise.reject(err)
//     }
// )
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {
    async login() {
      // const data = await transport.post('http://localhost:5000/api/auth/login', { email: 'test@mail.com', password: '123123123' });
      // console.log(data);
      const data = await transport.get('http://localhost:5000/api/role');
      console.log(data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
