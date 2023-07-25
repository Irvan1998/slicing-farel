import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useSectionStore = defineStore("section", () => {
  const sections = ref(null);
  const activeSection = computed(() => {
    return Object.values(sections.value).find(
      (section) =>
        section.offsetTop <= window.scrollY + 1 &&
        section.offsetTop + section.offsetHeight > window.scrollY + 1
    );
  });

  return { sections, activeSection };
});
