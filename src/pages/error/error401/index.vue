<template>
  <div class='error401'>
    <div class="con">
        <el-button type="primary" @click="$router.replace('/')"> &lt 首页</el-button>
        <h3>Oops!</h3>
        <span>您没有权限去该页面</span>
        <p>是否去获取权限？</p>
        <el-button @click="$router.replace('/user/common')">获取权限</el-button>
    </div>
    <img src="@/images/401.gif" alt="">
  </div>
</template>

<style lang="scss" scoped>
    .error401 {
        display: flex;
        justify-content: space-evenly;
        height: 100%;
        padding: 35px;
        background: #fff;
        img {
            height: 400px;
        }
        .con {
            .el-button {
                color: #fff;
                background: #008489;
            }
            h3 {
                margin: 25px 0;
                font-size: 45px;
            }
            span {
                font-size: 25px;
                color: rgba(0, 0, 0, 0.904);
                font-weight: 700;
            }
            p {
                margin: 25px 0;
            }
        }
    }
</style>

 