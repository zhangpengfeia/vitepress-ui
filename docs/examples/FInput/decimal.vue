<template>
  <t-layout-page>
    <t-layout-page-item>
      <f-input
        v-model="vlaue"
        placeholder="请输入数字（含小数点）"
        input-type="decimal"
        :decimal-limit="4"
        @change="change"
      />
    </t-layout-page-item>
  </t-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const vlaue = ref<any>()
const change = (e: any) => {
  console.log("输出的值", e)
  console.log("v-model的值", vlaue.value)
}
</script>
