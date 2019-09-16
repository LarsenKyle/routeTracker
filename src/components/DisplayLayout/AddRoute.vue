<template>
  <div id="add-route">
    <label class="btn btn--blue" for="modal-2">Add Route</label>
    <input class="modal-state" id="modal-2" type="checkbox" />
    <div class="modal">
      <label class="modal__bg" for="modal-2"></label>
      <div class="modal__inner">
        <label class="modal__close" for="modal-2"></label>

        <h2>Add Route</h2>
        <form @submit.prevent="addRoute" class="pure-form">
          <fieldset>
            <label class="minMargin" for="type">Select Section</label>
            <select v-model="section" class="section" id="type">
              <option :key="index" v-for=" (section, index) in sections">{{section.name}}</option>
            </select>
            <label class="minMargin" for="id">Name</label>
            <input v-model="id" class="section" id="id" type="text" />
            <label class="minMargin" for="color">Color</label>
            <input v-model="color" class="section" id="color" type="text" />
            <label class="minMargin" for="grade">Grade</label>
            <input v-model="grade" class="section" id="grade" type="text" />
            <label class="minMargin" for="style">Style</label>
            <input v-model="style" class="section" id="style" type="text" />
            <p v-if="feedback">{{feedback}}</p>
            <button type="submit" class="pure-button pure-button-primary">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import firebase, { firestore } from "firebase";
import db from "../../firebase/init";
export default {
  name: "AddRoute",
  data() {
    return {
      sections: [],
      section: null,
      id: null,
      grade: null,
      style: null,
      color: null,
      feedback: null
    };
  },
  created() {
    let user = firebase.auth().currentUser;
    db.collection("users")
      .doc(user.displayName)
      .collection("section")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let sections = doc.data();
          this.sections.push(sections);
        });
      });
  },
  methods: {
    addRoute() {
      let user = firebase.auth().currentUser;
      if (this.id && this.grade && this.color) {
        db.collection("users")
          .doc(user.displayName)
          .collection("routes")
          .add({
            section: this.section,
            id: this.id,
            grade: this.grade,
            color: this.color
          });
        this.id = "";
        this.grade = "";
        this.color = "";
        let checker = document.getElementById("modal-2");
        checker.checked = false;
      } else {
        this.feedback = "Fill in Name, Grade, and Color";
      }
    }
  }
};
</script>
<style lang="scss">
</style>
