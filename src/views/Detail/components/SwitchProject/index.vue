<script setup lang="ts">
import { ref, reactive } from "vue";
defineProps({
  data: {
    type: Object,
    default: {},
  },
});
const emits = defineEmits(["handleProject"]);
// 切换project
const handleProject = (projectItem: object) => {
  emits("handleProject", projectItem);
};
</script>

<template>
  <div class="w-full m-auto">
    <div
      class="w-full m-auto"
      v-masonry
      fit-width="true"
      item-selector=".categoryItem"
    >
      <div
        class="categoryItem w-40 m-4 border-2"
        v-masonry-tile
        v-for="categoryItem in data"
        :key="categoryItem.id"
      >
        <div class="font-light text-lg">{{ categoryItem.categoryName }}</div>
        <el-divider />
        <div v-for="projectItem in categoryItem.projectVOList">
          <div
            class="font-thin cursor-pointer hover:text-blue-500"
            @click="handleProject(projectItem)"
          >
            {{ projectItem.projectName }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.el-divider {
  margin: 12px 0;
}
</style>
