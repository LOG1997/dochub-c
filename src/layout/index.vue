<template>
  <div class="common-layout h-screen">
    <el-container>
      <el-header class="h-60 w-screen shadow-md bg-emerald-600 fixed"
        >Header</el-header
      >
      <el-main class="el-main w-screen bg-yellow-400">
        <router-view></router-view>
      </el-main>
      <el-footer class="w-screen h-100 bg-slate-600">Footer</el-footer>
    </el-container>
  </div>
</template>
<style scoped>
.el-main {
  padding: 0;
  margin-top: 60px;
}
</style>
