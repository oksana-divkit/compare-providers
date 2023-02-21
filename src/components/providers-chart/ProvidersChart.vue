<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import type { Ref } from "vue";
import ProviderChartItem from "./ProviderChartItem.vue";
import { providers } from "./data/providers";
import type { Provider, ProvidersTotal } from "./types";

const props = defineProps<{
  currentStorage: number;
  currentTransfer: number;
}>();

let providersTotal: ProvidersTotal = {};

providers.forEach((p: Provider) => {
  providersTotal[p.id] = {
    currentOption: ref(p.options?.at(0).key),
    total: ref(0),
  };
});

onMounted(() => {
  providersTotal["0"].total = 50;
});

let ff = computed(() => props.currentStorage * 1000);

function render(): void {
  providersTotal.forEach((p: Provider) => {
    // p.total =
  });
}
</script>

<template>
  <div class="providers-chart">
    <ProviderChartItem
      v-for="provider in providers"
      :provider="provider"
      :total="providersTotal[provider.id].total"
      @change="
        (e) => {
          providersTotal[provider.id].currentOption.value = e;
          render();
        }
      "
    />
  </div>

  {{ providersTotal["2"]?.currentOption.value }} 55

  {{ currentStorage }}
  {{ ff }}
</template>

<style lang="scss"></style>
