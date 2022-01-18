# vite搭建项目（vue3+ts+tsx+router+ant-design-vue@next）

## 创建项目
```
yarn create vite zhijian-work --template vue-ts
```

## 下载依赖
```yaml
# ts支持node的path
yarn add -D @types/node

# 支持jsx
yarn add -D @vitejs/plugin-vue-jsx

# 支持 less
yarn add -D less

# 组件库
yarn add ant-design-vue@next

# 按需引入样式
vite-plugin-style-import

# 支持路由
yarn add vue-router@next
```

## 创建文件夹和文件,删除默认
```
rm -rf src/components/HelloWorld.vue src/assets/logo.png
mkdir style
touch style/global.less
mkdir router
touch router/index.ts
```

## 配置
vite.config.js
```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import styleImport from 'vite-plugin-style-import';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // 别名
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 全局less变量
          hack: `true; @import (reference) "${path.resolve(
            'src/style/global.less'
          )}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
      transformOn: true,
      mergeProps: true,
    }),
    // 按需引入样式
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`;
          },
        },
      ],
    }),
  ],
});

```

main.ts
```js
import { createApp } from 'vue';
import App from './App';
import router from './router';

createApp(App).use(router).mount('#app');
```

router/index.ts
```js
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    // 首页
    path: '/',
    name: 'DraggblePage',
    component: () =>
      import(
        /* webpackChunkName: "DraggblePage" */ '@/views/pages/DraggblePage'
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, form, next) => {
  next();
});

export default router;

```

tsconfig.json
```json
{
  "compilerOptions": {
    "target": "esnext",
    "useDefineForClassFields": true,
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom"],
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}

```

## 目录结构
![91](https://cdn.xzlovecyy.com/md-image/1642477303940.png)

