import { defineStore } from "pinia";

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useStore = defineStore("main", {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      // categoryObj: {},
      projectObj: {},
    };
  },
  getters: {
    getProjectObj(state) {
      return state.projectObj;
    },
    // getCategoryObj(state) {
    //   return state.categoryObj;
    // },
  },
  actions: {
    setProjectObj(data: object) {
      this.projectObj = data;
    },
    // setCategoryObj(data: object) {
    //   this.categoryObj = data;
    // },
  },
});
