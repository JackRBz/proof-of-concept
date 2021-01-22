<template>
  <form @submit="checkForm" action="https://vuejs.org/" method="post">
    <div v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
    </div>

    <div>
      <label for="firstName">First Name</label>
      <input id="firstName" v-model="firstName" type="text" name="firstName" />
    </div>

    <div>
      <label for="lastName">Last Name</label>
      <input id="lastName" v-model="lastName" type="text" name="lastName" />
    </div>

    <div>
      <label for="email">Email</label>
      <input id="email" v-model="email" type="text" name="email" />
    </div>

    <div>
      <label for="password">Password</label>
      <input id="password" v-model="password" type="text" name="password" />
    </div>

    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>
</template>

<script>
export default {
  name: "Register",
  props: {
    msg: String
  },
  data() {
    return {
      errors: [],
      name: null,
      age: null,
      movie: null
    };
  },
  methods: {
    checkForm: function(e) {
      if (this.name && this.age) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.age) {
        this.errors.push("Age required.");
      }

      e.preventDefault();
    }
  }
};
</script>

<style></style>
