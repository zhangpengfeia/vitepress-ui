<!--
 * @Author: zhangpf1 zhangpengfei@csc.com.cn
 * @Date: 2026-04-30 09:23:17
 * @LastEditors: zhangpf1 zhangpengfei@csc.com.cn
 * @LastEditTime: 2026-05-20 14:37:56
 * @FilePath: \t-ui-plus-master\docs\examples\FInput\base.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <t-layout-page>
    <t-layout-page-item>
      <f-input v-model="vlaue" placeholder="请输入内容" @change="change" />
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
