<template>
  <t-layout-page>
    <t-layout-page-item>
      <el-radio-group v-model="isShowErrorTip" aria-label="size control" size="small">
        <el-radio-button :value="true">开启错误提示</el-radio-button>
        <el-radio-button :value="false">关闭错误提示</el-radio-button>
      </el-radio-group>
    </t-layout-page-item>
    <t-layout-page-item>
      <f-input
        v-model="vlaue"
        placeholder="请输入金额"
        input-type="amount"
        show-thousands
        :is-show-error-tip="isShowErrorTip"
        @change="change"
      />
    </t-layout-page-item>
  </t-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const isShowErrorTip = ref(true)
const vlaue = ref<any>()
const change = (e: any) => {
  console.log("输出的值", e)
  console.log("v-model的值", vlaue.value)
  console.log("v-model的值----", typeof vlaue.value)
}
</script>
