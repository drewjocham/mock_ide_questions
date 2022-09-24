<template>
  <div>
      <MonacoEditor
          width="900"
          height="750"
          language="go"
          @change="onChange"
          value="value"
      ></MonacoEditor>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import MonacoEditor from "monaco-editor-vue3";


@Options({
  components: {
      MonacoEditor,
  },
  props: {
    editorInit: String,
    content: String,
  },
})
export default class Editor extends Vue {

    value = `
   package main

   import "fmt"

   func main() {
       fmt.println("HelloWorld")
   }`



    onChange() {
        console.log("value");
    }

    async mounted() {
        // add parameters here
    }

}

</script>

<style scoped>

</style>
