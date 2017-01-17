// audio.js
Page({
  data:{
    tempFilePath: null
  },
  voiceStart: function () {
    var that = this
    wx.startRecord({
      success: function(res) {
        that.setData({
          tempFilePath: res.tempFilePath
        })
        wx.showToast({
          title: '录音成功！',
          icon: 'success'
        })
      },
      fail: function(res) {
        wx.showToast({
          title: '录音失败！',
          icon: 'success'
        })
      }
    })
  },
  voiceOver:function(){
     wx.stopRecord()
  },
  voicePlay:function(){
    var that = this
    wx.playVoice({
      filePath: that.data.tempFilePath,
      fail: function(){
        wx.showToast({
          title: '录音播放失败！',
          icon: 'success'
        })
      }
    })
  },
  voiceStop:function(){
    wx.pauseVoice()
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
    if(-dis > 100) {
      wx.switchTab({
          url: '../video/video'
        })
    }
  },
  // 下拉刷新
  onPullDownRefresh: function(){
    wx.stopPullDownRefresh()
  },
  // 页面分享
  onShareAppMessage: function () {
    return {
      title: '微信小程序',
      desc: '这是微信小程序的分享功能',
      path: '/page/voice'
    }
  }
})
