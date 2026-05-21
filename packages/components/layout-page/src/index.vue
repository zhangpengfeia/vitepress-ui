<template>
  <div
    ref="FLayoutPageRef"
    class="f_layout_page"
    :class="{ layout_page_no_margin: isNoMargin }"
    @scroll="(e:any) => scrollTop = e.target.scrollTop"
  >
    <slot />
    <div v-if="showGoTopButton" class="back_to_top">
      <div v-if="isShowGoTopButton" @click="backToTop">
        <el-icon v-bind="{ size: 24, ...$attrs }"><CaretTop /></el-icon>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onActivated, onMounted, ref, watch } from "vue"
import { CaretTop } from "@element-plus/icons-vue"
defineOptions({
  name: "FLayoutPage"
})
export interface FLayoutPageProps {
  keepScrollDisabled?: boolean
  isNoMargin?: boolean
  showGoTopButton?: boolean
  scrollToTop?: number
}

const props = withDefaults(defineProps<FLayoutPageProps>(), {
  keepScrollDisabled: false,
  isNoMargin: false,
  showGoTopButton: true,
  scrollToTop: 100
})
const isShowGoTopButton = ref(false)

const FLayoutPageRef = ref(null)
const scrollTop = ref(0)
watch(
  () => scrollTop.value,
  newVal => {
    if (newVal > props.scrollToTop) {
      isShowGoTopButton.value = true
    } else {
      isShowGoTopButton.value = false
    }
  }
)
const backToTop = () => {
  scrollTop.value = 0
  ;(FLayoutPageRef.value as any).scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
onMounted(() => {
  const pageItems = (FLayoutPageRef.value as any).querySelectorAll(".f_layout_page_item")
  if (pageItems.length === 2) {
    pageItems[0].style.marginBottom = "8px"
  }
  if (pageItems.length > 2) {
    pageItems.forEach((item: any) => {
      item.style.marginBottom = "8px"
    })
    pageItems[pageItems.length - 1].style.marginBottom = "0"
  }
})

onActivated(() => {
  if (!props.keepScrollDisabled) {
    ;(FLayoutPageRef.value as any).scrollTop = scrollTop
  }
})
</script>
