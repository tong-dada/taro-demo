export default {
  pages: [
    'pages/index/index',
    'pages/order/index',
    'pages/user/index',
    'pages/appointment_mail/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '德邦跨境',
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
