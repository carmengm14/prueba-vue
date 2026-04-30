<template>
  <button class="backButton" @click.stop="$router.go(-1)">
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>

    Comeback
  </button>
</template>
<script>
export default {
  name: "ComeBackBtn",
};
</script>
