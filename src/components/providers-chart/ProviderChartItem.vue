<script setup lang="ts">
import { defineEmits, computed, ref } from "vue";
import type { Provider, Price } from "./types";

type ProvidersChartItemProps = {
  provider: Provider;
  sizeOfVolumeStorage: number;
  sizeOfVolumeTransfer: number;
};

const props = defineProps<ProvidersChartItemProps>();

const hasOptions = !!props.provider.options && props.provider.options.length;

let currentOption = ref<string>(hasOptions ? props.provider.options[0].key : '');

const totalOfStorage = computed(() => {
  const { priceOfStorageGb } = props.provider;
  let currentPrice: Price, totalOfStorage: number;
  
  currentPrice = priceOfStorageGb[currentOption.value] || priceOfStorageGb;
  
  if (currentPrice.freeUp && props.sizeOfVolumeTransfer < currentPrice.freeUp) {
    totalOfStorage = 0;
  } else {
    totalOfStorage = props.sizeOfVolumeStorage * currentPrice.price;
  }  
  
  return totalOfStorage;
});

const totalOfTransfer = computed(() => {
  const { priceOfTransferGb } = props.provider;
  let currentPrice: Price, totalOfTransfer: number;
  
  currentPrice = priceOfTransferGb[currentOption.value] || priceOfTransferGb;
  
  if (currentPrice.freeUp && props.sizeOfVolumeTransfer < currentPrice.freeUp) {
    totalOfTransfer = 0;
  } else {
    totalOfTransfer = props.sizeOfVolumeTransfer * currentPrice.price;
  }  
  
  return totalOfTransfer;
});

const total = computed(() => {  
  let total =  totalOfStorage.value + totalOfTransfer.value;
  
  if (total < props.provider.minPaymentAmount) {
    total = props.provider.minPaymentAmount;
  } 
  
  if (total > props.provider.maxPaymentAmount) {
    total = props.provider.maxPaymentAmount;
  }
  
  return total;
});

const totalFormatted = computed(() => {  
  return currencyFormatter.format(total.value);
});

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

// const emit = defineEmits<{
//   (e: "change", value: string): void;
// }>();
</script>

<template>
  <div class="provider-chart-item">
    <div class="provider-chart-item__info">
      <div class="provider-chart-item__title">
        <p class="provider-chart-item__name">{{ provider.name }}</p>

        <div class="provider-chart-item__options">
          <label v-for="(option, idx) in provider.options" class="">
            <input
              type="radio"
              v-model="currentOption"
              :value="option.key"
              :name="`${provider.name}-option`"
            />
            {{ option.title }}
              <!-- @change="emit('change', option.key)" -->
          </label>
        </div>
      </div>

      <div class="provider-chart-item__icon"></div>
    </div>

    <div class="provider-chart-item__bar" style="--bar-size: 40%">
      <div class="provider-chart-item__total">{{ totalFormatted }}</div>
    </div>
  </div>
</template>

<style lang="scss">
.provider-chart-item {
  display: flex;
  align-items: center;

  &__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0 0 35%;
    min-width: 0;
    min-height: 70px;
    padding: 5px 20px 5px 0;
    border-right: 4px solid #555;
  }

  &__title {
    min-width: 0;
  }

  &__name {
    margin: 0;
  }

  &__icon {
    flex: 0 0 auto;
    width: 30px;
    height: 30px;
    margin: 0 0 0 10px;
    border-radius: 50%;
    border: 1px solid #555;
    background: #ccc;
  }

  &__bar {
    position: relative;
    width: var(--bar-size);
    height: 20px;
    background: cadetblue;
  }

  &__total {
    position: absolute;
    top: 0;
    left: 100%;
    margin: 0 0 0 5px;
  }
}
</style>
