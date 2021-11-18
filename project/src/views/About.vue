<template>
  <section class="text-gray-700 body-font">
    <div class="container px-8 py-5 mx-auto lg:px-4">
      <div class="box-border md:box-content">
        <div
          class="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3 my-5"
        >
          <b>Little Sharing, for who landing to this page</b><br />
          <p>
            Personal preference more to backend stack that i can understand and
            easy to try. i feel introvert but other think i'm extrovert. I
            accept build feature (micro job) as side hustle because currently
            i'm fulltime worker.<br />
            ... will think what will i write later on. And below are my little
            experiences
          </p>
        </div>

        <div
          v-for="item in experiences"
          :key="item.index"
          class="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3 my-5"
        >
          <b>{{ item.title }}</b
          ><br />
          <small>{{ item.timeline }}</small>
          <p v-html="item.content"></p>
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
    // const count = ref(0);
    const experiences = ref([
      {
        title: "PT Payfazz Teknologi Nusantara",
        timeline: "Feb 2018 - Now",
        content: `
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
        `,
      },
      {
        title: "Etobee",
        timeline: "Nov 2016 - Feb 2018",
        content: `
          Logistic Company, build and maintenance internal admin warehouse system.
        `,
      },
      {
        title: "Freelance",
        timeline: "Sep 2015 - Oct 2016",
        content: `
          Resign from previous company and try build travel apps with partner
        `,
      },
      {
        title: "PT Sofco Graha",
        timeline: "Oct 2012 - Sep 2015",
        content: `
          Build ERP module for manufacture company and support the implementation in Solo factory using Java and Oracle technology
        `,
      },
      {
        title: "Ipmart Sdn Bhd",
        timeline: "Feb 2009 - Feb 2012",
        content: `
          Work as programmer support after college graduation. 
          First time know about backend and frontend terminology also first time work overseas.  
        `,
      },
    ]);
    
    return { experiences };
  },
});
</script>