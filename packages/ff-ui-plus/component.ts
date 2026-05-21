/*
 * @Author: zhangpf1 zhangpengfei@csc.com.cn
 * @Date: 2026-05-20 10:55:01
 * @LastEditors: zhangpf1 zhangpengfei@csc.com.cn
 * @LastEditTime: 2026-05-20 14:07:46
 * @FilePath: \t-ui-plus-master\packages\t-ui-plus\component.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Component } from "vue"

import { FAdaptivePage } from "@ff-ui-plus/components/adaptive-page"
import { TButton } from "@ff-ui-plus/components/button"
import { FChart } from "@ff-ui-plus/components/chart"
import { TCheckbox } from "@ff-ui-plus/components/checkbox"
import { TDatePicker } from "@ff-ui-plus/components/date-picker"
import { TDetail } from "@ff-ui-plus/components/detail"
import { TForm } from "@ff-ui-plus/components/form"
import { FInput } from "@ff-ui-plus/components/input"
import { FLayoutPage } from "@ff-ui-plus/components/layout-page"
import { FLayoutPageItem } from "@ff-ui-plus/components/layout-page-item"
import { TModuleForm } from "@ff-ui-plus/components/module-form"
import { TQueryCondition } from "@ff-ui-plus/components/query-condition"
import { TRadio } from "@ff-ui-plus/components/radio"
import { TSelect } from "@ff-ui-plus/components/select"
import { TSelectIcon } from "@ff-ui-plus/components/select-icon"
import { TSelectTable } from "@ff-ui-plus/components/select-table"
import { TStepWizard } from "@ff-ui-plus/components/step-wizard"
import { TTable } from "@ff-ui-plus/components/table"
import { TTabs } from "@ff-ui-plus/components/tabs"
import { TTimerBtn } from "@ff-ui-plus/components/timer-btn"

const plugins: Component[] = [
  FAdaptivePage,
  TButton,
  FChart,
  TCheckbox,
  TDatePicker,
  TDetail,
  TForm,
  FInput,
  FLayoutPage,
  FLayoutPageItem,
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
