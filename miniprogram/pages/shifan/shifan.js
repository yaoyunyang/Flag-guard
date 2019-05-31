// miniprogram/pages/shifan/shifan.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    blur_rank: 0,
    action_name: null,
    details: null,
    picture: null
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
  on_intro: function (e) {
    let that = this
    var from_ = e.currentTarget.dataset.from
    that.import_data_from_cloud(from_);
  },
  import_data_from_cloud: function (name) {
    console.log(name)
    let that = this;
    db.collection('action_details').where({
      action_name: name
    })
      .get({
        success: function (res) {
          console.log(res.data)
          that.setData({
            action_name: res.data[0].action_name,
            details: res.data[0].details,
            // picture: res.data[0].picture,
            show: true,
            blur_rank: 10,
          });
        },
        fail: function (res) {
          console.log(res)
        }
      })

  },
  close: function () {
    this.setData({
      show: false,
      blur_rank: 0
    })
  },
  touchMove: function () { },

  maskTouchMove: function () { }
})