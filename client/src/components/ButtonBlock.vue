<template>
  <button
    class="btn form-control"
    :style="{ background: bgColor, color: color }"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    bgColor: String,
    color: String,
  },
};
</script>

<style scoped></style>
