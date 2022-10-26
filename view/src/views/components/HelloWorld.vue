<template>
  <div class="justify-center flex bg-yellow-300 items-center h-screen">
    <div class="text-4xl">
        Hello 👋🏼 {{ msg }}
        <button @click="$router.push('test')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
        </button>

        <div class="flex flex-row ...">
            <div>
                <Editor/>
            </div>
        </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Editor from "@/views/components/Editor.vue";

@Options({
  components: {Editor},
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<style scoped>

</style>
