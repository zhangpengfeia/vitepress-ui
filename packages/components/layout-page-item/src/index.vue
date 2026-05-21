<template>
  <section class="f_layout_page_item" :class="{ page_item_no_margin: isNoMargin }">
    <slot />
  </section>
</template>
<script setup lang="ts" name="FLayoutPageItem">
defineOptions({
  name: "FLayoutPageItem"
})
defineProps({
  isNoMargin: {
    type: Boolean,
    default: false
  }
})
</script>
