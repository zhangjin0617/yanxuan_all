<template>
<section class="register-container">
    <!-- <Header/> -->
    <div class="regis-title">
      <span></span>
    </div>
    <div class="phone-regis">
      <div class="phone">
        <input type="text" placeholder="请输入手机号" >
      </div>
      <div class="code">
        <input class="msg-code" type="text" placeholder="请输入短信验证码" >
        <button class="get-code">获取验证码</button>
      </div>
      <div class="pwd">
        <input type="password" placeholder="请输入密码" >
      </div>
      <div class="confirm-pwd">
        <input type="password" placeholder="请确认密码" >
      </div>
      <div class="error-message">
        <span></span>
      </div>
      <button class="register" >注册</button>
    </div>
    <div class="email-regis" >
      <div class="email">
        <input type="text" placeholder="邮箱账号" >
      </div>
      <div class="pwd">
        <input type="password" placeholder="请输入密码" >
      </div>
      <div class="confirm-pwd">
        <input type="password" placeholder="请确认密码" >
      </div>
      <div class="error-message">
        <span></span>
      </div>
      <button class="register" >注册</button>
    </div>
    <div class="toash-info">
      <span class="select" >
        <input type="checkbox">
      </span>
      <div class="text">
        <span>我同意</span>
        <a href="iavascript:void(0);">《网易服务条款》</a>
        <span>和</span>
        <a href="iavascript:void(0);">《网易隐私政策》</a>
      </div>
    </div>
    <div class="email-register">
      <span>邮箱账号注册</span>
      <i class="iconfont icon-52"></i>
    </div>
  </section>
</template>
<script>
// import Header from '../../../components/Header/Header'
export default {
  components:{
    // Header
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl";
  .register-container
    height 100%
    background-color #fff
    padding 0 40px
    .regis-title
      margin-top 28px
      display flex
      justify-content center
      span
        font-size 36px
        color #333
    .phone-regis, .email-regis
      padding-top 120px
      .error-message
        font-size 24px
        color $red
        margin 10px 0
      .phone, .code, .pwd, .email, .confirm-pwd
        width 670px
        height 90px
        border-bottom 1px solid #ddd
        margin-top 20px
        clearFix()
        input
          float left
          margin 28px 0
          font-size 28px
          color #666
          border 1px solid rgba(0,0,0,0)
          outline none
        button
          float right
          width 168px
          height 58px
          font-size 28px
          color #333
          outline none
          margin 15px 10px 0 0
          background-color #fff
          border-radius 10px
          border 1px solid #333
      .register
        width 670px
        height 100px
        font-size 28px
        color #fff
        outline none
        background-color $red
        border 1px solid $red
    .toash-info
      height 40px
      display flex
      align-items center
      margin-top 30px
      .select
        width 28px
        height 28px
        margin-right 10px
        border 1px solid #7f7f7f
        &.selected
          background-image url("https://urswebzj.nosdn.127.net/webzj_cdn101/sprite_61fbe151ab715649c6b7c4ec39156201.png")
          background-repeat no-repeat
          background-position -323px -86px
      input
        width 40px
        height 40px
        outline none
        visibility hidden
      .text
        a
          color #007AFF
    .email-register
      display flex
      justify-content center
      align-items baseline
      margin-top 30px
      font-size 28px
      i
        font-size 28px
</style>

