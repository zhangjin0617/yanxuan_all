<template>
<ul id="footerNav">
  <li class="footerItem" @click="goTo('/home')">
    <span class="u-icon" :class="this.$route.path=='/home'?'icon-home-active':'icon-home'" ></span>
    <span :class="this.$route.path=='/home'?'text-active':'text'">首页</span>
  </li>
  <li class="footerItem" @click="goTo('/category')">
    <span class="u-icon" :class="this.$route.path=='/category'?'icon-category-active':'icon-category'"></span>
    <span :class="this.$route.path=='/category'?'text-active':'text'">分类</span>
  </li>
  <li class="footerItem" @click="goTo('/find')">
    <span class="u-icon" :class="this.$route.path=='/search'?'icon-things-active':'icon-things'"></span>
    <span :class="this.$route.path=='/search'?'text-active':'text'">识物</span>
  </li>
  <li class="footerItem" @click="goTo('/cart')">
    <span class="u-icon" :class="this.$route.path=='/cart'?'icon-shopCart-active':'icon-shopCart'"></span>
    <span :class="this.$route.path=='/cart'?'text-active':'text'">购物车</span>
  </li>
  <li class="footerItem" @click="goTo('/login')">
    <span class="u-icon" :class="this.$route.path=='/login'?'icon-profile-active':'icon-profile'"></span>
    <span :class="this.$route.path=='/login'?'text-active':'text'">个人</span>
  </li>
</ul>
</template>
<script>

export default {
  name:"FooterGuide",
  methods: {
    goTo(path){
      this.$router.replace(path)
    }
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  #footerNav
    display flex
    width 100%
    height 98px
    box-sizing border-box
    padding 12px
    background-color #fff
    top-border-1px(#666)
    position fixed
    left 0
    bottom 0
    align-items center
    z-index 1000
    .footerItem
      flex 1
      display flex
      flex-direction column
      align-items center
      width 20%
      .u-icon
        width 100%
        height 40px
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png")
        background-repeat no-repeat
        background-size 40px
      .icon-home
        background-position 54px -248px
      .icon-home-active
        background-position 54px -198px
      .icon-category
        background-position 54px -148px
      .icon-category-active
        background-position 54px -98px
      .icon-things
        background-position 54px -348px
      .icon-things-active
        background-position 54px -300px
      .icon-shopCart
        background-position 54px -48px
      .icon-shopCart-active
        background-position 54px 2px
      .icon-profile
        background-position 54px -448px
      .icon-profile-active
        background-position 54px -398px
      .text
        font-size 24px
        color #666
      .text-active
        color $main

</style>
