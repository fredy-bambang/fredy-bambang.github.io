<template>
  <section class="text-gray-700 body-font">
    <div class="container px-8 py-5 mx-auto lg:px-4">
      <div class="box-border md:box-content">
        <div
          class="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3 my-5"
        >
          <b>For Recruiter</b><br />
          <p>
            I know that recruit experience <b>tech talent</b> is <u>hype</u> and <i>high demand</i> for this era.<br> 
            I'm still love work in my current company and it's like my comfort zone for my work life balance and i'm still learning a new stuff here.<br>
            Personally i'm only a <i>generalist backend programmer</i>, that experienced create new project but <u>not specialist in a single stack</u>. 
            If you find a specialist, i think i'm not the person that you need.<br>
            Currently i use golang and postgres in my current company and follow the company coding style.<br><br>

            I accept side hustle that handle micro task or create a new microservice project or project consultation, and i can afford my time around 1 - 2 hours per day.
            We can discuss about it as long it's backend side. If need frontend, i think i will ask my peer that usually using <b>React js</b> as their stack to help.<br><br>
            <b>And there the list what i personally can do to help:</b> 
            <ul class="list-disc">
              <li>Define Project / Product requirement and the implementation like define table, relation</li>
              <li>Create CRUD api with Laravel (php), Golang or Adonis js (node js) as my backend engineering stack</li>
              <li>Dockerize golang / javascript project</li>
              <li>Deploy Laravel Project to shared hosting and setup domain</li>
              <li>For setup domain on vps, aws, gcp etc, maybe i can ask my peer to help or need do the research, because i never really done it myself</li>
              <li>Do common ci / cd using github action</li>
              <li>Other ? just ask on my <a href="https://www.linkedin.com/in/fredy-bambang-65094598/" class="underline text-blue-700 ...">linked</a></li>
            </ul>
          </p>
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
  },
});
</script>