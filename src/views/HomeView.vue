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
    <section class="min-h-screen flex items-center" id="home" ref="home">
      Home
    </section>
    <section class="min-h-screen" id="about_us" ref="about_us">About</section>
    <section class="min-h-screen" id="features" ref="features">About</section>
    <section class="min-h-screen" id="testimony" ref="testimony">About</section>
    <section class="min-h-screen" id="pricing" ref="pricing">About</section>
  </main>
</template>
