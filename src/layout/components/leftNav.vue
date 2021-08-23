<template>
  <el-scrollbar>
    <el-menu
      router
      :collapse="props.collapse"
      unique-opened
      :default-active="route.path"
      class="el-menu-vertical-demo"
      text-color="#fff"
      background-color="#304156"
    >
      <el-submenu v-for="item in pathArr.navPath" :key="item.id" :index='item.path'>
        <template #title>
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="sonItem  in item.sonArr" :key="sonItem.id" :index="sonItem.path">{{sonItem.title}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/about">
        <i class="el-icon-cpu"></i>
        <template #title>ABOUT</template>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script lang='ts' setup>
import { inject, computed, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import navPath from '@/utils/navPath'

// let collapse = inject('collapse')
const route = useRoute()
const props = defineProps({
  collapse: Boolean
})
const pathArr = reactive({
  navPath
})
</script>
<style lang='scss' scoped>
.el-scrollbar {
  color: #bfcbd9;
  height: 100vh;
  overflow: hidden;
  background-color: #304156;
  &:deep(.el-menu) {
    border-right: none;
    i {
      color: skyblue;
    }
    .el-menu-item-group__title {
      padding: 0;
    }
    .el-submenu .el-menu-item {
      text-indent: 2em;
    }
  }
  .el-menu::after,
  .el-menu::before {
    width: 200px !important;
  }
}
</style>