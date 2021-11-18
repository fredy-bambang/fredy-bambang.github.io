<template>
  <div class="text-gray-700 bg-white body-font">
    <div
      class="flex flex-col flex-wrap p-5 mx-auto border-b md:items-center md:flex-row"
    >
      <a href="./index.html" class="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
        <div class="inline-flex items-center">
          <div
            class="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500"
          ></div>
          <h2
            class="font-semibold tracking-tighter transition duration-1000 ease-in-out transform text-blueGray-500 dark:text-blueGray-200 lg:text-md text-bold lg:mr-8"
          >
            Fredy Bambang
          </h2>
        </div>
      </a>
      <nav
        class="flex flex-wrap items-center justify-center text-base md:ml-auto"
      >
        <router-link to="/"
          class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
          >Home</router-link>
        <router-link to="/for-recruiter"
          class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
          >For Recruiter</router-link
        >
        <router-link to="/about"
          class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
          >About Me</router-link
        >
      </nav>
      <!-- <button
        class="items-center px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-blueGray-900 focus:ring focus:outline-none"
      >
        Buy Me Coffee
      </button> -->
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>