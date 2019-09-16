<template>
  <div class="route-display">
    <Chart v-bind:routes="routes" />
    <AddSection />
    <AddRoute />
    <div class="container">
      <div v-for="section in sections" :key="section.id">
        <div class="section">
          <h5 @click="toggleRoute">{{ section.name }}</h5>
          <i @click="toggleRoute" class="material-icons">arrow_drop_down_circle</i>
        </div>
        <div id="hide" class="select">
          <table id="route-table" class="pure-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Grade</th>
                <th>Color</th>
                <th>Style</th>
              </tr>
            </thead>
            <tbody v-for="route in routes" :key="route.id">
              <tr v-if="section.name == route.section" class="route-container">
                <td>{{route.id}}</td>
                <td>{{route.grade}}</td>
                <td>{{route.color}}</td>
                <td>{{route.style}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import db from "../firebase/init";
import AddSection from "./DisplayLayout/AddSection";
import AddRoute from "./DisplayLayout/AddRoute";
import Delete from "../components/Delete";
import Chart from "../components/DisplayLayout/Chart";
export default {
  name: "RouteDisplay",
  components: {
    AddSection,
    AddRoute,
    Delete,
    Chart
  },

  data() {
    return {
      sections: [
        {
          name: "The Overhang",
          type: "sport"
        },
        {
          name: "The Egg",
          type: "boulder"
        }
      ],
      routes: [
        {
          section: "The Overhang",
          id: "Lime Stoned",
          grade: "V4",
          color: "Pink",
          date: "12/24/2018",
          style: "Thugy Crimp",
          notes: "Crux is reachy add a right foot for accessibility"
        },
        {
          section: "The Overhang",
          id: "Horshoes and Hand Grenades",
          grade: "V5",
          color: "Pink",
          date: "12/24/2018",
          style: "Thugy Crimp",
          notes: "Crux is reachy add a right foot for accessibility"
        },
        {
          section: "The Egg",
          id: "Crimp Scampi",
          grade: "V5",
          color: "Pink",
          date: "12/24/2018",
          style: "Thugy Crimp",
          notes: "Crux is reachy add a right foot for accessibility"
        }
      ]
    };
  },
  methods: {
    toggleRoute(e) {
      const route = e.target.parentNode.nextSibling;

      if (route.hasAttribute("id")) {
        route.removeAttribute("id");
      } else {
        route.setAttribute("id", "hide");
      }
    }
  },
  created() {
    let user = firebase.auth().currentUser;

    db.collection("users")
      .doc(user.displayName)
      .collection("section")
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type == "added") {
            let doc = change.doc;
            this.sections.push({
              name: doc.data().name,
              type: doc.data().type
            });
          }
        });
      });
    // Get and display routes
    db.collection("users")
      .doc(user.displayName)
      .collection("routes")
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type == "added") {
            let doc = change.doc;
            this.routes.push({
              id: doc.data().id,
              color: doc.data().color,
              grade: doc.data().grade,
              section: doc.data().section
            });
          }
        });
      });
  }
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  width: 80%;
}
.route {
  display: inline-flex;
  p {
    margin-right: 1rem;
  }
}
.section {
  height: 2.2rem;
  display: flex;
  align-items: center;
  .flexRight {
    margin-left: auto;
  }
  h5 {
    font-size: 1.3rem;
    margin-right: 0.4rem;
  }
}
#hide {
  display: none;
  transition: all 0.5s ease-out;
}
#route-table {
  width: 40rem;
}
</style>
