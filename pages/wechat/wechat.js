//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    newsList: [],
    startX: 0
  },
  // 事件绑定
  gotoLink: function() {
    wx.showToast({
      title: '不支持外链！',
      icon: 'loading',
      duration: 2000
    })
  },
  // touch
  start: function (event) {
    this.setData({
      startX: event.changedTouches[0].pageX
    })
  },
  end: function (event) {
    var endX = event.changedTouches[0].pageX
    var dis = endX - this.data.startX
    if( dis > 100){
        wx.switchTab({
          url: '../video/video'
        })
    } 
    if(-dis > 100) {
      wx.switchTab({
          url: '../index/index'
        })
    }
  },
  // 下拉刷新
  onPullDownRefresh: function(){
    wx.stopPullDownRefresh()
  },
  // 页面加载
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://api.tianapi.com/wxnew/?key=f777ea16a2472e775d895d7adeba9c24&num=50',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        that.setData({
          newsList: res.data.newslist
        })
      }
    })
  },
  // 页面分享
  onShareAppMessage: function () {
    return {
      title: '微信小程序',
      desc: '这是微信小程序的分享功能',
      path: '/page/wechat'
    }
  }
})
