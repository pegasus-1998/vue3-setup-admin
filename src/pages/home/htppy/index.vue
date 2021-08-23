<template>
  <div class="container">
    <el-scrollbar height='80vh'>
      <div>
        <ul class="list">
          <li v-for="item in xhArr.message" :key="item.id">{{ item.con }}</li>
        </ul>
      </div>
    </el-scrollbar>
    <my-loading v-show="!(xhArr.message.length > 0)" />
  </div>
</template>

<script lang="ts"  setup>
import { reactive, nextTick, onMounted } from 'vue'
import { xhApi } from '@/apis/mock'
import myLoading from '@/components/myLoading.vue'

let xhArr: any = reactive({
  message: []
})
 
async function getMessage() {
  xhArr.message = await xhApi()
}
getMessage()
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  .el-scrollbar {
    padding: 25px;
    .list {
      li {
        text-indent: 2em;
        line-height: 25px;
        margin-bottom: 25px;
        background: rgb(192, 217, 226);
        padding: 5px;
        border-radius: 5px;
      }
    }
  }
}
</style>
 