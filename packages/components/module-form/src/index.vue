<template>
  <div class="t_module_form" :style="{ marginBottom: footer !== null ? '60px' : '' }">
    <div class="scroll_wrap">
      <!-- 头部 -->
      <el-page-header
        v-if="!isShowHeader && (title || titleSlot)"
        :title="title"
        :class="{
          noContent: !subTitle,
          isShowBack: isShowBack
        }"
        @back="back"
      >
        <template v-if="titleSlot" #title>
          <slot name="title" />
        </template>
        <template #content>
          <div class="sub_title">{{ subTitle }}</div>
          <div class="extra">
            <slot name="extra" />
          </div>
        </template>
      </el-page-header>
      <!-- 表单页面 -->
      <module-form v-if="handleType === 'edit'" v-bind="$attrs" ref="tForm">
        <template v-for="(_index, name) in slots" #[name]="data">
          <slot :name="name" v-bind="data" />
        </template>
      </module-form>
      <!-- 详情页面 -->
      <module-detail v-else v-bind="$attrs">
        <template v-for="(_index, name) in slots" #[name]="data">
          <slot :name="name" v-bind="data" />
        </template>
      </module-detail>
      <!-- tabs -->
      <div
        v-if="tabs.length"
        class="tabs"
        :style="{ 'margin-top': isTabMargin ? `${tabMarginNum}px` : 0 }"
      >
        <el-tabs v-if="tabs && tabs.length > 1" v-model="activeName" @tab-change="tabsChange">
          <el-tab-pane v-for="tab in tabs" :key="tab.key" :name="tab.key" :label="tab.title">
            <slot :name="tab.key" />
          </el-tab-pane>
        </el-tabs>
        <slot v-else :name="tabs && tabs[0].key" />
      </div>
      <slot name="default" />
    </div>
    <!-- 按钮 -->
    <footer v-if="footer !== null" class="handle_wrap">
      <slot name="footer" />
      <div v-if="!slots.footer">
        <el-button v-bind="cancelAttrs" @click="back">{{ cancelAttrs.btnTxt }}</el-button>
        <el-button
          v-if="handleType === 'edit'"
          v-bind="saveAttrs"
          :loading="loading"
          @click="saveHandle"
          >{{ saveAttrs.btnTxt }}</el-button
        >
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, useAttrs, useSlots, computed } from "vue"
import ModuleDetail from "@ff-ui-plus/components/module-form/src/moduleDetail.vue"
import ModuleForm from "@ff-ui-plus/components/module-form/src/moduleForm.vue"
import { useLocale } from "@ff-ui-plus/hooks"
import type { TModuleFormProps } from "./type"
defineOptions({
  name: "TModuleForm"
})

const props = withDefaults(defineProps<TModuleFormProps>(), {
  handleType: "edit",
  isShowHeader: false,
  titleSlot: false,
  isShowBack: false,
  isGoBackEvent: false,
  btnSaveBind: () => ({}),
  btnCancelBind: () => ({}),
  isTabMargin: false,
  tabMarginNum: 10,
  title: "",
  subTitle: "",
  tabs: () => [],
  submit: async () => false
})
const { t } = useLocale()
const attrs = useAttrs() as Record<string, any>
const slots = useSlots()
const activeName = ref(props.tabs && props.tabs[0]?.key)
const loading = ref(false)
// 保存按钮配置
const saveAttrs = computed(() => {
  return {
    type: "primary" as
      | "primary"
      | "default"
      | "success"
      | "warning"
      | "danger"
      | "info"
      | "text"
      | "",
    btnTxt: t("plus.moduleForm.save"),
    ...props.btnSaveBind
  }
})
// 取消按钮配置
const cancelAttrs = computed(() => {
  return { btnTxt: t("plus.moduleForm.back"), ...props.btnCancelBind }
})
// 获取ref
const tForm: any = ref<HTMLElement | null>(null)

// 抛出事件
const emits = defineEmits(["validateError", "back", "tabsChange"])
// 点击保存
const saveHandle = async () => {
  return new Promise(async (resolve: any, reject: any) => {
    const form: Record<string, any> = {}
    const formError: Record<string, any> = {}
    const formOpts: Record<string, any> = {}
    let successLength = 0
    loading.value = true
    try {
      // 过滤非插槽表单
      Object.keys(attrs.formOpts).forEach(key => {
        if (attrs.formOpts[key].opts) {
          formOpts[key] = attrs.formOpts[key]
        }
      })
      // 校验表单
      for (const formIndex of Object.keys(formOpts)) {
        const { valid } = await tForm.value.getChildRef(formIndex).selfValidate()
        if (valid) {
          successLength = successLength + 1
          form[formIndex] = attrs.formOpts[formIndex].opts.formData
        }
      }
      if (successLength === Object.keys(formOpts).length) {
        // 所有表单都校验成功
        const isSuccess = await props.submit(form)
        resolve({ valid: true, formData: form }) // 返回表单数据
        if (isSuccess) {
          // 成功
          back()
        }
      } else {
        // 校验失败抛出事件
        Object.keys(formOpts).forEach(key => {
          if (Object.keys(form).length > 0) {
            Object.keys(form).map(val => {
              if (key !== val) {
                formError[key] = formOpts[key]
              }
            })
          } else {
            formError[key] = formOpts[key]
          }
        })
        reject({ valid: false, error: formError }) // 返回校验失败信息
        emits("validateError", formError)
      }
    } catch (error) {
      // 捕获异常并抛出校验失败事件
      emits("validateError", { error })
      reject({ valid: false, error })
    } finally {
      loading.value = false
    }
  })
}
// 点击头部返回或者取消
const back = () => {
  if (props.isShowBack) {
    return
  }
  emits("back")
  if (!props.isGoBackEvent) {
    history.go(-1)
  }
}
// 获取默认选中tab
const setSelectedTab = (key: any) => {
  activeName.value = key
}
// 切换tab
const tabsChange = (tab: any) => {
  emits("tabsChange", tab)
}
// 清空表单
const resetFormFields = () => {
  const formOpts: Record<string, any> = {}
  // 过滤非插槽表单
  Object.keys(attrs.formOpts).forEach(key => {
    if (attrs.formOpts[key].opts) {
      formOpts[key] = attrs.formOpts[key]
    }
  })
  Object.keys(formOpts).forEach(formIndex => {
    tForm.value.getChildRef(formIndex).resetFields()
  })
}
// 清空校验规则
const clearValidate = () => {
  const formOpts: Record<string, any> = {}
  // 过滤非插槽表单
  Object.keys(attrs.formOpts).forEach(key => {
    if (attrs.formOpts[key].opts) {
      formOpts[key] = attrs.formOpts[key]
    }
  })
  Object.keys(formOpts).forEach(formIndex => {
    tForm.value.getChildRef(formIndex).clearValidate()
  })
}
const updateFormFields = () => {
  const formOpts: Record<string, any> = {}
  // 过滤非插槽表单
  Object.keys(attrs.formOpts).forEach(key => {
    if (attrs.formOpts[key].opts) {
      formOpts[key] = attrs.formOpts[key]
    }
  })
  Object.keys(formOpts).forEach(formIndex => {
    tForm.value.getChildRef(formIndex).updateFields(false)
  })
}
// 暴露方法出去
defineExpose({
  clearValidate,
  resetFormFields,
  updateFormFields,
  setSelectedTab,
  saveHandle
})
</script>
