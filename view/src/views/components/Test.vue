<template>
  <div class="justify-center flex bg-yellow-300 items-center h-screen">
    Hello you in the test part {{ msg }}
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  props:{
    msg: String,
  }
})
export default class Test extends Vue {

}
</script>

<style scoped>

</style>
