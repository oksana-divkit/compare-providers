<script setup lang="ts">
import { reactive, computed } from "vue";
import ProviderChartItem from "./ProvidersChartItem.vue";

import { providers } from "@/data/providers";
import type { Provider } from "./types";

type ProvidersChartProps = {
  sizeOfVolumeStorage: number;
  sizeOfVolumeTransfer: number;
};

const props = defineProps<ProvidersChartProps>();

const providersTotal = reactive<{
  [index: string]: number
}>({});

const minTotal = computed(() => {
  return Math.min(...Object.values(providersTotal));
});

const maxTotal = computed(() => {
  return Math.max(...Object.values(providersTotal));
});

</script>

<template>
  <div class="providers-chart">
    <ProviderChartItem
      v-for="provider in providers"
      :provider="provider"
      :sizeOfVolumeStorage="sizeOfVolumeStorage"
      :sizeOfVolumeTransfer="sizeOfVolumeTransfer"
      :minTotal="minTotal"
      :maxTotal="maxTotal"
      @change="(e) => {
          providersTotal[provider.id] = e;
      }"
    />
  </div>
  
</template>

<style lang="scss"></style>
