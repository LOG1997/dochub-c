<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getAllDoc } from "@/api/homePage/index";
import { storeToRefs } from "pinia";
import { useStore } from "@/store/index";
const store = useStore();
onMounted(() => {
  featchAllDoc();
});
// 首页数据
let docAll = ref();
const featchAllDoc = () => {
  console.log("asas");
  getAllDoc({}).then((res: any) => {
    docAll.value = res.data.data;
    console.log(":", docAll);
  });
};
// 路由跳转
const router = useRouter();
const skip = (path: string, pro: object) => {
  console.log("pro:", pro);
  store.setProjectId(pro);
  router.push(path);
};
</script>

<template>
  <div class="homePage h-auto">
    <div class="banner w-full h-80">
      <p class="text-white text-4xl pt-20">文档中心</p>
    </div>
    <div class="docList max-w-7xl m-auto">
      <div class="docCat text-left" v-for="cat in docAll" :key="cat.id">
        <h2 class="text-3xl pt-3">{{ cat.categoryName }}</h2>
        <div class="proContainer flex flex-wrap w-full">
          <div
            class="pro w-1/4 h-40 my-5"
            v-for="pro in cat.projectVOList"
            :key="pro.id"
          >
            <el-card
              class="w-3/4 h-full hover:border-gray-400/50 hover:cursor-pointer"
              @click="skip('/detail', pro)"
            >
              <p>{{ pro.projectName }}</p>
              <p class="introduction text-xs leading-5 mt-3">
                {{ pro.introduction }}
              </p></el-card
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.homePage {
  background-color: #ffffff;
}
.dark .homePage {
  background-color: #35353a;
}
.banner {
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 300%;
  animation: ani 30s linear infinite;
  border: none;
}
@keyframes ani {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
}
.introduction {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
