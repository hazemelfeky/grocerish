<script setup>
const isMenuVisable = ref(false);
const handleClickOut = () => {
  isMenuVisable = false;
};
</script>
<template>
  <div class="app-menu">
    <button class="activator" @click="isMenuVisable = !isMenuVisable">
      <slot name="activator" />
    </button>
    <div v-if="isMenuVisable" class="menu-list">
      <slot name="menu-list" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-menu {
  position: relative;

  .activator {
    border: none;
    background: none;
    cursor: pointer;
  }

  .menu-list {
    position: absolute;
    top: 100%;
    width: 100%;
    padding: 0.25rem;
    background: #eee;
    border: 1px solid #ddd;
    border-radius: 0.25rem;

    ::v-deep .menu-item {
      padding: 0.5rem;
      border: none;
      border-radius: 0.25rem;
      width: 100%;
      text-align: start;
      cursor: pointer;

      &:hover {
        background-color: #cccccc67;
      }
    }
  }
}
</style>
