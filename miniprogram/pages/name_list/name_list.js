// miniprogram/pages/name_list/name_list.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    blur_rank: 0,
    members:null,
    name:null,
    position:null,
    grade:null,
    department:null,
    birthday:null,
    one_word:null,
    avatar:null
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
    let that = this;
    console.log("====显示名单列表====")
    that.get_data_from_cloud();
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
  get_data_from_cloud: function () {
    let from_start = 20
    let that = this
    console.log('==调用人员信息加载函数==')
    //显示人员信息
    db.collection('members').orderBy('grade', 'asc').limit(from_start).get({
      success(res) {
        
        console.log(res)
        let local_data = res.data
        that.setData({
          members: local_data
        })
      },
      fail(res){
        console.log(res)
      }
    });
  },
  plus_login:function(){
    wx.redirectTo({
      url: '../login/login'
    })
  },
  close: function () {
    this.setData({
      show: false,
      blur_rank: 0
    })
  },
  touchMove: function () { },

  maskTouchMove: function () { },
  for_more_info:function(res){
    let that = this;
    let i = res.currentTarget.dataset.index;
    console.log(i)
    that.setData({
      name: that.data.members[i].name,
      position: that.data.members[i].position,
      grade: that.data.members[i].grade,
      department: that.data.members[i].department,
      birthday: that.data.members[i].birthday,
      one_word: that.data.members[i].one_word,
      avatar: that.data.members[i].avatar,
      show:true,
      blur_rank: 10
    })
  },
 
})