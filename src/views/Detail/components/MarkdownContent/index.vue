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
const markdownToHtml = ref("");
watch(
  () => props.content,
  () => {
    markdownToHtml.value = marked(props.content || "");
    console.log("markdownToHtml:", markdownToHtml.value);
  }
);
</script>

<template>
  <div class="title"></div>
  <div v-html="markdownToHtml" class="markdown-body text-left ml-10"></div>
</template>

<style scoped lang="scss"></style>
