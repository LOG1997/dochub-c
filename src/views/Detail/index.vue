<script setup lang="ts">
import { ref, reactive, onMounted, watch, nextTick } from "vue";
import { CaretBottom } from "@element-plus/icons-vue";
import { getTreeList, getVersionList, getContent } from "@/api/detail/index";
import { treeDataType } from "@/types/detail";
import {
  proDataType,
  categoryDataType,
  versionDataType,
} from "@/types/homePage";
import { transTree } from "@/utils/index";
import { getAllDoc } from "@/api/homePage/index";
import SwitchProject from "./components/SwitchProject/index.vue";
import MarkdownToHtml from "./components/MarkdownContent/index.vue";
import { useStore } from "@/store/index";
import PageOPtions from "./components/PageOption/index.vue";
import { useRouter, useRoute } from "vue-router";

const store = useStore();
const router = useRouter();
const route = useRoute();
onMounted(() => {
  featchTreeData();
  featchVersionList();
  // featchContent();
  // featchAllDoc();
});
// 初始化
let routeQuery = reactive({});
// 项目信息
const curProject = ref();
const curCategory = ref();
const allDoc = ref<any>([]);
if (store.getProjectObj) {
  curProject.value = store.getProjectObj;
} else {
  for (let i = 0; i < allDoc.value.length; i++) {
    if (allDoc.value[i].id == route.query.categoryId) {
      curCategory.value = allDoc.value[i];
    }
  }
}
const featchAllDoc = () => {
  getAllDoc({}).then((res) => {
    allDoc.value = res.data.data;
  });
};
// 切换项目
let menuHide = ref(false);
let popoverProjectVisible = ref(false);
const mouseEnter = () => {
  menuHide.value = false;
};
const handleProject = (projectItem: proDataType) => {
  popoverProjectVisible.value = false;
  console.log("pro", projectItem);
  curProject.value = projectItem;
  store.setProjectObj(projectItem);
  routeQuery = { ...route.query, projectId: curProject.value.id };
  router.push({
    path: "/detail",
    query: { ...routeQuery },
  });
};
// 切换版本
const versionList = ref();
const defaultVersionObj = ref();
let popoverVersionVisible = ref(false);
const featchVersionList = () => {
  getVersionList({}).then((res) => {
    versionList.value = res.data.data;
    if (store.getVersionObj) {
      defaultVersionObj.value = store.getVersionObj;
    } else {
      for (let i = 0; i < versionList.value.length; i++) {
        if (versionList.value[i].display == "DEFAULT_DISPLAY") {
          defaultVersionObj.value = versionList.value[i];
          store.setVersionObj(defaultVersionObj.value);

          // route.query.versionId = defaultVersionObj.value.id;
        }
      }
    }
    routeQuery = {
      ...route.query,
      versionId: defaultVersionObj.value.id,
    };
    router.push({
      path: "/detail",
      query: { ...routeQuery },
    });
  });
};
const handleVersion = (versionItem: versionDataType) => {
  console.log("versionItem:", versionItem);
  defaultVersionObj.value = versionItem;
  store.setVersionObj(versionItem);
  routeQuery = { ...route.query, versionId: defaultVersionObj.value.id };
  router.push({
    path: "/detail",
    query: { ...routeQuery },
  });
  popoverVersionVisible.value = false;
};
// 获取树形结构数据
let treeData = ref();
const treeDiv = ref();
const featchTreeData = () => {
  getTreeList({}).then((res) => {
    console.log("raw:", res.data.data);
    const rawData = reactive<treeDataType[]>(
      res.data.data.documentDirectoryList
    );
    treeData.value = transTree(res.data.data.documentDirectoryList);
    routeQuery = { ...route.query, docId: treeData.value[0].id };
    router.push({
      path: "/detail",
      query: { ...routeQuery },
    });
    console.log("object :>> ", treeData.value);
    console.log("rawData:", rawData);
    nextTick(() => {
      treeDiv.value.setCurrentKey(treeData.value[0].id);
    });
  });
};
const defaultProps = {
  children: "children",
  label: "directoryName",
};
// 点击树形图节点
const handleNodeClick = (data: treeDataType) => {
  routeQuery = { ...route.query, docId: data.id };
  router.push({
    path: "/detail",
    query: { ...routeQuery },
  });
};
// 监听屏幕宽度
let clientWidth = ref(document.body.clientWidth);
window.onresize = () => {
  return (() => {
    clientWidth.value = document.body.clientWidth;
  })();
};
// 页尾翻页

