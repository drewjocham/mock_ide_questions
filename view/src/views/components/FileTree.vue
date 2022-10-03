<template>
    <div>
        <Tree :nodes="nodes"
              :use-checkbox="false"
              :use-icon="true"
              show-child-count
              :isCheckable="false"
              v-model:selectedItem="selectedItem"
        ></Tree>
        <img src="./assets/folder.jpeg"
             alt="folder"
             v-if="treeViewItem.type === 'folder'"/>
    </div>

</template>

// https://bestofvue.com/repo/geekhybrid-vue3-tree-vue-vuejs-tree
<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Tree from "vue3-tree";
import {ref} from "vue";
import {TreeViewItem} from "@/views/components/models/TreeViewItem";


@Options({
    components: {
        Tree,
    },
    props: {
        msg: String
    }
})
export default class FileTree extends Vue {

    selectedItem = ""
    treeViewItem = TreeViewItem

    setup() {
        const selectedItems = ref<TreeViewItem[]>([]);
        const items = ref<TreeViewItem[]>([]); // define your tree items here.

        return {
            selectedItems,
            items
        }
    }

    nodes = [
        {
            id: 1,
            label: "Animal",
            nodes: [
                {
                    id: 2,
                    label: "Dog",
                },
                {
                    id: 3,
                    label: "Cat",
                    nodes: [
                        {
                            id: 4,
                            label: "Egyptian Mau Cat",
                        },
                        {
                            id: 5,
                            label: "Japanese Bobtail Cat",
                        },
                    ],
                },
            ],
        },
        {
            id: 6,
            label: "People",
        }
    ];

}
</script>

<style scoped>

</style>
