// miniprogram/pages/login/login.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar:"../../images/avatar_login.png",
    code:null,
    name:null,
    department:null,
    grade:null,
    position:null,
    one_word:null,
    birthday:"生日"
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
  upload_photo: function () {
    let that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        that.setData({
          avatar:tempFilePaths
        })
      }
    })
  },
  bindDateChange: function (res) {
    console.log(res);
    this.setData({
      birthday: res.detail.value
    })
  },
  input_name:function(e){
    let that = this;
    that.setData({
      name:e.detail.value
    })
  },
  input_code: function (e) {
    let that = this;
    that.setData({
      code: e.detail.value
    })
  },
  input_department: function (e) {
    let that = this;
    that.setData({
      department: e.detail.value
    })
  },
  input_grade: function (e) {
    let that = this;
    that.setData({
      grade: e.detail.value
    })
  },
  input_position: function (e) {
    let that = this;
    that.setData({
      position: e.detail.value
    })
  },
  input_one_word: function (e) {
    let that = this;
    that.setData({
      one_word: e.detail.value
    })
  },
  login_:function(){
    let that = this;
    wx.showLoading({
      title: '登记中',
    })

    if (that.data.avatar != "../../images/avatar_login.png"&&that.data.birthday!="生日"&&
      that.data.code && that.data.name && that.data.department
      && that.data.grade && that.data.position && that.data.one_word)
    {
      if (that.data.code != "20150417")
      {
        wx.showToast({
          title: '识别码错误\n\n\n无法登记～',
          icon: "none",
          duration: 2000,
          mask: true
        })
      }
      else{
        const name = Math.random() * 1.0E18
        console.log(that.data.avatar[0])
        const file = that.data.avatar[0];
        const cloudPath = "avatar/"+name + file.match(/\.[^.]+?$/)[0]
        console.log(cloudPath)
        wx.cloud.uploadFile({
          cloudPath:cloudPath,
          filePath:file, // 文件路径
          success: res => {
            // get resource ID
            let file = res.fileID;
            console.log(file);
            db.collection('members').add({
              data: {
                name: that.data.name,
                department: that.data.department,
                grade: that.data.grade,
                position: that.data.position,
                one_word: that.data.one_word,
                avatar: file,
                birthday:that.data.birthday
              },
              success(res) {

                wx.hideLoading()
                wx.redirectTo({
                  url: '../name_list/name_list',
                })
                wx.showToast({
                  title: '登记成功',
                  icon: 'success',
                  duration: 1000
                })
              }
            })

          },
          fail: err => {
            // handle error
          }})
      
      }
    }
    else{
      wx.showToast({
        title: '信息不完整～',
        icon: "none",
        duration: 2000,
        mask: true
      })
    }
  }


})