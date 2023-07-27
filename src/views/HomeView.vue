<script setup>
import { useSectionStore } from "../stores/section";
import { onMounted, ref } from "vue";

const sectionStore = useSectionStore();

const home = ref(null);
const about_us = ref(null);
const features = ref(null);
const testimony = ref(null);
const pricing = ref(null);

onMounted(() => {
  sectionStore.$patch((state) => {
    state.sections = {
      home: home,
      about_us: about_us,
      features: features,
      testimony: testimony,
      pricing: pricing,
    };
  });
});
</script>

<template>
  <main>
    <section
      class="flex flex-col items-center pl-6 lg:pr-6 relative overflow-hidden"
      id="home"
      ref="home"
    >
      <img
        src="../assets/vectors/EllipseVector.svg"
        alt=""
        class="absolute w-6 sm:w-8 md:w-10 lg:w-12 aspect-square left-12 top-32 lg:left-44 lg:top-52 -z-10 -rotate-[47deg]"
      />
      <img
        src="../assets/vectors/PencilVector.svg"
        alt=""
        class="absolute w-6 sm:w-8 md:w-10 lg:w-12 aspect-square right-10 top-24 lg:right-96 lg:top-28 -z-10 rotate-[7deg]"
      />

      <div
        class="pt-28 lg:pt-32 pr-6 lg:pr-0 text-center max-w-md lg:max-w-2xl flex flex-col items-center"
      >
        <h1 class="text-heading-dark text-3xl lg:text-6xl leading-10 font-bold">
          Learn New Skills <br />The Most Efficient Way
        </h1>
        <p class="mt-4 mb-10 text-sm lg:text-xl text-text-dark font-medium">
          Discover, track, and compare new skills everyday, with the best course
          on our integrated mobile and desktop app called
          <span class="text-primary-500 font-bold">Corze</span>!
        </p>
        <div class="flex justify-center gap-4 w-full max-w-xs">
          <button class="w-full">Try Free Trial</button>
          <button
            class="bg-white text-primary-500 outline outline-2 outline-primary-500 -outline-offset-2 w-full"
          >
            Demo the App
          </button>
        </div>
      </div>

      <img
        src="../assets/mockup.png"
        alt=""
        srcset=""
        class="mt-[92px] hidden lg:block"
      />
      <img
        src="../assets/mockup-mobile.png"
        alt=""
        srcset=""
        class="mt-20 block w-full lg:hidden"
      />
    </section>
    <section class="min-h-screen bg-neutral-500" id="about_us" ref="about_us">
      About
    </section>
    <section class="min-h-screen" id="features" ref="features">About</section>
    <section class="min-h-screen" id="testimony" ref="testimony">About</section>
    <section class="min-h-screen" id="pricing" ref="pricing">About</section>
  </main>
</template>
