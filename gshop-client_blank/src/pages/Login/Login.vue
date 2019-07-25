
<!-- 个人 -->
<template>
<div id="login">
  <Header>
    <div slot="title" class="slot">
      <span>网易严选</span>
    </div>
  </Header>
  <LoginHome v-show="!isLoginPhone && !isLoginMail"
    :changeIsLoginPhone="changeIsLoginPhone"
               :changeIsLoginMail="changeIsLoginMail"/>
  <LoginPhone v-show="isLoginPhone" :changeIsLoginPhone="changeIsLoginPhone"/>
  <LoginEmail v-show="isLoginMail" :changeIsLoginMail="changeIsLoginMail"/>
  <!-- <Register/> -->
</div>

</template>
<script>
import Header from '../../components/Header/Header'
import LoginEmail from '../../components/LoginEmail/LoginEmail'
import LoginPhone from '../../components/LoginPhone/LoginPhone'
import LoginHome from '../../components/LoginHome/LoginHome'
// import Register from '../../components/Register/Register'
export default {
  data() {
    return {
      isLoginMail:false,
      isLoginPhone:false
    }
  },
  methods: {
changeIsLoginPhone(){
  this.isLoginPhone=! this.isLoginPhone
},
changeIsLoginMail(){
this.isLoginMail=! this.isLoginMail
}
  },
  components:{
    Header,
    LoginHome,
    LoginPhone,
    LoginEmail,
    // Register
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
 #login
    background-color #f2f5f4
    height 100%
  </style>
