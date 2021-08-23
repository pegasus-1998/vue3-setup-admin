 <template>
  <div class="container">
    <editor :init='obj.init'></editor>
  </div>
</template>

<script lang='ts' setup>
import Editor from '@tinymce/tinymce-vue'
import { reactive } from 'vue'
 
let obj = reactive({
  init: {
    language:'zh_CN',
    height: 500,
    auto_focus: true,
  }
})
 
</script>

<style lang='scss' scoped>
  .container {
    height: 100%;
  }
</style>