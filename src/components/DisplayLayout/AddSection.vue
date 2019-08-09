<template>
  <div id="AddSection">
    <div>
      <p>
        <label class="btn" for="modal-1">Add Section</label>
      </p>
    </div>

    <input class="modal-state" id="modal-1" type="checkbox" />
    <div class="modal">
      <label class="modal__bg" for="modal-1"></label>
      <div class="modal__inner">
        <label class="modal__close" for="modal-1"></label>
        <h2>Add Section</h2>
        <form @submit.prevent="addSection" class="pure-form">
          <fieldset>
            <label class="minMargin" for="name">Section Name</label>
            <input class="section" v-model="sectionName" id="name" type="text" />
            <label class="minMargin" for="type">Section Type</label>
            <select class="section" v-model="type" id="type">
              <option>Roped</option>
              <option>Boulder</option>
            </select>
            <button type="submit" class="pure-button pure-button-primary">Submit</button>
            <p v-if="feedback">{{feedback}}</p>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import db from "../../firebase/init";
export default {
  name: "AddSection",
  data() {
    return {
      usersData: [],
      sectionName: null,
      type: null,
      feedback: null
    };
  },
  methods: {
    addSection() {
      if (this.sectionName && this.type) {
        db.collection("users")
          .doc(this.usersData[0].id)
          .collection("section")
          .add({
            sectionName: this.sectionName,
            type: this.type
          });
        let checker = document.getElementById("modal-1");
        checker.checked = false;
      } else {
        this.feedback = "Please fill Forms";
      }
    }
  },
  created() {
    let user = firebase.auth().currentUser;
    db.collection("users")
      .where("user_id", "==", user.uid)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let userData = doc.data();
          userData.id = doc.id;
          this.usersData.push(userData);
        });
      });
  }
};
</script>
<style lang="scss">
.section {
  margin-right: 0.2rem;
}
.minMargin {
  margin-right: 0.1rem;
}

/* [Object] Modal
 * =============================== */
.modal {
  opacity: 0;
  visibility: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: left;
  background: rgba(0, 0, 0, 0.9);
  transition: opacity 0.25s ease;
}

.modal__bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
}

.modal-state {
  display: none;
}

.modal-state:checked + .modal {
  opacity: 1;
  visibility: visible;
}

.modal-state:checked + .modal .modal__inner {
  top: 0;
}

.modal__inner {
  transition: top 0.25s ease;
  position: absolute;
  top: -20%;
  right: 0;
  bottom: 0;
  left: 0;
  width: 70%;
  margin: auto;
  overflow: auto;
  background: #fff;
  border-radius: 5px;
  padding: 1em 2em;
  height: 160px;
}

.modal__close {
  position: absolute;
  right: 1em;
  top: 1em;
  width: 1.1em;
  height: 1.1em;
  cursor: pointer;
}

.modal__close:after,
.modal__close:before {
  content: "";
  position: absolute;
  width: 2px;
  height: 1.5em;
  background: #ccc;
  display: block;
  transform: rotate(45deg);
  left: 50%;
  margin: -3px 0 0 -1px;
  top: 0;
}

.modal__close:hover:after,
.modal__close:hover:before {
  background: #aaa;
}

.modal__close:before {
  transform: rotate(-45deg);
}

@media screen and (max-width: 768px) {
  .modal__inner {
    width: 90%;
    height: 90%;
    box-sizing: border-box;
  }
}

/* Other
 * =============================== */
body {
  padding: 1%;
  font: 1/1.5em sans-serif;
  text-align: center;
}

.btn {
  cursor: pointer;
  background: #27ae60;
  display: inline-block;
  padding: 0.5em 1em;
  color: #fff;
  border-radius: 3px;
}

.btn:hover,
.btn:focus {
  background: #2ecc71;
}

.btn:active {
  background: #27ae60;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) inset;
}

.btn--blue {
  background: #2980b9;
}

.btn--blue:hover,
.btn--blue:focus {
  background: #3498db;
}

.btn--blue:active {
  background: #2980b9;
}
</style>
