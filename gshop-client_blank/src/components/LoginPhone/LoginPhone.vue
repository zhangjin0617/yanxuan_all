<template>
<div id="loginPhoneWrap">
    <!-- <Header/> -->
    <div class="top_login">
      <div class="top_img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <label class="input_phone">
        <input type="text" placeholder="请输入手机号" v-model="phone"/>
        <div class="clear" @click="clearPhone">x</div>
      </label>
      <label class="input_code">
        <input type="text" placeholder="请输入手机验证码" v-model="code" />
        <button :disabled="!isRightPhone||computeTime>0" class="get_phone_code"
        :class="{right_phone_number:isRightPhone}" @click.prevent="sendCode">{{computeTime>0?`(${computeTime}s)秒后重发`:'获取验证码'}}</button>
      </label>
      <div class="login_help">
        <span class="err">{{errorMsg}}</span>
        <span class="left">遇到问题? </span>
        <span class="right" >使用密码验证登录</span>
      </div>
      <div class="phone_login active">
        <span @click="login">登录</span>
      </div>
      <div class="email_login" @click="changeIsLoginPhone">
        <span>其他登录方式</span>
      </div>
      <div class="email_register">快速注册&nbsp;&gt;</div>
    </div>
  </div>
</template>
<script>
// import Header from '../Header/Header'
import {reqCode} from '../../api'
export default {
  data() {
    return {
      phone:'',
      computeTime: 0,
      errorMsg:'',
      code:''
    }
  },
    components:{
    // Header
  },
  computed:{
    //手机号码验证
    isRightPhone(){
      return /^1[3456789]\d{9}$/.test(this.phone.trim())
    }
  },
  methods:{
    clearPhone(){
    this.phone=''
  },
 async login(){
    const {phone,code} = this
      if (phone.trim()===''&&code.trim()==='') {
        this.errorMsg='请输入手机号'
      }else if (phone.trim()==='') {
        this.errorMsg='手机号码不能为空'
      }else if (!/^1[3456789]\d{9}$/.test(this.phone.trim())) {
        this.errorMsg='手机号码格式不正确'
      }else if (code.trim()==='') {
        this.errorMsg='手机验证码不能为空'
      }else if (!(/^\d{6}$/.test(code))) {
        this.errorMsg = '请输入正确的6位数字验证码';
      } else {
        this.errorMsg = '';
        const result = await reqCode(this.phone)
        if(result.code===0){
          this.$router.replace('/profile')
        }
      }
  },
    //验证码
    sendCode(){
      this.computeTime = 30
     const intervalId = setInterval(()=>{
         this.computeTime--
         if(this.computeTime===0){
           clearInterval(intervalId)
         }
      },1000)


      // console.log(result)
      // if (result.code===0) {
      //   alert('已发送')
      // }else{
      //   alert(result.msg)
      // }
    }
  },
  props: {
      changeIsLoginPhone: Function
    }

}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #loginPhoneWrap
    width 100%
    height 100%
    padding 110px 0 0
    background-color white
    box-sizing border-box
    position relative
    box-sizing border-box
    &.is_personal
      background-color #f2f5f4
    .top_login
      width 679px
      height 752px
      color #000000
      margin 0 auto
      .top_img
        width 100%
        height 133px
        display flex
        justify-content center
        align-items center
        margin-bottom 130px
        img
          width 192px
          height 64px
      .input_phone
        position relative
        margin-top 30px
        input
          font-size 27px
        .clear
          width 30px
          height 30px
          line-height 30px
          background-color #ccc
          position absolute
          right 10px
          top 30px
          border-radius 50%
          text-align center
          color #fff
    .input_phone,
    .input_code
      display block
      width 675px
      height 90px
      margin 30px auto
      input
        display block
        width 100%
        height 100%
        outline none
        border 0 none
        border-bottom 1px solid #bdbdbd
        font-size 27px
        line-height 45px
    .input_code
      position relative
      .get_phone_code
        position absolute
        right 0
        bottom 15px
        // width 173px
        height 56px
        line-height 56px
        text-align center
        font-size 28px
        border 1px solid #333
        border-radius  10px
        &.right_phone_number
          color #000
    .login_help
      span
        color #bdbdbd
        font-size 27px
      .right
        float right
      .err
        color #b4282d
        display block
        margin-bottom 30px
    .phone_login,.email_login
      width 679px
      height 98px
      color #b4282d
      margin 32px 0 0
      text-align center
      line-height 98px
      font-size 28px
      border 1px solid #b4282d
      &.active
        background-color #b4282d
        color white
    .email_register
      text-align center
      font-size 28px
      color #000000
      margin-top 20px

</style>
