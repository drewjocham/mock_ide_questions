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
import {api} from "@/lib/api";
import {Code} from "@/model/code";

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
       fmt.println("Hello World")
   }`

    onChange(event: any) {
      this.code = event
    }

    submit() {
      if (this.code.length <= 0) {
        this.c.source_code = this.value
        //console.log("output:" + this.value)
        console.log(JSON.stringify(this.c))
        api.submitCode(this.c)

        //api.submitCode(btoa(this.value))
      } else {
        //console.log("output:" + this.code)
        this.c.source_code = this.code
        console.log(JSON.stringify(this.c))
        api.submitCode(this.c)
        //api.submitCode(btoa(this.code))
      }
    }

}

</script>

<style scoped>

</style>
