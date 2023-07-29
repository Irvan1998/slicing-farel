<script setup>
import "swiper/css/effect-creative";
import "swiper/css";

import { useSectionStore } from "../stores/section";
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Keyboard, EffectCreative } from "swiper/modules";

import Accordion from "../components/AccordionComponent.vue";
import BoltshiftCompany from "../components/logo/BoltshiftCompany.vue";
import FeatherDevCompany from "../components/logo/FeatherDevCompany.vue";
import GlobalBankCompany from "../components/logo/GlobalBankCompany.vue";
import LightboxCompany from "../components/logo/LightboxCompany.vue";
import NietzcheCompany from "../components/logo/NietzcheCompany.vue";
import FeatureComponent from "../components/FeatureComponent.vue";
import CaretLeftIcon from "../components/icons/CaretLeftIcon.vue";
import CaretRightIcon from "../components/icons/CaretRightIcon.vue";

const sectionStore = useSectionStore();

const swiperInstance = ref(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

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
        <header class="text-heading-light">
          <h3
            class="text-sm font-semibold mb-1 lg:text-2xl lg:font-medium lg:mb-2"
          >
            About Us
          </h3>
          <h1 class="text-2xl lg:text-5xl leading-8 font-bold">
            Collaborate with the best teacher
          </h1>
        </header>
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
      <main class="flex gap-16">
        <BoltshiftCompany />
        <FeatherDevCompany />
        <GlobalBankCompany />
        <LightboxCompany />
        <NietzcheCompany />
      </main>
    </section>

    <section class="px-6 py-12 lg:p-24" id="features" ref="features">
      <div class="flex flex-col items-center">
        <header class="text-heading-dark text-center mb-6 lg:mb-16">
          <h3
            class="text-sm font-semibold mb-1 lg:text-2xl lg:font-medium lg:mb-2 text-primary-500"
          >
            Features
          </h3>
          <h1 class="text-2xl lg:text-5xl leading-8 font-bold">
            Tools to Help you Focus
          </h1>
        </header>
        <main class="grid gap-10 lg:grid-cols-3 mb-10 lg:gap-6 lg:mb-16">
          <FeatureComponent
            title="Real-Time Learning Analytics"
            body="Analyst your learning curve to ensure better productivity and effiency during learning hours"
            img="src/assets/feature-1.png"
          />
          <FeatureComponent
            title="Progress tracker"
            body="Pick up where you left of with progress tracker so you don’t miss out important chapter"
            img="src/assets/feature-2.png"
          />
          <FeatureComponent
            title="Forum discussion"
            body="Ask, discuss and answer with the help of other people in our forum discussion"
            img="src/assets/feature-3.png"
          />
        </main>
        <footer>
          <button class="btn primary-btn">Learn More</button>
        </footer>
      </div>
    </section>

    <section
      class="bg-neutral-500 px-6 py-12 lg:p-24"
      id="testimony"
      ref="testimony"
    >
      <header class="text-heading-dark text-center mb-6 lg:mb-14">
        <h3
          class="text-sm font-semibold mb-1 lg:text-2xl lg:font-medium lg:mb-2 text-text-dark"
        >
          Testimony
        </h3>
        <h1
          class="text-2xl lg:text-5xl leading-8 font-bold text-heading-light mb-3 lg:mb-4"
        >
          Hear out our best student
        </h1>
        <h3 class="text-sm font-medium lg:text-xl text-text-dark">
          Connect with the other members to know their experience using our
          services
        </h3>
      </header>
      <Swiper
        :slides-per-view="1"
        :grab-cursor="true"
        :effect="'creative'"
        :keyboard="{
          enabled: true,
        }"
        :creativeEffect="{
          prev: {
            shadow: true,
            translate: ['-130%', 0, -500],
            opacity: 0,
          },
          next: {
            shadow: true,
            translate: ['130%', 0, -500],
            opacity: 0,
          },
        }"
        :modules="[EffectCreative, Keyboard]"
        class="relative"
        @swiper="onSwiper"
      >
        <SwiperSlide v-for="index in 10" :key="index">
          <div class="flex gap-20">
            <div class="hidden items-center w-1/3 lg:flex">
              <img
                class="aspect-square rounded-2xl object-cover object-center w-full"
                src="src\assets\daniel-syahrul.png"
                alt=""
              />
            </div>

            <div class="flex flex-col gap-10 justify-between flex-1 lg:py-12">
              <div>
                <p
                  class="text-2xl font-normal text-heading-light font-serif lg:text-5xl"
                >
                  “
                </p>
                <p
                  class="text-lg font-semibold text-heading-light lg:text-2xl lg:leading-10"
                >
                  My experience using it is so much fun and simple to learn
                  about different stuff. Hands down the best learning services!
                  I recommend using this while you are at the college or just
                  trying to learn new skills for the future.
                </p>
              </div>

              <div class="flex gap-6">
                <img
                  class="aspect-square rounded-2xl object-cover object-center w-32 lg:hidden"
                  src="src\assets\daniel-syahrul.png"
                  alt=""
                />
                <div class="flex flex-col gap-1">
                  <h5
                    class="text-base font-bold text-heading-light lg:text-2xl"
                  >
                    Daniel Syahrul
                  </h5>
                  <p class="text-sm font-medium text-text-light lg:text-lg">
                    Bachelor degree of science
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div
          class="flex justify-between gap-6 absolute z-10 bottom-0 right-0 w-full transition-all ease-in-out duration-300 lg:w-fit lg:bottom-12 lg:-translate-y-1/2"
          v-if="swiperInstance"
        >
          <div class="w-32 lg:hidden"></div>
          <div class="flex-1 flex justify-between gap-4">
            <span
              class="p-1 rounded-lg"
              :class="{
                'bg-white bg-opacity-25 cursor-auto':
                  swiperInstance.isBeginning,
                'bg-primary-500 hover:bg-primary-400 cursor-pointer':
                  !swiperInstance.isBeginning,
              }"
              @click="swiperInstance.slidePrev()"
            >
              <CaretLeftIcon />
            </span>
            <span
              class="p-1 rounded-lg"
              :class="{
                'bg-white bg-opacity-25 cursor-auto': swiperInstance.isEnd,
                'bg-primary-500 hover:bg-primary-400 cursor-pointer':
                  !swiperInstance.isEnd,
              }"
              @click="swiperInstance.slideNext()"
              ><CaretRightIcon
            /></span>
          </div>
        </div>
      </Swiper>
    </section>
    <section class="min-h-screen" id="pricing" ref="pricing"></section>
  </main>
</template>
