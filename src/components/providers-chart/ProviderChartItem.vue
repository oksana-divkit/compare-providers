<script setup lang="ts">
import { defineEmits } from "vue";
import type { Provider } from "./types";

defineProps<{ provider: Provider; total: number }>();

const emit = defineEmits<{
  (e: "change", value: string): void;
}>();
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
              :name="`${provider.name}-option`"
              value="option.title"
              :checked="idx === 0"
              @change="emit('change', option.key)"
            />
            {{ option.title }}
          </label>
        </div>
      </div>

      <div class="provider-chart-item__icon"></div>
    </div>

    <div class="provider-chart-item__bar" style="--bar-size: 40%">
      <div class="provider-chart-item__total">{{ total }}$</div>
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
