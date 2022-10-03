<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { getTreeList } from "@/api/detail/index";
import { treeDataType } from "@/types/detail";
import { transTree } from "@/utils/index";
onMounted(() => {
  featchTreeData();
});
// 获取树形结构数据
let treeData = ref();
const featchTreeData = () => {
  getTreeList({}).then((res) => {
    console.log(res);
    treeData.value = transTree(res.data.data.documentDirectoryList);
  });
};
const defaultProps = {
  children: "children",
  label: "directoryName",
};
// 点击树形图节点
const handleNodeClick = (data: treeDataType) => {
  console.log(data);
};
</script>

<template>
  <div class="flex h-full">
    <div class="treeMenu fixed w-70 max-w-2xl">
      <el-tree
        class="el-tree"
        :data="treeData"
        :props="defaultProps"
        accordion
        highlight-current
        @node-click="handleNodeClick"
      />
    </div>
    <div class="content ml-30">123</div>
  </div>
</template>

<style scoped>
.treeMenu {
  box-shadow: 1px 0px 1px rgb(94, 91, 91);
  height: 100%;
}
.el-tree .el-tree-node {
  width: 300px;
}
</style>
