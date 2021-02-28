<template>
  <section class="text-gray-700 body-font">
    <div class="container px-8 py-5 mx-auto lg:px-4">
      <div class="box-border md:box-content">
        <div
          class="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3"
        >
          <b>Little Sharing, for who landing to this page</b><br />
          <p>
            Personal preference more to backend stack that i can understand and easy to try. 
            i feel introvert but other think i'm extrovert. I accept build feature (micro job) as side hustle 
            because currently i'm fulltime worker.<br>
            ... will think what will i write later on.
          </p>
        </div>
      </div>

      <div class="relative wrap overflow-hidden p-10 h-full">
        <div
          class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
          style="left: 50%"
        ></div>
        <!-- right timeline -->
        <div
          class="mb-8 flex justify-between items-center w-full right-timeline"
        >
          <div class="order-1 w-5/12"></div>
          <div
            class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-12 rounded-2xl"
          >
            <h1 class="mx-auto text-white font-semibold text-lg">>2018</h1>
          </div>
          <div
            class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4"
          >
            <h3 class="mb-3 font-bold text-gray-800 text-xl">PT Payfazz Teknologi Nusantara</h3>
            <p
              class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"
            >
              Work as software engineer, at here i used :
              <ul class="list-none md:list-disc px-5">
                <li>Express.js for backend stack</li>
                <li>Vue js for frontend stack</li>
                <li>Adonis js for develop kredit agen project, proxy kredit agen, and cron job</li>
                <li>Docker for build project image</li>
                <li>Github Action for CI / CD</li>
                <li>React js as latest frontend stack</li>
                <li>Go lang as latest backend stack</li>
              </ul>
            </p>
          </div>
        </div>

        <!-- left timeline -->
        <div
          class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
        >
          <div class="order-1 w-5/12"></div>
          <div
            class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-12 rounded-2xl"
          >
            <h1 class="mx-auto text-white font-semibold text-lg">2017</h1>
          </div>
          <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 class="mb-3 font-bold text-white text-xl">Etobee</h3>
            <p
              class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100"
            >
              Logistic Company, build and maintenance internal admin warehouse system.
            </p>
          </div>
        </div>

        <!-- right timeline -->
        <div
          class="mb-8 flex justify-between items-center w-full right-timeline"
        >
          <div class="order-1 w-5/12"></div>
          <div
            class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-12 rounded-2xl"
          >
            <h1 class="mx-auto font-semibold text-lg text-white">2015</h1>
          </div>
          <div
            class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4"
          >
            <h3 class="mb-3 font-bold text-gray-800 text-xl">Freelance</h3>
            <p
              class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"
            >
              Resign from previous company and try build travel apps with partner
            </p>
          </div>
        </div>

        <!-- left timeline -->
        <div
          class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
        >
          <div class="order-1 w-5/12"></div>
          <div
            class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-12 rounded-2xl"
          >
            <h1 class="mx-auto text-white font-semibold text-lg">2012</h1>
          </div>
          <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 class="mb-3 font-bold text-white text-xl">PT Sofco Graha</h3>
            <p
              class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100"
            >
              Build ERP module for manufacture company and support the implementation in Solo factory using Java and Oracle technology
            </p>
          </div>
        </div>

        <!-- right timeline -->
        <div
          class="mb-8 flex justify-between items-center w-full right-timeline"
        >
          <div class="order-1 w-5/12"></div>
          <div
            class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-12 rounded-2xl"
          >
            <h1 class="mx-auto font-semibold text-lg text-white">2009</h1>
          </div>
          <div
            class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4"
          >
            <h3 class="mb-3 font-bold text-gray-800 text-xl">Ipmart Sdn Bhd</h3>
            <p
              class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"
            >
              Work as programmer support after college graduation. First time know about 
              backend and frontend terminology also first time work overseas.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from "vue";
export default defineComponent({
  name: "About",
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