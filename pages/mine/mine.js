// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lineItems: [
      {
        icon: '../../static/imgs/mine/base.png',
        label: '基本信息',
        nav: '',
      },
      {
        icon: '../../static/imgs/mine/experience.png',
        label: '工作经历',
        nav: '',
      },
      {
        icon: '../../static/imgs/mine/skill.png',
        label: '技术能力',
        nav: '',
      },
      {
        icon: '../../static/imgs/mine/team.png',
        label: '团队分享',
        nav: '',
      },
      {
        icon: '../../static/imgs/mine/contact.png',
        label: '联系我',
        nav: '',
      },
      {
        icon: '../../static/imgs/mine/about.png',
        label: '关于',
        nav: '',
      }
    ],
    visitor: {},
    visitorAccept: false,
    refuseText: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getVisitorInfo();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var _this = this.data;
    return {
      title: `${Object.keys(_this.visitor).length ?
        _this.visitor.nickName : '好友'}向您推荐了张浩`,
      path: '/pages/mine/mine',
      imageUrl: '../../static/imgs/common/share-avatar.jpeg',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  /**
   * 获取来访者的信息
   */
  getVisitorInfo() {
    wx.getUserInfo({
      success: res => {
        this.setData({
          'visitor': res.userInfo,
          'visitorAccept': true
        })
      },
      fail: reject => {
        this.setData({
          refuseText: '欢迎您，来自火星的朋友'
        })
      }
    })
  }

})