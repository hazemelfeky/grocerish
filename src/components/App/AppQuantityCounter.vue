<template>
  <div class="quantity-toggle">
    <button @click="decrement()">&mdash;</button>
    <input type="text" :value="modelValue" readonly />
    <button class="increase" @click="increment()">&#xff0b;</button>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: { type: Number, required: true },
});

const emit = defineEmits();
function increment() {
  emit(`update:modelValue`, props.modelValue + 1);
}
function decrement() {
  if (props.modelValue !== 1) {
    emit(`update:modelValue`, props.modelValue - 1);
  } 
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

pre {
  background: #eee;
  padding: 1rem;
  border-radius: 5px;
}

$border: 2px solid #ddd;

.quantity-toggle {
  display: flex;

  input {
    border: 0;
    border-top: $border;
    border-bottom: $border;
    width: 2.5rem;
    text-align: center;
    padding: 0 0.5rem;
  }

  button {
    border: $border;
    padding: 0 0.25rem;
    background: #f5f5f5;
    color: #888;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    border-radius: 0.25rem 0 0 0.25rem;
    &.increase {
      border-radius: 0 0.25rem 0.25rem 0;
    }
  }
}
</style>
