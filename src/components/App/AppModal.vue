<template>
  <div v-if="modelValue">
    <div class="modal-mask" @click="closeDialog()">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header"> default header </slot>
        </div>

        <div class="modal-body">
          <slot name="body" />
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <!-- default footer -->
            <button class="modal-default-button" @click="closeDialog()">
              OK
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: Boolean, required: false },
});

const emit = defineEmits();

const closeDialog = () => {
  emit("update:modelValue", false);
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #00000033;
  color: #000;
  display: grid;
  place-items: center;
  z-index: 999;

  .modal-container {
    padding: 1rem;
    background-color: #fff;
    border-radius: 0.5rem;
    max-width: 30rem;

    .modal-header {
      font-size: 1.25rem;
      font-weight: bold;
      color: #237d64;
    }

    .modal-default-button {
      width: -webkit-fill-available;
      margin-top: 0.5rem;
      color: #fff;
      padding: 0.5rem 0;
      border-radius: 0.25rem;
      border: none;
      background-color: #237d64;
    }
  }
}
</style>
