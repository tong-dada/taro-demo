<!--
 * @Author: your name
 * @Date: 2020-12-04 09:57:33
 * @LastEditTime: 2020-12-07 11:29:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /deppon/taro-demo/src/pages/login/index.vue
-->
<template>
  <!-- login -->
  <view class="index">
    <view class="index">
      <!-- <AtNoticebar marquee>
        欢迎使用德邦快递！
      </AtNoticebar> -->
      
      <view class="login_box">
        <view class="login_head">
          <view class="login_top">
            <!-- :size='large' -->
            <image :image='headimgurl' mode='center'></image>
            <text>德邦快递跨境</text>
          </view>
          <button
            class="login_button"
            open-type="getUserInfo"
            bindgetuserinfo="getUserInfo"
            >微信账号快捷登录
          </button>
        </view>
      </view>
      
    </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import { 
  AtNoticebar,
  AtButton,
  AtToast,
  AtAvatar
} from 'taro-ui-vue'
import Taro from '@tarojs/taro';

import "taro-ui-vue/dist/style/components/button.scss"
import "taro-ui-vue/dist/style/components/toast.scss"
import "taro-ui-vue/dist/style/components/noticebar.scss"
import "taro-ui-vue/dist/style/components/avatar.scss"
import './index.scss' 

export default {
    components: {
    AtButton,
    AtToast,
    AtNoticebar,
    // AtTabBar
    AtAvatar
  },
  data () {
    return {
      msg: 'Hello world!',
      show: false,
      // tabBar and
      current1: 0,
      tabList1: [
        { title: '待办事项', text: 8 },
        { title: '拍照' },
        { title: '通讯录', dot: true }
      ],
      //tabBar end
      headimgurl:'../../assets/imgs/logo.png',
      large:'large'
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
      console.log(value)
      console.log(Taro)
      console.log(this)
      switch (value) {
        case 0:
          Taro.redirectTo({ url: 'pages/index/index' })
          break;
        case 1:
          Taro.redirectTo({ url: 'pages/order/index' })
          break;
        default:
          // Taro.redirectTo({ url: 'pages/user/index' })
          break;
      }
    }
  },
    }
</script>
