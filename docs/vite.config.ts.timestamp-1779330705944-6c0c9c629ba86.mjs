// vite.config.ts
import Inspect from "file:///D:/zl/ai%E5%A4%A7%E6%A8%A1%E5%9E%8B/t-ui-plus-master/node_modules/.pnpm/vite-plugin-inspect@0.8.9_rollup@4.60.4_vite@5.4.21/node_modules/vite-plugin-inspect/dist/index.mjs";
import { defineConfig } from "file:///D:/zl/ai%E5%A4%A7%E6%A8%A1%E5%9E%8B/t-ui-plus-master/node_modules/.pnpm/vite@5.4.21_@types+node@20.19.41_sass@1.32.13/node_modules/vite/dist/node/index.js";
import vueJsx from "file:///D:/zl/ai%E5%A4%A7%E6%A8%A1%E5%9E%8B/t-ui-plus-master/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.4.21_vue@3.4.21/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import viteCompression from "file:///D:/zl/ai%E5%A4%A7%E6%A8%A1%E5%9E%8B/t-ui-plus-master/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@5.4.21/node_modules/vite-plugin-compression/dist/index.mjs";
var isEnvProduction = process.env.NODE_ENV === "production";
var vite_config_default = defineConfig({
  plugins: [
    Inspect(),
    vueJsx(),
    isEnvProduction ? viteCompression({
      filter: /\.(js|css)$/i,
      // algorithm: 'brotliCompress',
      threshold: 10 * 1024
      // 10kb
    }) : void 0
  ],
  server: {
    host: "0.0.0.0",
    port: 2222,
    open: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx6bFxcXFxhaVx1NTkyN1x1NkEyMVx1NTc4QlxcXFx0LXVpLXBsdXMtbWFzdGVyXFxcXGRvY3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHpsXFxcXGFpXHU1OTI3XHU2QTIxXHU1NzhCXFxcXHQtdWktcGx1cy1tYXN0ZXJcXFxcZG9jc1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovemwvYWklRTUlQTQlQTclRTYlQTglQTElRTUlOUUlOEIvdC11aS1wbHVzLW1hc3Rlci9kb2NzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IEluc3BlY3QgZnJvbSBcInZpdGUtcGx1Z2luLWluc3BlY3RcIlxuaW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tIFwidml0ZVwiXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiXG5pbXBvcnQgdnVlSnN4IGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWUtanN4XCJcbmltcG9ydCB2aXRlQ29tcHJlc3Npb24gZnJvbSBcInZpdGUtcGx1Z2luLWNvbXByZXNzaW9uXCJcblxuLy8gXHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU1MjI0XHU2NUFEXG5jb25zdCBpc0VudlByb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIEluc3BlY3QoKSBhcyBQbHVnaW5PcHRpb24sXG4gICAgdnVlSnN4KCkgYXMgUGx1Z2luT3B0aW9uLFxuICAgIGlzRW52UHJvZHVjdGlvblxuICAgICAgPyAodml0ZUNvbXByZXNzaW9uKHtcbiAgICAgICAgICBmaWx0ZXI6IC9cXC4oanN8Y3NzKSQvaSxcbiAgICAgICAgICAvLyBhbGdvcml0aG06ICdicm90bGlDb21wcmVzcycsXG4gICAgICAgICAgdGhyZXNob2xkOiAxMCAqIDEwMjQgLy8gMTBrYlxuICAgICAgICB9KSBhcyBQbHVnaW5PcHRpb24pXG4gICAgICA6IHVuZGVmaW5lZFxuICBdLFxuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBcIjAuMC4wLjBcIixcbiAgICBwb3J0OiAyMjIyLFxuICAgIG9wZW46IHRydWVcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVQsT0FBTyxhQUFhO0FBRTNVLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sWUFBWTtBQUNuQixPQUFPLHFCQUFxQjtBQUc1QixJQUFNLGtCQUFrQixRQUFRLElBQUksYUFBYTtBQUVqRCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxrQkFDSyxnQkFBZ0I7QUFBQSxNQUNmLFFBQVE7QUFBQTtBQUFBLE1BRVIsV0FBVyxLQUFLO0FBQUE7QUFBQSxJQUNsQixDQUFDLElBQ0Q7QUFBQSxFQUNOO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
