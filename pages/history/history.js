//history.js
Page({
  data: {
    newsList: [],
    startX: 0
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
          url: '../canvas/canvas'
        })
    } 
    if(-dis > 100){
      wx.switchTab({
          url: '../wechat/wechat'
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
      url: 'https://api.tianapi.com/txapi/lishi/?key=f777ea16a2472e775d895d7adeba9c24',
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
      path: '/page/history'
    }
  }
})