import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import { TButton } from "./button"

describe("TButton", () => {
  it("renders button text", () => {
    const wrapper = mount(TButton, {
      slots: {
        default: "确认提交"
      }
    })
    expect(wrapper.text()).toContain("确认提交")
  })
})
