<template>
  <section class="text-gray-700 body-font">
    <div class="container px-8 py-36 mx-auto lg:px-4">
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