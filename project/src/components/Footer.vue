<template>
  <footer class="text-gray-700 border-t body-font">
    <div class="bg-black">
      <div
        class="container flex flex-col flex-wrap px-5 py-6 mx-auto"
      >
        <p class="text-sm text-center text-gray-200 sm:text-left">
          © {{ data.year }}
        </p>
        <span
          class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start"
        >
        </span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from "vue";
export default defineComponent({
  name: "Footer",
  props: {
    year: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    const data = reactive({
      year: new Date().getFullYear(),
    });
    return { count, data };
  },
});
</script>