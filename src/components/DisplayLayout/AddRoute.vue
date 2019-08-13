<template>
  <div id="add-route">
    <label class="btn btn--blue" for="modal-2">Add Route</label>
    <input class="modal-state" id="modal-2" type="checkbox" />
    <div class="modal">
      <label class="modal__bg" for="modal-2"></label>
      <div class="modal__inner">
        <label class="modal__close" for="modal-2"></label>
        <h2>Add Route</h2>
        <form @submit.prevent="addSection" class="pure-form">
          <fieldset>
            <label class="minMargin" for="type">Select Section</label>
            <select class="section" id="type">
              <option>Roped</option>
              <option>Boulder</option>
            </select>
            <label class="minMargin" for="name">Route Name</label>
            <input class="section" id="name" type="text" />

            <button type="submit" class="pure-button pure-button-primary">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddRoute",
  data() {
    return {};
  }
};
</script>
<style lang="scss">
</style>
