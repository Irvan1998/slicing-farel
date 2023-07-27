<script setup>
import { ref, defineProps } from "vue";
import ArrowDownIcon from "./icons/ArrowDownIcon.vue";

const props = defineProps({
  title: String,
  body: String,
  initShow: {
    type: Boolean,
    default: false,
  },
});

const show = ref(props.initShow);

const toggle = () => {
  show.value = !show.value;
};

const beforeEnter = (el) => {
  el.style.height = "0";
};

const enter = (el) => {
  el.style.height = el.scrollHeight + "px";
};

const beforeLeave = (el) => {
  el.style.height = el.scrollHeight + "px";
};

const leave = (el) => {
  el.style.height = "0";
};
</script>

<template>
  <div class="w-full">
    <div
      class="flex justify-between items-center text-base font-bold lg:text-2xl text-heading-light mb-3"
    >
      <slot name="header">
        <h4 v-text="props.title" />
      </slot>
      <ArrowDownIcon
        class="transition-transform ease-in-out cursor-pointer"
        :class="show ? 'rotate-180' : 'rotate-0'"
        v-on:click="toggle"
      />
    </div>
    <transition
      name="accordion"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
    >
      <div class="overflow-hidden transition-all ease-in-out" v-show="show">
        <slot name="body">
          <p
            class="text-xs leading-loose font-normal lg:text-base lg:font-medium lg:leading-normal"
            v-text="props.body"
          />
        </slot>
      </div>
    </transition>
  </div>
</template>
