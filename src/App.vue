<template>
  <div>
    <router-view/>
  </div>
  <HelloWorld msg="Drew"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './views/components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {

}
</script>

<style>

</style>
