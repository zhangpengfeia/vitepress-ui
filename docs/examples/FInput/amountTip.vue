<template>
  <t-layout-page>
    <t-layout-page-item>
      <f-input
        v-model="vlaue"
        placeholder="请输入金额"
        input-type="amount"
        is-tip
        @change="change"
      />
    </t-layout-page-item>
  </t-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const vlaue = ref<any>(1245354568.25)
const change = (e: any) => {
  console.log("输出的值", e)
  console.log("v-model的值", vlaue.value)
}
</script>
