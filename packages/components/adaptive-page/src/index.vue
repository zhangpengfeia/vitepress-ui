<template>
  <div class="t_adaptive_page">
    <div
      v-if="isShow('leftContent')"
      :style="{ width: isShow('leftContent') ? `${leftWidth}px` : '0px' }"
      class="left_content"
    >
      <div class="left_tree">
        <slot name="leftContent" />
      </div>
    </div>
    <t-layout-page class="right_content" :style="pageStyle">
      <t-layout-page-item v-if="$attrs.opts" class="table_search" :style="queryPageStyle">
        <t-query-condition v-bind="$attrs" ref="TQueryConditionPage">
          <template v-for="(_index, name) in slots" #[name]="data">
            <slot :name="name" v-bind="data" />
          </template>
        </t-query-condition>
      </t-layout-page-item>
      <slot name="content" />
      <t-layout-page-item
        class="table_main"
        :class="{ 't_table_self-filling': isTTableSelfFilling }"
        :style="tablePageStyle"
      >
        <t-table
          v-bind="{ columnSetting, name, ...$attrs }"
          ref="TTablePage"
          :is-slot-toolbar="isShow('toolbar')"
          :is-slot-title="isShow('title')"
        >
          <template v-for="(_index, name) in slots" #[name]="data">
            <slot :name="name" v-bind="data" />
          </template>
        </t-table>
      </t-layout-page-item>
    </t-layout-page>
    <slot name="footer" />
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, ref, useSlots } from 'vue'
import TLayoutPage from '../../layout-page/src/index.vue'
import TLayoutPageItem from '../../layout-page-item/src/index.vue'
import TTable from '../../table/src/index.vue'
import TQueryCondition from '../../query-condition/src/index.vue'
import type { FAdaptivePageProps } from "./type"

defineOptions({
  name: "FAdaptivePage"
})
withDefaults(defineProps<FAdaptivePageProps>(), {
  leftWidth: 260,
  pageStyle: () => ({}),
  columnSetting: false,
  name: "",
  queryPageStyle: () => ({}),
  tablePageStyle: () => ({}),
  isTTableSelfFilling: false
})

const slots = useSlots()

const isShow = (name: string) => {
  return Object.keys(slots).includes(name)
}

const instance = getCurrentInstance() as any
const TQueryConditionPage = ref<InstanceType<typeof TQueryCondition> | null>(null)
const TTablePage = ref<InstanceType<typeof TTable> | null>(null)

onMounted(() => {
  const exposedObj = {
    ...TQueryConditionPage.value?.$.exposed,
    ...TTablePage.value?.$.exposed
  }
  const entries = Object.entries(exposedObj)
  for (const [key, value] of entries) {
    instance.exposed[key] = value
  }
})

defineExpose({ ...instance.exposed, TQueryConditionPage, TTablePage })
</script>
