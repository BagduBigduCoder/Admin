<template>
  <div class="p-4">
    <a
      class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ cardData.name }}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400 mb-2">
        {{ cardData.review }}
      </p>
      <div><Btn v-model="cardData.show" @changed="emitChanged" /></div>
    </a>
  </div>
</template>

<script>
import Btn from "./ToggleBtn.vue";
export default {
  components: {
    Btn,
  },
  props: {
    cardData: {
      type: Object,
    },
  },
  emits: ["changed"],
  methods: {
    emitChanged(event) {
      this.$emit("changed", event);
    },
  },
};
</script>
