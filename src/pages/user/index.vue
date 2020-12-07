<!--
 * @Author: your name
 * @Date: 2020-12-04 09:57:33
 * @LastEditTime: 2020-12-07 10:10:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /deppon/taro-demo/src/pages/user/index.vue
-->
<template>
  <view class="index">
    <view class="index">
      <view class="header at-row  at-row__align--center" @tap='toLogin'>
        <view class="header-avatar at-col at-col-1 at-col--auto">
          <AtAvatar circle image='../../assets/imgs/img01.png'></AtAvatar>
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
import Taro from '@tarojs/taro'
// import headimgurl from '../../assets/imgs/img01.png'

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
        // headimgurl
      }
    },
    methods: {
      handleClick () {
        this.show = true
      },
      handleClose () {
        this.show = false
      },
      toLogin(value) {
        console.log(value)
        Taro.navigateTo({
          url: '../login/index'
        })
        // wx.redirectTo({
        //   url: '../login/index'
        // })
      }
    },
  }
</script>
