<script setup lang="ts">
import { ref, reactive } from "vue";
</script>

<template>
  <div class="pageOptions flex justify-between">
    <div class="pageUpContainer w-40 h-3/4">
      <div
        class="pageUp w-full h-full my-3 border-2 rounded-xl border-red-400 cursor-pointer"
      >
        <p>上一页</p>
      </div>
    </div>
    <div class="pageDown"></div>
  </div>
</template>

<style scoped></style>
