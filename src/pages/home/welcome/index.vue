<template>
  <div class="container">
    <div class="monster ani1" v-for="item in 6" :key="item" :class="[`ani${item}`]" >
      <div class="eye">
        <div class="eyeBall"></div>
      </div>
      <div class="mouth"></div>
    </div>
    <span class="sp">欢迎啊......亲！</span>
  </div>
</template>
 
<style lang="scss" scoped>
@import "./index.scss";
.sp {
  position: absolute;
  @include center();
  z-index: 9999;
  color: #000;
  font-size: 23px;
  font-weight: 700;
  letter-spacing: 5px;
}
</style>

 