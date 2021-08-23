 <template>
    <ul class='lists'>
      <li v-for="item in 6" :key="item">
        <el-image 
        :src="require(`@/images/vipImgs/img0${item}.jpg`)" 
        :preview-src-list="srcList.message"
        @click="showImg(item)">
        </el-image>
      </li>
    </ul>
</template>

<script lang='ts' setup>
  import { reactive } from 'vue'

  const srcList = reactive({
    message: [require('@/images/vipImgs/img01.jpg')]
  })

  function showImg(num: number) {
     srcList.message[0] = require(`@/images/vipImgs/img0${num}.jpg`)
  }
</script>
<style lang="scss" scoped>
  .lists {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 25px;
    li {
      width: 32%;
      .el-image {
        display: block;
        cursor: pointer;
        width: 100%;
        margin-bottom: 25px;
      }
    }
  }
</style>

 