<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { Sunny, Moon } from "@element-plus/icons-vue";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button class="h-1/2 w-full border-blue-500" @click="toggleDark()">
    <el-icon :size="15" v-if="isDark"><Moon /></el-icon>
    <el-icon v-else><Sunny /></el-icon>
  </button>
</template>

<style scoped></style>
