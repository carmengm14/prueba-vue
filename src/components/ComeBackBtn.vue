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
<style>
.backButton {
  display: flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: black;
  color: white;
  transition: 0.3s;
}

.backButton:hover {
  cursor: pointer;
}

.backButton svg {
  transition: transform 0.2s ease;
}

.backButton:hover svg {
  transform: translateX(-6px);
}
</style>
