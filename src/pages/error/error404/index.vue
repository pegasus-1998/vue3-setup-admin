<template>
  <div class="error404">
    <img src="@/images/404.png" class='left' />
    <div class="con">
      <h3>OOPS!</h3>
      <p>The path you entered does not conform to the specification, so page not found,Skip to welcome page?</p>
      <el-button type="primary" @click="$router.replace('/')">back to welcome</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .error404 {
    display: flex;
    padding: 50px;
    align-items: center;
    .left {
      width: 650px;
    }
    .con {
      width: 350px;
      h3 {
        color: #1482f0;
        font-size: 35px;
      }
      p {
        margin: 25px 0;
        line-height: 28px;
        font-size: 18px;
      }
    }
  }
</style>
 