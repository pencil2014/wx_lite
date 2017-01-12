//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    newsList: []
  },
  // 事件绑定
  gotoLink: function() {
    wx.showToast({
      title: '不支持外链！',
      icon: 'loading',
      duration: 2000
    })
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'http://apis.baidu.com/heweather/weather/free',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'apikey': '88e9a609631636f73d599309238fbc6e'
      },
      data: {
        city: 'shenzhen'
      },
      success: function(res) {
        that.setData({
          newsList: res.data.newslist
        })
      }
    })
  }
})
