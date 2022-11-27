<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <button v-on:click="submit()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
      </button>
      <button v-on:click="counter()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Counter
      </button>
      {{name}}-{{age}}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';
import {api} from "@/lib/api"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {

    name = ""
    age = 25

    submit() {
        api.getTest().then(
            response => {
                const temp = JSON.stringify(response)
                this.name = JSON.parse(temp).name
                this.age = parseInt(JSON.parse(temp).age)
        }).catch(response => {
            console.log("Error while getting the response", response)
        })
    }

    counter(){
        this.age = this.age * this.age
    }
}
</script>
