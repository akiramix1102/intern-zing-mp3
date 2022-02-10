<template>
  <div class="home">sdsfse</div>
</template>

<script>
import getRepository from "../service";
const apiHome = getRepository("home");
export default {
  name: "Home",
  components: {},
  mounted() {
    apiHome.getListHome();
  },
};
</script>
