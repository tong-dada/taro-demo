/*
 * @Author: your name
 * @Date: 2020-12-04 09:57:33
 * @LastEditTime: 2020-12-07 17:53:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /deppon/taro-demo/src/app.config.ts
 */
export default {
  pages: [
    'pages/index/index',
    'pages/order/index',
    'pages/user/index',
    'pages/login/index',
    'pages/appointment_mail/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'db科技',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    "color": "#8B8B8B",
    "selectedColor": "#EF8437",
    "borderStyle": "white",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "寄件",
        "iconPath": "assets/tabBar/mail-.png",
        "selectedIconPath": "assets/tabBar/mail.png"
      },
      {
        "pagePath": "pages/order/index",
        "text": "查件",
        "iconPath": "assets/tabBar/order-.png",
        "selectedIconPath": "assets/tabBar/order.png"
      },
      {
        "pagePath": "pages/user/index",
        "text": "我的",
        "iconPath": "assets/tabBar/user-.png",
        "selectedIconPath": "assets/tabBar/user.png"
      }
    ]
  },
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序位置接口的效果展示'
    }
  }
}
