<template>
  <div id="Delete">
    <div>
      <p>
        <label class="btn" for="modal-3">Delete</label>
      </p>
    </div>

    <input class="modal-state" id="modal-3" type="checkbox" />
    <div class="modal">
      <label class="modal__bg" for="modal-3"></label>
      <div class="modal__inner">
        <label class="modal__close" for="modal-3"></label>
        <h2>Are you sure you would like to delte this section?</h2>

        <button @click="deleteSection" class="pure-button pure-button-primary">Yes</button>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import db from "../firebase/init";
export default {
  data() {
    return {
      sections: []
    };
  },
  methods: {
    deleteSection(id) {
      let user = firebase.auth().currentUser;
      db.collection("users")
        .doc(user.displayName)
        .collection("section")
        .doc(id)
        .delete()
        .then(() => {
          this.sections = this.sections.filter(section => {
            return section.id != id;
          });
        });
    }
  },
  created() {
    let user = firebase.auth().currentUser;
    db.collection("users")
      .doc(user.displayName)
      .collection("section")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let section = doc.data();
          section.id = doc.id;
          this.sections.push(section);
        });
      });
  }
};
</script>
<style lang="scss" scoped>
</style>