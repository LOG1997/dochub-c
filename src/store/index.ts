import { defineStore } from "pinia";
import {
  proDataType,
  categoryDataType,
  versionDataType,
} from "@/types/homePage";
// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useStore = defineStore("main", {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      categoryObj: {},
      projectObj: {},
      versionObj: {},
    };
  },
  getters: {
    getProjectObj(state) {
      return state.projectObj;
    },
    getCategoryObj(state) {
      return state.categoryObj;
    },
    getVersionObj(state) {
      return state.versionObj;
    },
  },
  actions: {
    setProjectObj(data: proDataType) {
      this.projectObj = data;
    },
    setCategoryObj(data: categoryDataType) {
      this.categoryObj = data;
    },
    setVersionObj(data: versionDataType) {
      this.versionObj = data;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        paths: ["categoryObj", "projectObj", "versionDataType"],
      },
    ],
  },
});
