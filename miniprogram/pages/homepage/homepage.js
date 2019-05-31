// miniprogram/pages/homepage/homepage.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [{
      id: '1',
      path: 'cloud://trading-market-yyy.7472-trading-market-yyy/homepage_swipe/flag.png'
    }, ],
    arr: []


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  chat: function() {
    console.log("暂不开放")
  },
  to_nk: function() {
    wx.navigateTo({
      url: '../NK/NK'
    })
  },
  to_more:function(){
    wx.showToast({
      title: '等待开放～',
      icon:"none",
      duration: 2000,
      mask:true
    })
  }
})