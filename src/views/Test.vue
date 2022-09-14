<template>
  <div>
    I am just a test {{ msg }}
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  props: {
    msg: String
  }
})
export default class Test extends Vue {

}
</script>

<style scoped>

</style>
