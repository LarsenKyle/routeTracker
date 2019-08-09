<template>
  <div class="navbar">
    <nav>
      <div class="nav-container">
        <div class="logo">
          <h1>
            <router-link to="/">Route Tracker</router-link>
          </h1>
        </div>
        <div class="links">
          <ul>
            <li>
              <router-link to="login">Log In</router-link>
            </li>
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
h1 {
  a {
    text-decoration: none;
    color: white;
  }
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
      text-decoration: none;
      a {
        text-decoration: none;
        color: white;
      }
    }
    li:hover {
      cursor: pointer;
    }
  }
}
</style>
