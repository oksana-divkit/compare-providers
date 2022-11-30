<script setup lang="ts">
import Range from "./components/Range.vue";

import { ref } from "vue";

let currentStorage = ref<number>(100);
let currentTransfer = ref<number>(400);

interface RangeItem {
  min: number;
  max: number;
}

interface ProviderInfo {
  minPaymentAmount: number;
  priceOfStorageGb: number;
  priceOfTransferGb: number;
}

let storageRange: RangeItem = {
  min: 0,
  max: 1000,
};

let transferRange: RangeItem = {
  min: 0,
  max: 1000,
};
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->

  <div class="customer-needs">
    <div class="customer-needs__col">
      <div class="usage-range">
        <header class="usage-range__header">
          <h3 class="usage-range__title">Storage:</h3>
          <div>{{ currentStorage }} GB</div>
        </header>

        <Range
          :min="storageRange.min"
          :max="storageRange.max"
          v-model="currentStorage"
        />
      </div>
    </div>

    <div class="customer-needs__col">
      <div class="usage-range">
        <header class="usage-range__header">
          <h3 class="usage-range__title">Transfer:</h3>
          <div>{{ currentTransfer }} GB</div>
        </header>

        <Range
          :min="transferRange.min"
          :max="transferRange.max"
          v-model="currentTransfer"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.customer-needs {
  display: flex;
  margin: 0 - 20px;

  &__col {
    // width: 50%;
    padding: 0 20px;
  }
}

.usage-range {
  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    margin: 0 10px 0 0;
  }
}
</style>
