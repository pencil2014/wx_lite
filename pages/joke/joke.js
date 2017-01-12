//joke.js
Page({
  data: {
    newsList: [],
    question: [],
    startX: 0
  },
  // 请求数据
  getData: function () {
    var that = this
    wx.request({
      url: 'https://api.tianapi.com/txapi/dictum/?key=f777ea16a2472e775d895d7adeba9c24',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        that.setData({
          newsList: res.data.newslist
        })
        wx.stopPullDownRefresh()
      }
    });
    wx.request({
      url: 'https://api.tianapi.com/txapi/wenda/?key=f777ea16a2472e775d895d7adeba9c24',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        that.setData({
          question: res.data.newslist
        })
        wx.stopPullDownRefresh()
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
    var dis = this.data.startX - endX
    if(dis > 100){
        wx.switchTab({
          url: '../girl/girl'
        })
    }
  },
  // 页面加载
  onLoad: function () {
    this.getData()
  },
  // 下拉刷新
  onPullDownRefresh: function(){
    this.getData()
  },
  // 页面分享
  onShareAppMessage: function () {
    return {
      title: '微信小程序',
      desc: '这是微信小程序的分享功能',
      path: '/page/joke'
    }
  }
})