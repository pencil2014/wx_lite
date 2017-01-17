//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    system: null,
    networkType: null,
    scan: null
  },
  // 事件绑定
  bindCall: function() {
    wx.makePhoneCall({
      phoneNumber: '15019435241'
    })
  },
  bindScan:function(){
    wx.scanCode({
      success: (res) => {
        this.setData({
          scan: res
        })
      }
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
          url: '../audio/audio'
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
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          system: res
        })
      }
    })
    wx.getNetworkType({
      success: function(res) {
        that.setData({
          networkType: res.networkType
        })
      }
    })
  },
  // 页面分享
  onShareAppMessage: function () {
    return {
      title: '微信小程序',
      desc: '这是微信小程序的分享功能',
      path: '/page/system'
    }
  }
})
