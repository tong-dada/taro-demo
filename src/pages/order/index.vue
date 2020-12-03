<template>
  <view class="index">
    <view class="index">
      <AtSearchBar
        placeholder='请输入运单号'
        showActionButton
        :value="orderValue"
        :onChange="onChange.bind(this, 'orderValue')"
        :onActionClick="onActionClick"
      />
      <view class="order-body">
        <!-- :swipeable="false"
          scroll -->
        <AtTabs
          :swipeable="true"
          :current="current"
          :tabList="tabList"
          :onClick="handleClick"
        >
          <AtTabsPane :current="current" :index="0">
            <view class='tab-content'>标签页一的内容</view>
          </AtTabsPane>
          <AtTabsPane :current="current" :index="1">
            <view class='tab-content'>标签页二的内容</view>
          </AtTabsPane>
          <AtTabsPane :current="current" :index="2">
            <view class='tab-content'>标签页三的内容</view>
          </AtTabsPane>
          <AtTabsPane :current="current" :index="3">
            <view class='tab-content'>标签页四的内容</view>
          </AtTabsPane>
          <AtTabsPane :current="current" :index="4">
            <view class='tab-content'>标签页五的内容</view>
          </AtTabsPane>
        </AtTabs>
      </view>  
    </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import { AtSearchBar, AtTabs, AtTabsPane } from 'taro-ui-vue'

import "taro-ui-vue/dist/style/components/search-bar.scss"
import "taro-ui-vue/dist/style/components/button.scss"
import "taro-ui-vue/dist/style/components/icon.scss"
import "taro-ui-vue/dist/style/components/tabs.scss"
import './index.scss' 
export default {
    components: {
      AtSearchBar,
      AtTabs,
      AtTabsPane
      // AtToast,
      // AtNoticebar,
      // AtTabBar
    },
    data () {
      return {
        orderValue: '',
        //tab
        current: 0,
        tabList: [
          { title: '全部' },
          { title: '待揽收' },
          { title: '在途' },
          { title: '签收' },
          { title: '已取消' }
        ],
      }
    },
    methods: {
      onChange(stateName, value) {
        this[stateName] = value
      },
      onActionClick() {
        console.log('点击了搜索按钮')
      },
      // tab
      handleClick(value) {
        this.current = value
      }
    },
  }
</script>
