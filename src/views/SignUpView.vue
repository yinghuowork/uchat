<template>
    <HelloWorld msg=""/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/SignUp.vue';

export default {
  name: 'LoginView',
  components: {
    HelloWorld,
  },
};
</script>
