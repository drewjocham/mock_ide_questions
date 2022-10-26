<template>
  <div>
      <MonacoEditor
          width="900"
          height="750"
          language="go"
          @change="onChange($event)"
          :value="value"
      ></MonacoEditor>
    <button v-on:click="submit()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Button
    </button>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import MonacoEditor from "monaco-editor-vue3";

// https://www.npmjs.com/package/monaco-editor-vue3
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

  code = ""

    value = `
   package main

   import "fmt"

   func main() {
       fmt.println("Hello World")
   }`

    onChange(event: any) {
      this.code = event
    }

    submit() {
      if (this.code.length <= 0) {
        console.log("output:" + this.value)
      } else {
        console.log("output:" + this.code)
      }
    }

}

</script>

<style scoped>

</style>
