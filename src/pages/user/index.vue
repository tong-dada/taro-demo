<template>
  <view class="index">
    <view class="index">
      <view class="header at-row  at-row__align--center">
        <view class="header-avatar at-col at-col-1 at-col--auto">
          <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
        </view>
        <view class="header-userInfo at-col at-row at-row--wrap">
            <text class="at-article__h2 at-col at-col-12">登录/注册</text>
            <text class="at-article__h3 at-col at-col-12">欢迎来到德邦国际</text>
        </view>
      </view>
      <view class="panel-body">
        <AtList>
          <AtListItem title='预约寄件' arrow='right'/>
          <AtListItem title='订单管理' arrow='right' />
          <AtListItem title='关于德邦' extraText='详细信息' arrow='right'/>
          <AtListItem title='禁用状态' disabled extraText='详细信息'/>
        </AtList>
      </view>
    </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积  AtButton, AtToast, AtNoticebar,
import { AtAvatar,AtListItem,AtList } from 'taro-ui-vue'
// import "taro-ui-vue/dist/style/components/button.scss"
// import "taro-ui-vue/dist/style/components/toast.scss"
// import "taro-ui-vue/dist/style/components/noticebar.scss"
import "taro-ui-vue/dist/style/components/avatar.scss"
import "taro-ui-vue/dist/style/components/flex.scss"
import "taro-ui-vue/dist/style/components/list.scss"
import './index.scss' 
export default {
    components: {
      // AtButton,
      // AtToast,
      // AtNoticebar,
      AtAvatar,
      AtList,
      AtListItem
    },
    data () {
      return {
        msg: 'Hello world!',
        show: false,
      }
    },
    methods: {
      handleClick () {
        this.show = true
      },
      handleClose () {
        this.show = false
      },
      handleClickTab(value) {
        this.current1 = value
      }
    },
  }
</script>
