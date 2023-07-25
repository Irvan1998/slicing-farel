<script setup>
import { RouterView } from "vue-router";
import ListIcon from "./components/icons/ListIcon.vue";
import { ref, watch, onMounted } from "vue";
import OverlayBackground from "./components/OverlayBackground.vue";
import { useSectionStore } from "./stores/section";

const sectionStore = useSectionStore();

const showNav = ref(true);
const sections = ref({});
const activeSection = ref(null);

const toggleNav = () => {
  showNav.value = !showNav.value;
};

const closeOnEscape = (e) => {
  if (showNav.value && e.key === "Escape") {
    showNav.value = false;
  }
};

const onScroll = () => {
  activeSection.value = Object.values(sections.value).find(
    (section) =>
      section.offsetTop <= window.scrollY + 1 &&
      section.offsetTop + section.offsetHeight > window.scrollY + 1
  ).id;
};

onMounted(() => {
  document.addEventListener("keydown", closeOnEscape);
  document.addEventListener("scroll", onScroll);
});

watch(
  () => sectionStore.sections,
  () => {
    sections.value = sectionStore.sections;
    onScroll();
  }
);
</script>

<template>
  <header>
    <RouterLink to="/">
      <img class="lg:h-12" src="./assets/logo.svg" alt="corze" />
    </RouterLink>

    <nav class="hidden lg:flex gap-12">
      <a
        v-for="(item, index) in Object.keys(sections)"
        :key="index"
        :href="`#${item}`"
        v-text="item.replace('_', ' ')"
        :class="{
          active: activeSection === item,
        }"
      />
    </nav>

    <button class="hidden lg:inline-block">Get Started</button>

    <div class="block lg:hidden">
      <ListIcon @click="toggleNav" class="cursor-pointer" />

      <OverlayBackground
        :showNav="showNav"
        :transparent="true"
        @close="toggleNav"
      />

      <Transition name="slide-fade">
        <nav
          class="flex flex-col bg-white absolute top-full right-6 rounded-lg z-20 shadow-medium"
          v-if="showNav"
        >
          <a
            v-for="(item, index) in Object.keys(sections)"
            :key="index"
            :href="`#${item}`"
            class="py-4 px-6"
            :class="{
              active: activeSection === item,
            }"
            v-text="item.replace('_', ' ')"
          />

          <button class="py-4 px-6 my-2 mx-4 text-sm">Get Started</button>
        </nav>
      </Transition>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
header {
  @apply bg-white flex items-center justify-between w-full p-6 fixed top-0 lg:px-24 lg:py-5;

  a {
    @apply text-text-dark no-underline font-medium text-base capitalize;

    @media (hover: hover) and (pointer: fine) {
      @apply hover:text-primary-500 hover:font-bold;
    }
    &.active {
      @apply text-primary-500 font-bold;
    }
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  @apply transition-all duration-300 ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  @apply opacity-0 transform translate-x-20;
}
</style>
