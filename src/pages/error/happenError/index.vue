 <template>
  <div class="error">
    <img src="@/images/error.png" alt="">
    <span>程序发生了错误，请联系客服...</span>
    <el-button type="primary" @click="$router.replace('/')">首页</el-button>
    <br>
    <i class="el-icon-circle-close"></i>
  </div>
</template>

<style lang="scss" scoped>
  .error {
     padding: 50px;
     img {
       width: 120px;
     }
     span {
       font-size: 25px;
       font-weight: 700;
       color: rgb(202, 43, 43);
       letter-spacing: 5px;
       margin: 0 25px;
     }
     .el-icon-circle-close {
       display: flex;
       justify-content: center;
       margin-top: 25px;
       font-size: 180px;
       color: rgb(202, 43, 43);
     }
  }
</style>

 
 
 