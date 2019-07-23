<template>
  <div class="navbar">
    <nav>
      <div class="nav-container">
        <div class="logo">
          <h1>Route Tracker</h1>
        </div>
        <div class="links">
          <ul>
            <li>Log In</li>
            <li @click="logOut">Log Out</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import db from "@/firebase/init.js";
import firebase from "firebase";

export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Signed Out");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style style lang="scss">
@import "@/config.scss";
* {
  box-sizing: border-box;
}
.nav-container {
  background: $secondary-color;
  display: flex;
  color: white;
}
.logo {
  padding-left: 1rem;
}
.links {
  margin-left: auto;
  padding-right: 2rem;
  ul {
    list-style-type: none;
    display: flex;
    padding-top: 0.4rem;
    li {
      padding: 0.6rem;
    }
    li:hover {
      cursor: pointer;
    }
  }
}
</style>
