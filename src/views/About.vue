<template>
  <div class="about">
    <AddSection />
  </div>
</template>
<script>
import RouteDisplay from "../components/RouteDisplay";
import Signup from "@/components/Signup";
import AddSection from "../components/DisplayLayout/AddSection";
export default {
  name: "About",
  components: {
    RouteDisplay,
    Signup,
    AddSection
  }
};
</script>
