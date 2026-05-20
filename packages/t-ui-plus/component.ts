/*
 * @Author: zhangpf1 zhangpengfei@csc.com.cn
 * @Date: 2026-05-20 10:55:01
 * @LastEditors: zhangpf1 zhangpengfei@csc.com.cn
 * @LastEditTime: 2026-05-20 14:07:46
 * @FilePath: \t-ui-plus-master\packages\t-ui-plus\component.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Component } from "vue"

import { TAdaptivePage } from "@t-ui-plus/components/adaptive-page"
import { TButton } from "@t-ui-plus/components/button"
import { TChart } from "@t-ui-plus/components/chart"
import { TCheckbox } from "@t-ui-plus/components/checkbox"
import { TDatePicker } from "@t-ui-plus/components/date-picker"
import { TDetail } from "@t-ui-plus/components/detail"
import { TForm } from "@t-ui-plus/components/form"
import { FInput } from "@t-ui-plus/components/input"
import { TLayoutPage } from "@t-ui-plus/components/layout-page"
import { TLayoutPageItem } from "@t-ui-plus/components/layout-page-item"
import { TModuleForm } from "@t-ui-plus/components/module-form"
import { TQueryCondition } from "@t-ui-plus/components/query-condition"
import { TRadio } from "@t-ui-plus/components/radio"
import { TSelect } from "@t-ui-plus/components/select"
import { TSelectIcon } from "@t-ui-plus/components/select-icon"
import { TSelectTable } from "@t-ui-plus/components/select-table"
import { TStepWizard } from "@t-ui-plus/components/step-wizard"
import { TTable } from "@t-ui-plus/components/table"
import { TTabs } from "@t-ui-plus/components/tabs"
import { TTimerBtn } from "@t-ui-plus/components/timer-btn"

const plugins: Component[] = [
  TAdaptivePage,
  TButton,
  TChart,
  TCheckbox,
  TDatePicker,
  TDetail,
  TForm,
  FInput,
  TLayoutPage,
  TLayoutPageItem,
  TModuleForm,
  TQueryCondition,
  TRadio,
  TSelect,
  TSelectIcon,
  TSelectTable,
  TStepWizard,
  TTable,
  TTabs,
  TTimerBtn
]

export default plugins
