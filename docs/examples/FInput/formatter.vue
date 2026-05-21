<template>
  <f-layout-page>
    <f-layout-page-item>
      <f-input
        v-model="vlaue"
        :formatter="value => `￥${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
        :parser="value => value.replace(/\￥\s?|(,*)/g, '')"
        @change="change"
      />
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
