<template>
<ToolBar></ToolBar>
  <router-view/>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  name: 'HomeView',
  components: {
    ToolBar,
  },
};
</script>
