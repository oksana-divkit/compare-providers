<script setup lang="ts">
import { reactive } from "vue";
import InputRange from "./components/input-range/InputRange.vue";
import ProvidersChart from "./components/providers-chart/ProvidersChart.vue";

import { customerNeedsData } from "@/data/customer-needs";
import type { CustomerNeeds } from "@/types/customer-needs"

const customerNeeds = reactive<CustomerNeeds>(customerNeedsData);

</script>

<template>
  <div class="customer-needs">
    <div v-for="item in customerNeeds" class="customer-needs__col">
      <div class="usage-range">
        <header class="usage-range__header">
          <h3 class="usage-range__title">{{ item.title }}</h3>
          <div class="usage-range__value">
            <input type="text" v-model.lazy="item.current" @focus="($event.target  as HTMLInputElement).select()" class="usage-range__input" />
             GB
          </div>
        </header>

        <InputRange
          :min="item.range.min"
          :max="item.range.max"
          v-model="item.current"
        />
      </div>
    </div>
    
  </div>

  <ProvidersChart
    :sizeOfVolumeStorage="customerNeeds.storage.current"
    :sizeOfVolumeTransfer="customerNeeds.transfer.current"
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
    margin: 0 0 10px;
  }

  &__title {
    max-width: 50%;
    margin: 0 10px 0 0;
  }
  
  &__value {
    min-width: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 0 0 5px;
  }
  
  &__input {
    width: 100px;
    max-width: 90%;
    min-width: 0;
    flex: 1;
    min-width: 0;
    margin: 0 4px 0 0;
    padding: 4px 8px;
    text-align: right;
    font-family: inherit;
    font-size: 16px;
    font-weight: bold;
    color: var(--clr-base);
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: all .2s;
    
    &:hover {
      border-color: #777;
    }
    
    &:focus,
    &:active {
      box-shadow: 0 0 0 1px var(--clr-base);
      border-color: var(--clr-base);
      outline: none;
    }
  }
}
</style>
