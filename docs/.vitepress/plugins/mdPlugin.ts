/*
 * @Author: zhangpf1 zhangpengfei@csc.com.cn
 * @Date: 2026-04-30 09:23:16
 * @LastEditors: zhangpf1 zhangpengfei@csc.com.cn
 * @LastEditTime: 2026-05-20 13:55:20
 * @FilePath: \t-ui-plus-master\docs\.vitepress\plugins\mdPlugin.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import path from "path"
import fs from "fs"
import MarkdownIt from "markdown-it"
import mdContainer from "markdown-it-container"
import type Token from "markdown-it/lib/token"
import type Renderer from "markdown-it/lib/renderer"
const localMd = MarkdownIt()
const docRoot = path.resolve(__dirname, "../../")

interface ContainerOpts {
  marker?: string | undefined
  validate?(params: string): boolean
  render?(tokens: Token[], index: number, options: any, env: any, self: Renderer): string
}

export const mdPlugin = (md: MarkdownIt) => {
  md.use(mdContainer, "demo", {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : ""
        const sourceFileToken = tokens[idx + 2]
        let source = ""
        const sourceFile = sourceFileToken.children?.[0].content ?? ""

        if (sourceFileToken.type === "inline") {
          source = fs.readFileSync(path.resolve(docRoot, "examples", `${sourceFile}.vue`), "utf-8")
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)

        return `<DocsCodeDemo
        source="${encodeURIComponent(source)}"
        path="${sourceFile}"
        raw-source="${encodeURIComponent(source)}"
        description="${encodeURIComponent(localMd.render(description))}"
        >`
      } else {
        return "</DocsCodeDemo>"
      }
    }
  } as ContainerOpts)
}
