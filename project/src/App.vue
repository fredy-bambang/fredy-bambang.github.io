<template>
  <div class="flex flex-col h-screen">
    <Header />
    <div class="flex-grow">
      <router-view />
      <!-- <img alt="Vue logo" src="./assets/logo.png" />
          <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Footer,
  },
});
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>