let pageOptions = reactive([{}, {}, {}]);
const pageTurn = (docId: string | number) => {
  for (let i = 0; i < treeData.value.length; i++) {
    if()
  }
};

// 获取文档内容
let markdownContent = ref("");
const featchContent = (docId: string | number) => {
  getContent({ id: docId }).then((res) => {
    console.log("contsne:", res);
    markdownContent.value = res.data.data.content;
  });
};
watch(
  () => route.query.docId,
  (newVal, oldVal) => {
    console.log("路由变化：", newVal, typeof newVal);
    featchContent(newVal as string);
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <div class="flex h-full gap-10">
    <div class="treeMenu fixed w-70 max-w-2xl">
      <div class="docInfo h-12">
        <div class="docProject flex justify-between">
          <div class="projectName">
            <span>{{ curProject.projectName }}</span>
          </div>
          <el-popover
            placement="right-start"
            :width="clientWidth - 300"
            @show="featchAllDoc"
            title="全部分类"
            :show-arrow="false"
            v-model:visible="popoverProjectVisible"
          >
            <SwitchProject
              v-if="allDoc.length"
              :data="allDoc"
              @handle-project="handleProject"
            ></SwitchProject>
            <template #reference>
              <div class="svgIcon" @click="popoverProjectVisible = true">
                <transition
                  name="fade"
                  enter-active-class="animated animate__rotateIn"
                >
                  <svg-icon
                    v-show="!menuHide"
                    @mouseenter="mouseEnter"
                    :name="'menu'"
                    class="svgMenu cursor-pointer"
                  ></svg-icon
                ></transition>
                <transition
                  name="fade"
                  enter-active-class="animated animate__rotateIn"
                >
                  <svg-icon
                    v-show="menuHide"
                    @mouseenter="mouseEnter"
                    :name="'close'"
                    :color="'blue'"
                    class="svgMenu cursor-pointer"
                  ></svg-icon
                ></transition></div
            ></template>
          </el-popover>
        </div>
        <el-popover
          placement="right-start"
          :width="400"
          title="切换版本"
          :show-arrow="false"
          v-model:visible="popoverVersionVisible"
        >
          <div class="versionList w-full">
            <ul class="flex flex-wrap w-full">
              <li
                v-for="versionItem in versionList"
                class="w-1/4 pr-4 cursor-pointer hover:text-blue-500 text-left"
                @click="handleVersion(versionItem)"
              >
                <span> {{ versionItem.versionName }}</span>
              </li>
            </ul>
          </div>
          <template #reference>
            <div
              class="docVersion text-right leading-10 hover:text-blue-500 cursor-pointer"
              @click="popoverVersionVisible = true"
            >
              <span>{{ defaultVersionObj?.versionName }}</span>
              <el-icon><CaretBottom /></el-icon>
            </div>
          </template>
        </el-popover>
      </div>
      <el-divider />
      <el-tree
        class="el-tree"
        ref="treeDiv"
        :data="treeData"
        :props="defaultProps"
        node-key="id"
        accordion
        highlight-current
        @node-click="handleNodeClick"
      />
    </div>
    <div class="content left-10">
      <div>
        <MarkdownToHtml :content="markdownContent"></MarkdownToHtml>
        <PageOPtions class="h-16"></PageOPtions>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.treeMenu {
  box-shadow: 1px 0px 1px rgb(94, 91, 91);
  height: 100%;
}
.dark .treeMenu {
  background-color: #35353a;
}
.el-tree {
  width: 300px;
  height: 30%;
  &:deep(.el-tree-node) {
    .el-tree-node__content {
      height: 40px;
      width: 300px;
      .el-tree-node__label {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    // padding-top: 10px;
  }
  &:deep(.is-current > .el-tree-node__content > .el-tree-node__label) {
    color: #409eff;
  }
}
.svgMenu:hover {
  color: #409eff;
}
.content {
  margin-left: 300px;
  width: 60%;
  min-width: 800px;
}
</style>
<style>
.el-popover {
  /* height: 400px; */
  max-height: 600px;
  overflow-y: auto;
}
</style>
