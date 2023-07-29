<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <img
      class="rounded-2xl w-full object-cover mb-4 lg:mb-6"
      :src="props.img"
      alt=""
    />
    <div class="flex flex-col gap-1 lg:gap-2">
      <h3
        class="text-base font-bold text-heading-dark lg:text-2xl"
        v-text="props.title"
      />
      <p
        class="text-sm font-medium text-text-dark lg:text-xl"
        v-text="props.body"
      />
    </div>
  </div>
</template>
