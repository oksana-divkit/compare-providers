<script setup lang="ts">
type InputRangeProps = {
  min: number;
  max: number;
  modelValue: number;
};

defineProps<InputRangeProps>();

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();
</script>

<template>
  <div class="input-range">
    <input
      type="range"
      class="input-range__input"
      :value="modelValue"
      :min="min"
      :max="max"
      @input="
        emit('update:modelValue', +($event.target as HTMLInputElement).value)
      "
    />

    <div class="input-range__values">
      <div>{{ min }}</div>
      <div>{{ max }}</div>
    </div>
  </div>
</template>

<style lang="scss">
.input-range {
  &__input {
    width: 100%;
  }

  &__values {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #999;
  }
}
</style>
