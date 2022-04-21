<template>
  <div>
    <div class="d-flex flex-row mx-2">
      <SideBar></SideBar>
      
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

import { mapActions, mapWritableState } from "pinia";
import { usePairStore } from "@/stores/pair.js";

export default {
  data() {
    return {};
  },
  components: {
    SideBar,
  },
  methods: {
  },
  computed: {},
  mounted() {
  },
  created() {},
};
</script>

<style scoped>

</style>
