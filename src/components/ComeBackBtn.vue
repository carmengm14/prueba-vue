<template>
   <button class="backButton" @click.stop="$router.go(-1)">
      <svg width="16" height="16" viewBox="0 0 24 24">
        <path fill="currentColor" d="M15 18l-6-6 6-6"/>
      </svg>
      Comeback Shop
    </button>
</template>
<script>
export default {
    name: "ComeBackBtn"
}
</script>