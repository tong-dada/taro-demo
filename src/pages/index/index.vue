<!--
 * @Author: your name
 * @Date: 2020-12-04 09:57:33
 * @LastEditTime: 2020-12-08 08:06:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /deppon/taro-demo/src/pages/index/index.vue
-->
<template>
  <view class="index">
    <view class="index">
      
      <AtButton>寄件</AtButton>
    </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import { AtButton, AtToast, AtNoticebar } from 'taro-ui-vue'
// tabBar 组件
import { AtTabBar } from 'taro-ui-vue'
import "taro-ui-vue/dist/style/components/tab-bar.scss";
import "taro-ui-vue/dist/style/components/badge.scss";
import "taro-ui-vue/dist/style/components/icon.scss";

import "taro-ui-vue/dist/style/components/button.scss"
import "taro-ui-vue/dist/style/components/toast.scss"
import "taro-ui-vue/dist/style/components/noticebar.scss"
import './index.scss' 

import Taro from '@tarojs/taro';
export default {
    components: {
    AtButton,
    AtToast,
    AtNoticebar,
    AtTabBar
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
