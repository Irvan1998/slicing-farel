<script>
export default {
  name: "OverlayBackground",
  props: {
    showNav: {
      type: Boolean,
      required: true,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["close"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<template>
  <Transition name="fade">
    <div
      v-if="showNav"
      @click="close"
      :class="{
        black: !transparent,
        transparent: transparent,
      }"
    ></div>
  </Transition>
</template>

<style scoped>
div {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.transparent {
  background-color: transparent;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
