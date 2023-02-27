<script setup lang="ts">
import { computed, ref } from "vue";
import type { Provider, Price, PriceOptions } from "./types";

type ProvidersChartItemProps = {
  provider: Provider;
  sizeOfVolumeStorage: number;
  sizeOfVolumeTransfer: number;
  minTotal: number;
  maxTotal: number;
};

const props = defineProps<ProvidersChartItemProps>();

const emit = defineEmits<{
  (e: "change", value: number): void;
}>();

let currentOption = ref<string>(props.provider.options?.at(0)?.key || '');

const sizeOfBar = computed(() => {  
  console.log(total);
  return total.value / props.maxTotal * 100;
});

const totalOfStorage = computed(() => {
  return getTotalFor(props.sizeOfVolumeStorage, props.provider.priceOfStorageGb);
});

const totalOfTransfer = computed(() => {  
  return getTotalFor(props.sizeOfVolumeTransfer, props.provider.priceOfTransferGb);
});

const total = computed(() => {
  const { minPaymentAmount, maxPaymentAmount } = props.provider;
  let total =  totalOfStorage.value + totalOfTransfer.value;
  
  if (minPaymentAmount && total < minPaymentAmount) {
    total = minPaymentAmount;
  } 
  
  if (maxPaymentAmount && total > maxPaymentAmount) {
    total = maxPaymentAmount;
  }
  
  emit('change', total);
  
  return total;
});

const totalFormatted = computed(() => {  
  return currencyFormatter.format(total.value);
});

function getTotalFor(amountOfGb: number, priceOfGb: Price | PriceOptions): number {
  let currentPrice: Price, totalOfTransfer: number;
  
  currentPrice = isPrice(priceOfGb) ? priceOfGb : priceOfGb[currentOption.value];
  
  if (currentPrice.freeUp && amountOfGb < currentPrice.freeUp) {
    totalOfTransfer = 0;
  } else {
    totalOfTransfer = amountOfGb * currentPrice.priceValue;
  }  
  
  return totalOfTransfer;
}

function isPrice(price: Price | PriceOptions): price is Price {
  return 'priceValue' in price;
}

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
</script>

<template>
  <div class="provider-chart-item" :class="{ '--best': minTotal === total }">
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

    <div class="provider-chart-item__chart">
      <div class="provider-chart-item__bar" :style="`--bar-size: ${sizeOfBar}%`">
        <div class="provider-chart-item__total">{{ totalFormatted }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.provider-chart-item {
  display: flex;
  align-items: center;
  --clr-bg: var(--clr-base);
  
  &.--best {
    --clr-bg: var(--clr-accent);
  }

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
    font-weight: bold;
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

  &__chart {
    flex: 1;
  }

  &__bar {
    position: relative;
    width: var(--bar-size);
    height: 30px;
    background: var(--clr-bg);
  }

  &__total {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 0 30px 0 10px;
    font-size: 13px;
    font-weight: 600;
    line-height: 30px;
    color: #fff;
    background: linear-gradient(to left, transparent 5%, rgba(0, 0, 0, .6));
  }
}
</style>
