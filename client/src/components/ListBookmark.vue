<template>
  <li class="list-group mb-3">
    <button @click="goDetail" class="btn shadow-sm rounded-pill">
      <img :src="bookmark.Pair.imgUrl" style="width: 20px;" class="mx-1" alt="">
      {{bookmark.Pair.name}}
    </button>
  </li>
</template>

<script>
export default {
  props: {
    bookmark: Object
  },
  methods: {
    goDetail() {
      this.$emit("goToDetail", this.$props.bookmark.PairId)
    }
  }
};
</script>

<style scoped>
.btn:hover {
  background-color: #04a361;
  color: white;
}
</style>