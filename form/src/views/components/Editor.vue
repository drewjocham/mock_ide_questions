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
import {Code} from "@/model/code";
import {api} from "@/lib/api";


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

  defaultCode: Code = {
    language_id: 0,
    source_code: "",
    stdin: ""
  }

  code = ""
  private c: Code = this.defaultCode;

    value = `
   package main

   import "fmt"

   func main() {
       fmt.Println("Hello World")
   }`

    onChange(event: any) {
      this.code = event
    }

    submit() {
      if (this.code.length <= 0) {
        this.c.source_code = this.value
        api.submitCode(this.c)
          api.testMethod()
      } else {
        this.c.source_code = this.code
        api.submitCode(this.c)
          api.testMethod()
      }
    }

}

</script>

<style scoped>

</style>
