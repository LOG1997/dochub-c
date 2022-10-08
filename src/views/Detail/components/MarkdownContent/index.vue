<script setup lang="ts">
import { ref, reactive, shallowRef, watch } from "vue";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import "@/style/markContent.css";
var rendererMD = new marked.Renderer();
marked.setOptions({
  renderer: rendererMD,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});
const props = defineProps({
  content: {
    type: String,
    default: "",
  },
});
const a = ref<string[]>();
let b = reactive<string[]>([]);
interface HeadType {
  name: string;
  age: number;
}
let c = reactive<HeadType>({ name: "", age: 10 });
const markdownToHtml = ref("");
watch(
  () => props.content,
  () => {
    markdownToHtml.value = marked(props.content || "");
    // markdownToHtml.value =
    //   '<h2 id="简介">简介</h2><h3 id="万耦开发板">万耦开发板</h3><p>万耦开发板，是中国移动推出的基于STM32，NXP等芯片的一个系列开发板，其由不同处理核心的核心板与万耦底板组成。万耦底板是通用的，核心板当前有STM32L475VGT6、STM32F401VET6与NXPLPC55S69三个型号，用户可根据需求选择不同的核心板。</p>';
    console.log("markdownToHtml:", markdownToHtml.value);
  }
);
</script>

<template>
  <div class="title"></div>
  <div v-html="markdownToHtml" class="markdown-body text-left ml-10"></div>
</template>

<style scoped lang="scss"></style>
