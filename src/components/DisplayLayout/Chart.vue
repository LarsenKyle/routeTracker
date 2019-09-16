<template>
  <div id="Chart">
    <h2>Chart</h2>
    <canvas id="routeChart"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js";
export default {
  name: "Chart",
  props: ["routes"],
  data() {
    return {};
  },

  methods: {
    chartData() {
      let chart = document.getElementById("routeChart");
    }
  },
  mounted() {
    console.log(this.routes);
  }
};
</script>
<style lang="scss">
</style>
