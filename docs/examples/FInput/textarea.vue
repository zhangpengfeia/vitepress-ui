<!--
 * @Author: zhangpf1 zhangpengfei@csc.com.cn
 * @Date: 2026-04-30 09:23:17
 * @LastEditors: zhangpf1 zhangpengfei@csc.com.cn
 * @LastEditTime: 2026-05-20 14:24:17
 * @FilePath: \t-ui-plus-master\docs\examples\FInput\textarea.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <t-layout-page>
    <t-layout-page-item>
      <el-button type="danger" @click="showWordLimit = !showWordLimit">{{
        `${!showWordLimit ? "显示" : "不显示"}剩余字数`
      }}</el-button>
    </t-layout-page-item>
    <t-layout-page-item>
      <f-input
        v-model="textarea1"
        style="width: 240px"
        autosize
        :show-word-limit="showWordLimit"
        type="textarea"
        maxlength="10"
        placeholder="Please input"
      />
    </t-layout-page-item>
    <t-layout-page-item>
      <f-input
        v-model="textarea2"
        style="width: 240px"
        :autosize="{ minRows: 2, maxRows: 4 }"
        :show-word-limit="showWordLimit"
        maxlength="30"
        type="textarea"
        placeholder="Please input"
      />
    </t-layout-page-item>
  </t-layout-page>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const textarea1 = ref("")
const textarea2 = ref("")
const showWordLimit = ref(false)
</script>
