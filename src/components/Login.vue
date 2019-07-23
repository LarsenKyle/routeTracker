<template>
  <div class="login">
    <h2 class="heading">Log In</h2>
    <div class="contain">
      <form @submit.prevent="logIn" class="pure-form pure-form-aligned">
        <fieldset>
          <div class="pure-control-group">
            <label for="email">Email Address</label>
            <input v-model="email" name="email" type="email" placeholder="Email Address" />
          </div>

          <div class="pure-control-group">
            <label for="password">Password</label>
            <input v-model="password" name="password" type="password" placeholder="Password" />
          </div>

          <p class="feedback" v-if="feedback">{{feedback}}</p>
          <button class="pure-button pure-button-primary">Submit</button>
        </fieldset>
      </form>
    </div>
  </div>
</template>
<script>
import db from "@/firebase/init.js";
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      feedback: null
    };
  },
  methods: {
    logIn() {
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            this.$router.push({ name: "about" });
          })
          .catch(err => {
            this.feedback = err.message;
          });
      } else {
        this.feedback = "Please fill all forms";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

