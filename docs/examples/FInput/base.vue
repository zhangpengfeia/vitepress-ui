<template>
  <f-layout-page>
    <f-layout-page-item>
      <f-input v-model="vlaue" placeholder="请输入内容" @change="change" />
    </f-layout-page-item>
  </f-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const vlaue = ref<any>()
const change = (e: any) => {
  console.log("输出的值", e)
  console.log("v-model的值", vlaue.value)
}
</script>
