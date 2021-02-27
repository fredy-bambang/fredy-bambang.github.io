<template>
  <section class="text-gray-700 body-font">
    <div class="container px-8 py-48 mx-auto lg:px-4">
      <div class="flex flex-col w-full mb-12 text-left lg:text-center">
        <h2
          class="mb-1 text-xs font-semibold tracking-widest text-blue-600 uppercase title-font"
        >
          that prefered to backend
        </h2>
        <h1
          class="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-5xl title-font"
        >
          Hai, I'm Software Engineer
        </h1>
        <p
          class="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3"
        >
          Welcome to my page. I like to test this github page as frontend project and try the possibility to hit 3rd party service. 
          In future, i might patch this page by do simple blog and any other feature that i can do.
        </p>
      </div>
      <div class="flex lg:justify-center">
        <!-- <button
          class="inline-flex px-6 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
        >
          Button
        </button>
        <button
          class="inline-flex items-center px-6 py-2 ml-4 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl hover:border-gray-600 hover:bg-gray-600 hover:text-white focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
        >
          Button
        </button> -->
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "Home",
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