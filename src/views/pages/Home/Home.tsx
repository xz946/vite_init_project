// Home.tsx 
import { defineComponent, onMounted } from '@vue/runtime-core';
import localStyle from './index.module.less';

const Home = defineComponent({
  setup(props, context) {
    onMounted(() => {});

    return () => <div class={localStyle.Home}>home</div>;
  },
});
export default Home;
