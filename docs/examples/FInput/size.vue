<template>
  <f-layout-page>
    <f-layout-page-item>
      <el-radio-group v-model="size" aria-label="size control" size="small">
        <el-radio-button value="large">large</el-radio-button>
        <el-radio-button value="default">default</el-radio-button>
        <el-radio-button value="small">small</el-radio-button>
      </el-radio-group>
    </f-layout-page-item>
    <f-layout-page-item>
      <f-input v-model="vlaue" placeholder="请输入内容" :size="size" @change="change" />
    </f-layout-page-item>
  </f-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const vlaue = ref<any>()
const size = ref("default")
const change = (e: any) => {
  console.log("输出的值", e)
  console.log("v-model的值", vlaue.value)
}
</script>
