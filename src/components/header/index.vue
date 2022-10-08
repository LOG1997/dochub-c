<script setup lang="ts">
import { ref } from "vue";
import ToogleTheme from "./toogleTheme.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const userInfo = ref<object>({});
const skip = (path: string) => {
  router.push(path);
};
</script>

<template>
  <div class="header min-w-7xl max-w-7xl m-auto h-full flex justify-between">
    <div class="logo h-full cursor-pointer" @click="skip('/')">
      <img class="h-2/3 mt-2.5" src="@/assets/image/logo.png" alt="" />
    </div>
    <div class="user flex align-middle">
      <div class="user cursor-pointer hover:text-blue-300">
        <div v-if="userInfo" class="login w-20 mt-4">
          <span class="align-middle">登录</span>
        </div>
        <div v-else class="userInfo">
          <img src="@/assets/image/avatar_default.png" alt="" />
        </div>
      </div>
      <div class="toogleTheme h-full w-1/2 m-3">
        <ToogleTheme></ToogleTheme>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
}
</style>
