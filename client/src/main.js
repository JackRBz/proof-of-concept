import { createApp, h } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
// const HelloWorldComponent = Helloworld;

// import RegisterComponent from './components/Register.vue';
import Register from './components/Register.vue';
// import LoginComponent from './components/Login.vue';
const LoginComponent = { template: '<p> Login </p>' };
const NotFoundComponent = { template: '<p> Page not found </p>' };

const routes = {
  '/': HelloWorld,
  '/register': Register,
  '/login': LoginComponent,
};

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname,
  }),
  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || NotFoundComponent;
    },
  },
  render() {
    return h(this.CurrentComponent);
  },
};

createApp(SimpleRouter).mount('#app');
