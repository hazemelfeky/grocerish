<template>
  <div class="banners wrapper">
    <div class="banners__delivery">
      <span class="banners__delivery__label label">Free Delivery</span>
      <h4 class="banners__delivery__offer">Free delivery over 350 EGP</h4>
      <p class="banners__delivery__comment comment">
        Don’t mess a need. Free delivery!
      </p>
      <router-link class="banners__delivery__shopnow shopnow" to="/products">Shop Here</router-link>
      <img class="banners__delivery__image" alt="delivery" src="/src/assets/Offer1.png" />
    </div>
    <div class="banners__deals">
      <span class="banners__deals__label label">Best Deals</span>
      <h4 class="banners__deals__offer">Organic Vegetables</h4>
      <p class="banners__deals__comment comment">
        Save up to 60% off on your first order.
      </p>
      <router-link class="banners__deals__shopnow shopnow" to="/products">Shop Here</router-link>
      <img class="banners__deals__image" alt="deals" src="/src/assets/Offer2.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
