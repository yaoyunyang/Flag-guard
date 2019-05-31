// miniprogram/pages/NK/NK.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [{ id: '1', path: 'cloud://trading-market-yyy.7472-trading-market-yyy/homepage_swipe/flag.png' }],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  to_more_xuanchuan:function(){
    wx.showToast({
      title: '等待开放～',
      icon: "none",
      duration: 2000,
      mask: true
    })
  },
  to_more_train:function(){
    wx.navigateTo({
      url: '../train/train'
    })
  },
  to_more_ensure:function(){
    wx.navigateTo({
      url: '../ensure/ensure'
    })
  },
  to_more_tuan:function(){
    wx.navigateTo({
      url: '../tuan/tuan'
    })
  }
})