import { defineComponent, onBeforeMount } from '@vue/runtime-core';
import { ConfigProvider } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { onMounted } from 'vue';
import './app.less';
import localStyle from './App.module.less';

const App = defineComponent({
  setup() {
    onMounted(() => {
      let html = document.querySelector('html');
      if (html) {
        html.setAttribute('class', 'theme-1');
        console.log(html);
      }
    });

    return () => (
      <div class={localStyle.app}>
        <ConfigProvider locale={zhCN}>
          <router-view></router-view>
        </ConfigProvider>
      </div>
    );
  },
});

export default App;
