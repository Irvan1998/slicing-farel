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
import PricingAccordion from "../components/PricingAccordion.vue";
import TickSquareIcon from "@/components/icons/TickSquareIcon.vue";
import XCircleIcon from "@/components/icons/XCircleIcon.vue";

const sectionStore = useSectionStore();

const swiperInstance = ref(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const homeSection = ref(null);
const aboutUsSection = ref(null);
const featuresSection = ref(null);
const testimonySection = ref(null);
const pricingSection = ref(null);

const pricing = ref({
  frequency: "monthly",
  data: [
    {
      title: "Free",
      price: 0,
      features: {
        "Number of courses": 12,
        "Course management": true,
        "All-access feature": false,
        "Cloud storage": "1TB Storage",
        Alerts: "Weekly",
      },
    },
    {
      title: "Premium",
      price: 29,
      features: {
        "Number of courses": 24,
        "Course management": true,
        "All-access feature": true,
        "Cloud storage": "10TB Storage",
        Alerts: "Daily",
      },
    },
    {
      title: "Enterprise",
      price: 49,
      features: {
        "Number of courses": "Unlimited",
        "Course management": true,
        "All-access feature": true,
        "Cloud storage": "100TB Storage",
        Alerts: "Daily",
      },
    },
  ],
});

const getPricingPrice = (price) => {
  if (pricing.value.frequency === "yearly") {
    return price;
  }
  return parseInt(price / 12);
};

const activePricing = ref(1);

const setActivePricing = (index) => {
  if (index === activePricing.value) {
    activePricing.value = null;
    return;
  }
  activePricing.value = index;
};

onMounted(() => {
  sectionStore.$patch((state) => {
    state.sections = {
      home: homeSection,
      about_us: aboutUsSection,
      features: featuresSection,
      testimony: testimonySection,
      pricing: pricingSection,
    };
  });
});
</script>

<template>
  <main>
    <section
      class="flex flex-col items-center pl-6 lg:px-28 relative overflow-hidden"
      id="home"
      ref="homeSection"
    >
      <img
        src="../assets/vectors/EllipseVector.svg"
        alt=""
        class="absolute w-6 sm:w-8 md:w-10 lg:w-12 aspect-square left-12 top-32 lg:left-44 lg:top-52 -z-10 -rotate-[47deg]"
      />
      <img
        src="../assets/vectors/PencilVector.svg"
        alt=""
        class="absolute w-6 sm:w-8 md:w-10 lg:w-12 aspect-square right-10 top-24 sm:right-24 md:right-48 lg:right-80 lg:top-28 -z-10 rotate-[7deg]"
      />
      <img
        src="../assets/vectors/EllipseVector.svg"
        alt=""
        class="hidden absolute w-6 sm:w-8 md:w-10 lg:w-12 aspect-square right-12 top-48 md:inline-block lg:right-44 lg:top-60 -z-10 -rotate-[47deg]"
      />
      <img
        src="../assets/vectors/BookVector.svg"
        alt=""
        class="absolute w-6 sm:w-8 md:w-10 lg:w-12 aspect-square right-28 top-64 md:right-1/2 md:translate-x-1/2 lg:top-96 lg:translate-y-12 -z-10 -rotate-[47deg]"
      />
      <img
        src="../assets/vectors/LineVector.svg"
        alt=""
        class="absolute w-12 sm:w-14 md:w-16 lg:w-20 aspect-square left-10 top-80 translate-y-12 lg:top-96 lg:left-28 lg:translate-y-12 lg:translate-x-1/2 -z-10"
      />
      <img
        src="../assets/vectors/RulerPencilVector.svg"
        alt=""
        class="rotate-[51deg] absolute w-6 sm:w-8 md:w-10 lg:w-12 aspect-square right-10 top-96 lg:right-32 lg:top-96 lg:translate-y-24 -z-10"
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
      class="bg-neutral-500 px-6 py-12 lg:p-24 relative overflow-hidden"
      id="about_us"
      ref="aboutUsSection"
    >
      <img
        :src="'src/assets/vectors/AboutUsVector.svg'"
        alt=""
        class="absolute scale-[200%] rotate-[143deg] top-40 left-1/3 md:scale-150 lg:scale-100 lg:rotate-[24deg] lg:-left-24 lg:top-32 z-0"
      />
      <img
        :src="'src/assets/vectors/AboutUsVector.svg'"
        alt=""
        class="absolute scale-[200%] -rotate-[140deg] -bottom-4 left-20 translate-x-2 md:scale-150 lg:scale-100 lg:-rotate-[44deg] lg:left-auto lg:-right-36 lg:bottom-48 z-0"
      />
      <div
        class="grid lg:grid-cols-2 gap-10 lg:gap-16 lg:gap-y-20 relative z-10"
      >
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

    <section class="px-6 py-12 lg:p-24" id="features" ref="featuresSection">
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
      ref="testimonySection"
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
                :src="'src/assets/daniel-syahrul.png'"
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
                  :src="'src/assets/daniel-syahrul.png'"
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
          class="flex justify-between gap-6 absolute z-10 bottom-0 right-0 w-full transition-all ease-in-out duration-300 lg:w-fit lg:bottom-12 lg:py-2"
          v-if="swiperInstance"
        >
          <div class="w-32 lg:hidden"></div>
          <div class="flex-1 flex justify-between gap-4">
            <span
              class="p-1 rounded-lg lg:p-3"
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
              class="p-1 rounded-lg lg:p-3"
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

    <section class="px-6 py-12 lg:p-24" id="pricing" ref="pricingSection">
      <div class="flex flex-col items-center">
        <header class="text-heading-dark text-center mb-6 lg:mb-16">
          <h3
            class="text-sm font-semibold mb-1 lg:text-2xl lg:font-medium lg:mb-2 text-primary-500"
          >
            Pricing
          </h3>
          <h1 class="text-2xl lg:text-5xl leading-8 font-bold">
            Best Deals For You
          </h1>
        </header>
        <main class="mb-10 lg:gap-6 lg:mb-16 lg:px-14 w-full">
          <!-- ! Desktop View -->
          <div
            class="hidden rounded-[32px] shadow-[16px_16px_64px_0px_rgba(0,0,0,0.08)] bg-white overflow-hidden p-12 pt-0 lg:block"
          >
            <table>
              <thead>
                <tr>
                  <th class="w-full pb-7">
                    <div class="flex gap-3 mb-3 justify-center">
                      <button
                        class="btn"
                        :class="
                          pricing.frequency == 'monthly'
                            ? 'secondary-btn'
                            : 'primary-btn'
                        "
                        @click="pricing.frequency = 'monthly'"
                      >
                        Monthly
                      </button>
                      <button
                        class="btn"
                        :class="
                          pricing.frequency == 'yearly'
                            ? 'secondary-btn'
                            : 'primary-btn'
                        "
                        @click="pricing.frequency = 'yearly'"
                      >
                        Yearly
                      </button>
                    </div>
                    <h4 class="text-heading-dark text-center font-medium">
                      Get <span class="font-bold">30%</span> off with our yearly
                      deals!
                    </h4>
                  </th>

                  <th
                    class="pb-7"
                    v-for="(pricing, index) in pricing.data"
                    :key="index"
                  >
                    <div
                      class="font-bold mb-2 p-12 rounded-2xl cursor-pointer transition-colors ease-in-out relative overflow-hidden bg-white hover:bg-neutral-500 group"
                      @mouseenter="
                        (el) => {
                          const btn = el.target.querySelector('button');
                          btn.classList.remove('secondary-btn');
                          btn.classList.add('primary-btn');
                          btn.innerText = 'Start Free Trial';
                        }
                      "
                      @mouseleave="
                        (el) => {
                          const btn = el.target.querySelector('button');
                          btn.classList.remove('primary-btn');
                          btn.classList.add('secondary-btn');
                          btn.innerText = 'Get Started';
                        }
                      "
                    >
                      <img
                        class="absolute rotate-[30deg] -top-[2%] -right-[1%] scale-125 transition-all ease-in-out delay-15000 duration-300 opacity-0 -translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
                        :src="'src/assets/vectors/MultipleLineVector.svg'"
                        alt=""
                      />
                      <img
                        class="absolute rotate-[30deg] bottom-0 -left-[25%] scale-125 transition-all ease-in-out delay-15000 duration-300 opacity-0 translate-y-full group-hover:opacity-100 group-hover:-translate-y-full"
                        :src="'src/assets/vectors/MultipleLineVector.svg'"
                        alt=""
                      />

                      <div
                        class="flex flex-col justify-between items-center relative"
                      >
                        <h4
                          class="text-xl font-semibold mb-4 text-heading-dark group-hover:text-white"
                          v-text="pricing.title"
                        />

                        <span
                          class="text-4xl font-semibold mb-1 text-heading-dark group-hover:text-white"
                          v-text="`$${getPricingPrice(pricing.price)}`"
                        />
                        <span
                          class="text-sm font-medium text-text-dark group-hover:text-white"
                          >Per member</span
                        >

                        <button class="btn mt-6 secondary-btn">
                          Get Started
                        </button>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr
                  class="w-full odd:bg-gray-50"
                  v-for="(featureKey, index) in Object.keys(
                    pricing.data[0].features
                  )"
                  :key="index"
                >
                  <th
                    class="text-left font-semibold text-base text-heading-dark whitespace-nowrap px-9"
                    v-text="featureKey"
                  />
                  <td
                    class="text-center p-6"
                    v-for="(pricing, index) in pricing.data"
                    :key="index"
                  >
                    <div
                      class="w-full flex justify-center items-center"
                      v-if="typeof pricing.features[featureKey] == 'boolean'"
                    >
                      <TickSquareIcon
                        class=""
                        v-if="pricing.features[featureKey]"
                      />
                      <XCircleIcon class="" v-else />
                    </div>
                    <template v-else>
                      {{ pricing.features[featureKey] }}
                    </template>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- ! Mobile Device -->
          <div class="block lg:hidden">
            <div>
              <div class="flex gap-3 mb-3 justify-center">
                <button
                  class="btn"
                  :class="
                    pricing.frequency == 'monthly'
                      ? 'secondary-btn'
                      : 'primary-btn'
                  "
                  @click="pricing.frequency = 'monthly'"
                >
                  Monthly
                </button>
                <button
                  class="btn"
                  :class="
                    pricing.frequency == 'yearly'
                      ? 'secondary-btn'
                      : 'primary-btn'
                  "
                  @click="pricing.frequency = 'yearly'"
                >
                  Yearly
                </button>
              </div>
              <h4 class="text-heading-dark text-center font-medium">
                Get <span class="font-bold">30%</span> off with our yearly
                deals!
              </h4>
            </div>

            <div class="flex flex-col md:grid">
              <PricingAccordion
                v-for="(pricing, index) in pricing.data"
                :key="index"
                :title="pricing.title"
                :price="getPricingPrice(pricing.price)"
                :feature="pricing.features"
                :show="activePricing === index"
                @toggle="setActivePricing(index)"
              />
            </div>
          </div>
        </main>
      </div>
    </section>
  </main>
</template>
