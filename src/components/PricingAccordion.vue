<script setup>
import { defineProps, defineEmits, computed } from "vue";
import TickSquareIcon from "./icons/TickSquareIcon.vue";
import XCircleIcon from "./icons/XCircleIcon.vue";

const props = defineProps({
  title: String,
  feature: Object,
  price: String,
  show: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["toggle"]);

const toggle = () => {
  emits("toggle");
};

const features = computed(() => {
  return Object.keys(props.feature).map((key) => ({
    key: key,
    value: props.feature[key],
  }));
});

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
      class="font-bold mb-2 p-12 rounded-2xl cursor-pointer transition-colors ease-in-out relative overflow-hidden"
      :class="{
        'bg-neutral-500': props.show,
        'bg-white': !props.show,
      }"
      @click="toggle"
    >
      <img
        class="absolute rotate-[30deg] -top-2 right-11 transition-all ease-in-out delay-15000 duration-300"
        :class="
          props.show
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full'
        "
        src="src/assets/vectors/MultipleLineVector.svg"
        alt=""
      />
      <img
        class="absolute rotate-[30deg] bottom-8 right-32 transition-all ease-in-out delay-15000 duration-300"
        :class="
          props.show
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-full'
        "
        src="src/assets/vectors/MultipleLineVector.svg"
        alt=""
      />

      <div class="flex flex-col justify-between items-center relative">
        <slot name="header">
          <h4
            class="text-xl font-semibold mb-4"
            :class="props.show ? 'text-white' : 'text-heading-dark '"
            v-text="props.title"
          />

          <span
            class="text-4xl font-semibold mb-1"
            :class="props.show ? 'text-white' : 'text-heading-dark '"
            v-text="`$${props.price}`"
          />
          <span
            class="text-sm font-medium"
            :class="props.show ? 'text-white' : 'text-text-dark '"
            >Per member</span
          >

          <button v-if="props.show" class="btn mt-6 primary-btn">
            Start Free Trial
          </button>
          <button v-else class="btn mt-6 secondary-btn">Get Started</button>
        </slot>
      </div>
    </div>
    <transition
      name="accordion"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
    >
      <div
        class="overflow-hidden transition-all ease-in-out"
        v-show="props.show"
      >
        <slot name="body">
          <table class="w-full border-separate border-spacing-y-4">
            <tbody class="w-full">
              <tr
                class="w-full odd:bg-gray-50"
                v-for="feature in features"
                :key="feature.key"
              >
                <th
                  class="text-left font-semibold text-base text-heading-dark whitespace-nowrap p-3"
                  v-text="feature.key"
                />
                <td
                  v-if="typeof feature.value === 'boolean'"
                  class="flex justify-end p-3"
                >
                  <TickSquareIcon class="" v-if="feature.value" />
                  <XCircleIcon class="" v-else />
                </td>
                <td
                  v-else
                  class="text-right font-semibold text-base p-3"
                  v-text="feature.value"
                />
              </tr>
            </tbody>
          </table>
        </slot>
      </div>
    </transition>
  </div>
</template>
