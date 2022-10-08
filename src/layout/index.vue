<script lang="ts" setup>
import Header from "@/components/Header/index.vue";
</script>
<template>
  <div class="common-layout h-screen w-screen">
    <el-container>
      <el-header class="el-header h-60 w-screen shadow-md fixed"
        ><Header></Header
      ></el-header>
      <el-main class="el-main w-screen min-h-screen">
        <router-view class="w-screen h-full"></router-view>
      </el-main>
      <el-footer class="el-footer w-screen h-90 border-t-4">Footer</el-footer>
    </el-container>
  </div>
</template>
<style scoped>
.el-header {
  padding: 0;
  margin: 0;
  background-color: #f9f9f9;
  z-index: 10000;
}
.dark .el-header {
  padding: 0;
  margin: 0;
  background-color: #35353a;
}
.el-main {
  padding: 0;
  margin-top: 60px;
  overflow-y: hidden;
}
.dark .el-main {
  background-color: #35353a;
}
.el-footer {
  padding: 0;
}
.dark .el-footer {
  background-color: #2a2a46;
}
</style>
