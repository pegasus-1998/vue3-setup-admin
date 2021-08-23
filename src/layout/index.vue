 <template>
  <div class="layout">
    <left-nav :collapse="collapse" />
    <con-main @listenEvent='listenEvent' />
  </div>
</template>

<script lang='ts' setup>
import leftNav from './components/leftNav.vue'
import conMain from "./components/conMain.vue"
import { ref, Ref, provide } from "vue";
 
let collapse = ref<boolean>(false)    //控制导航菜单是否收缩
provide('collapse', collapse.value)
provide('listenEvent', listenEvent)
function listenEvent(flag: boolean) {
   collapse.value =  flag
}
</script>

<style lang='scss' scoped>
.layout {
  display: flex;
  justify-items: flex-start;
}
</style>