<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import type { Ref } from "vue";
import ProviderChartItem from "./ProvidersChartItem.vue";

import { providers } from "@/data/providers";
import type { Provider } from "./types";

type ProvidersChartProps = {
  sizeOfVolumeStorage: number;
  sizeOfVolumeTransfer: number;
};

const props = defineProps<ProvidersChartProps>();

onMounted(() => {
});
</script>

<template>
  <div class="providers-chart">
    <ProviderChartItem
      v-for="provider in providers"
      :provider="provider"
      :sizeOfVolumeStorage="sizeOfVolumeStorage"
      :sizeOfVolumeTransfer="sizeOfVolumeTransfer"
    />
  </div>
  
  
      <!-- @change="
        (e) => {
          providersTotal[provider.id].currentOption.value = e;
          render();
        }
      " -->
</template>

<style lang="scss"></style>
