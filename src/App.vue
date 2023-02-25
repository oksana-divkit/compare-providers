<script setup lang="ts">
import Range from "./components/Range.vue";
import ProvidersChart from "./components/providers-chart/ProvidersChart.vue";

import { ref } from "vue";

let currentStorage = ref<number>(100);
let currentTransfer = ref<number>(400);

interface RangeItem {
  min: number;
  max: number;
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

  <ProvidersChart
    :sizeOfVolumeStorage="currentStorage"
    :sizeOfVolumeTransfer="currentTransfer"
  />
</template>

<style lang="scss">
.customer-needs {
  display: flex;
  margin: 0 -20px 40px;

  &__col {
    max-width: 50%;
    flex: 0 0 50%;
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
