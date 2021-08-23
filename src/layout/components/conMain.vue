<template>
  <div class="con-main">
    <main-header></main-header>
    <path-tar></path-tar>
    <router-view v-slot="{Component}">
    </router-view>
  </div>
</template>

<script lang='ts' setup>
import mainHeader from './mainHeader.vue'
import pathTar from './pathTar.vue'
</script>
<style lang='scss' scoped>
.con-main {
  flex: 1;
  padding: 15px;
  background-image: linear-gradient(
    to left,
    rgb(217, 232, 238),
    rgb(239, 239, 243)
  );
 
}
</style>