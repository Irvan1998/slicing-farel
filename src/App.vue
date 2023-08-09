<script setup>
import { RouterView } from "vue-router";
import ListIcon from "./components/icons/ListIcon.vue";
import { ref, watch, onMounted } from "vue";
import OverlayBackground from "./components/OverlayBackground.vue";
import { useSectionStore } from "./stores/section";
import MailIcon from "./components/icons/MailIcon.vue";
import TwitterIcon from "./components/icons/TwitterIcon.vue";
import FacebookIcon from "./components/icons/FacebookIcon.vue";

const sectionStore = useSectionStore();

const showNav = ref(false);
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
  const appPaddingTop = parseInt(document.querySelector("header").offsetHeight);
  const active = Object.values(sections.value).find(
    (section) =>
      section.offsetTop <= window.scrollY + appPaddingTop &&
      section.offsetTop + section.offsetHeight > window.scrollY + appPaddingTop
  );
  activeSection.value = active?.id;
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
      <img class="lg:h-12" :src="'/src/assets/logo.svg'" alt="corze" />
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

    <button class="btn primary-btn hidden lg:inline-block">Get Started</button>

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

          <button class="btn primary-btn my-2 mx-4">Get Started</button>
        </nav>
      </Transition>
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="bg-neutral-500 p-6 pt-12 lg:p-24 divide-y">
      <div
        class="flex flex-col items-center gap-10 pb-16 md:flex-row lg:pb-24 lg:gap-28"
      >
        <div>
          <h1 class="text-white text-3xl font-bold mb-4 lg:text-5xl">
            Learn on all platform <br />
            with
            <span class="text-primary-500 text-3xl font-bold lg:text-5xl"
              >Corze</span
            >
          </h1>
          <p
            class="text-text-light text-sm font-medium mb-10 lg:text-lg lg:mb-16 lg:w-2/3"
          >
            Available on Android, IOS and Windows with all available features
            for the best productivity
          </p>
          <div class="flex flex-wrap gap-3 lg:gap-6 lg:h-12">
            <img
              class="h-full"
              :src="'src/assets/google-play.svg'"
              alt="Google Play"
            />
            <img
              class="h-full"
              :src="'src/assets/app-store.svg'"
              alt="App Store"
            />
            <img
              class="h-full"
              :src="'src/assets/microsoft-store.svg'"
              alt="Microsoft Store"
            />
          </div>
        </div>
        <div
          class="flex rounded-xl gap-4 w-full aspect-video md:w-1/2 lg:gap-6"
        >
          <img
            class="bg-[#EAF6FE] rounded-tl-xl rounded-bl-xl w-1/3"
            :src="'src/assets/footer-phone-pict.svg'"
            alt=""
          />
          <img
            class="bg-[#EAF6FE] rounded-tr-xl rounded-br-xl w-full"
            :src="'src/assets/footer-desktop-pict.svg'"
            alt=""
          />
        </div>
      </div>

      <div
        class="flex justify-between items-center gap-4 flex-wrap pt-4 lg:pt-10"
      >
        <img class="lg:h-12" :src="'src/assets/logo.svg'" alt="corze" />
        <p
          class="text-xs text-center text-text-light w-full order-2 lg:order-none lg:w-fit lg:text-base"
        >
          Corze is associated with a lot company. <br class="block lg:hidden" />
          Terms of use and Privacy Policy is applied.
        </p>
        <div class="flex items-center gap-6">
          <MailIcon />
          <TwitterIcon />
          <FacebookIcon />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
header {
  @apply bg-white flex items-center justify-between w-full p-6 fixed top-0 z-50 lg:px-24 lg:py-5;

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
