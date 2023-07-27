<script setup>
import { useSectionStore } from "../stores/section";
import { onMounted, ref } from "vue";
import Accordion from "../components/AccordionComponent.vue";
import BoltshiftCompany from "../components/logo/BoltshiftCompany.vue";
import FeatherDevCompany from "../components/logo/FeatherDevCompany.vue";
import GlobalBankCompany from "../components/logo/GlobalBankCompany.vue";
import LightboxCompany from "../components/logo/LightboxCompany.vue";
import NietzcheCompany from "../components/logo/NietzcheCompany.vue";

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
          <button class="btn primary-btn w-full">Try Free Trial</button>
          <button class="btn secondary-btn w-full">Demo the App</button>
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
    <section
      class="bg-neutral-500 px-6 py-12 lg:p-24"
      id="about_us"
      ref="about_us"
    >
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 lg:gap-y-20">
        <div class="text-heading-light">
          <h3
            class="text-sm font-semibold mb-1 lg:text-2xl lg:font-medium lg:mb-2"
          >
            About Us
          </h3>
          <h1 class="text-2xl lg:text-5xl leading-8 font-bold">
            Collaborate with the best teacher
          </h1>
        </div>
        <div class="-mt-7 lg:mt-0">
          <p class="font-medium mb-6 lg:mb-10">
            We provide you courses with the best modul and trustworthy teacher
            to ensure your learning experience is comfortable while.
          </p>
          <button class="btn primary-btn w-36 lg:w-44" type="button">
            Details
          </button>
        </div>
        <div>
          <img
            class="rounded-3xl max-h-96 w-full object-cover object-center"
            src="../assets/about.png"
            alt=""
          />
        </div>
        <div class="flex flex-col divide-y gap-4 lg:gap-8">
          <Accordion
            class="pt-4 lg:pt-8 first:pt-0"
            title="Companies Creator"
            body="We provide you courses with the best modul and trustworthy teacher to ensure your learning experience is comfortable while also gaining new skills everyday."
          />
          <Accordion
            class="pt-4 lg:pt-8 first:pt-0"
            title="School Teacher"
            body="We provide you courses with the best modul and trustworthy teacher to ensure your learning experience is comfortable while also gaining new skills everyday."
            :init-show="true"
          />
          <Accordion
            class="pt-4 lg:pt-8 first:pt-0"
            title="Bootcamp Mentor"
            body="We provide you courses with the best modul and trustworthy teacher to ensure your learning experience is comfortable while also gaining new skills everyday."
          />
          <Accordion
            class="pt-4 lg:pt-8 first:pt-0"
            title="Agencies Advisor"
            body="We provide you courses with the best modul and trustworthy teacher to ensure your learning experience is comfortable while also gaining new skills everyday."
          />

          <!-- Accordion Open by Index -->
        </div>
      </div>
    </section>
    <section
      class="hidden flex-col justify-center items-center gap-8 bg-neutral-500 px-20 py-12 lg:flex"
    >
      <h4 class="text-base font-medium">
        Over 250+ Agencies & Companies Support
      </h4>
      <div class="flex gap-16">
        <BoltshiftCompany />
        <FeatherDevCompany />
        <GlobalBankCompany />
        <LightboxCompany />
        <NietzcheCompany />
      </div>
    </section>
    <section class="min-h-screen" id="features" ref="features">About</section>
    <section class="min-h-screen" id="testimony" ref="testimony">About</section>
    <section class="min-h-screen" id="pricing" ref="pricing">About</section>
  </main>
</template>
