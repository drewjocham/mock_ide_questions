<template>
  <div>
    <MonacoEditor
        theme="vs"
        language="go"
        :width="800"
        :height="800"
        :diffEditor="true"
        :unicodeHighlighting="82"
        :original="original"
        v-model:value="value"
    ></MonacoEditor>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import MonacoEditor from 'monaco-editor-vue3'


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

}

</script>

<style scoped>
.editor {
  width: 600px;
  height: 800px;
}
</style>
