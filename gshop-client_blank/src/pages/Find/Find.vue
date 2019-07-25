<!-- 识物 -->
<template>
  <div id="thingsWrap">
    <Header>
      <div slot="title" class="slot">
        <span class="active" @click="$router.push('/find/thing')">发现</span>
        <span @click="$router.push('/find/zhenxuanjia')" >甄选家</span>
      </div>
    </Header>
    <router-view/>
  </div>
</template>
<script>
import Header from '../../components/Header/Header'
export default {
  components:{
    Header
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #thingsWrap
    .slot
      flex 2
      justify-content center
      display flex
      span
        display block
        align-items center
        height 65px
        font-size 28px
        margin-right 36px
      .active
        color #b4282d
        font-weight bold
        font-size 35px
  </style>
