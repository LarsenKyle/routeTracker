<template>
  <div class="sign">
    <h2 class="heading">Sign Up</h2>
    <div class="contain">
      <form @submit.prevent="signup" class="pure-form pure-form-aligned">
        <fieldset>
          <div class="pure-control-group">
            <label for="name">Username</label>
            <input v-model="username" name="username" type="text" placeholder="Username" />
            <span class="pure-form-message-inline">This is a required field.</span>
          </div>

          <div class="pure-control-group">
            <label for="password">Password</label>
            <input v-model="password" name="password" type="password" placeholder="Password" />
          </div>
          <div class="pure-control-group">
            <label for="repeatPass">Repeat Password</label>
            <input id="repeatPass" type="password" placeholder="Password" />
          </div>
          <div class="pure-control-group">
            <label for="email">Email Address</label>
            <input v-model="email" name="email" type="email" placeholder="Email Address" />
          </div>
          <p class="feedback" v-if="feedback">{{ feedback }}</p>
          <button class="pure-button pure-button-primary float-button">Submit</button>
        </fieldset>
      </form>
    </div>
  </div>
</template>
<script>
import slugify from "slugify";
import db from "../firebase/init";
import firebase from "firebase";
export default {
  name: "Signup",
  data() {
    return {
      email: null,
      password: null,
      repeatPass: null,
      username: null,
      slug: null,
      feedback: null
    };
  },
  methods: {
    signup() {
      if (this.username && this.email && this.password) {
        this.slug = slugify(this.username, {
          replacement: "-",
          remove: /[$*_+~.()'"\-:@]/g,
          lower: true
        });
        let ref = db.collection("users").doc(this.slug);
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = "This username already exists";
          } else {
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .then(cred => {
                ref.set({
                  username: this.username,

                  user_id: cred.user.uid
                });
              })

              .then(() => this.$router.push({ name: "about" }))
              .catch(err => {
                this.feedback = err.message;
              });
          }
        });
      } else {
        this.feedback = "You must complete all feilds";
      }
    }
  }
};
</script>
<style  lang="scss">
@import "@/config.scss";
.contain {
  margin-top: 2rem;
  width: 40%;
  margin: 0 auto;
}
.heading {
  text-align: center;
}
.sign {
  color: $secondary-color;
}
form .float-button {
  float: right;
  margin-right: 8rem;
  margin-top: 1rem;
}
.feedback {
  color: red;
  text-align: center;
}
</style>
