<template>
  <div class="about">
    <RouteDisplay />
    <Signup />
  </div>
</template>
<script>
import RouteDisplay from "../components/RouteDisplay";
import Signup from "@/components/Signup";
export default {
  name: "About",
  components: {
    RouteDisplay,
    Signup
  }
};
</script>
