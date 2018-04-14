//index.js
//获取应用实例
const app = getApp()

import { q } from '../../config/q'
import { getDemo } from '../../config/api'

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: [
      {
        title: 'A',
        content: 'A c'
      },
      {
        title: 'B',
        content: 'B c'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function () {
    
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onReady: function () {
  },

  showDialog() {
    this.dialog.showDialog();
  },

  onShareAppMessage: function (res) {
    console.log(res)
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '哇，这个标题可以自定义呀',
      path: '/pages/index/index?id=123',
      imageUrl: '../../static/imgs/common/share.png',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
