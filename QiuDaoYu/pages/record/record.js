
// record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue : '',
    items: []
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
    console.log('--------下拉刷新-------')
    console.log(this.data.inputValue)
    wx.showNavigationBarLoading() //在标题栏中显示加载
    var that = this
    wx.request({
      url: 'http://47.94.199.92:8025/Attendance/GetRecord',
      data: { "PageIndex": 1, "PageSize": 10, "Search": this.data.inputValue },
      method: 'POST',
      success: function (res) {
        //更新数据
        that.setData({
          items: res.data.data
        })
      },
      complete: function () {
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('刷新');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
  //提交
  confirmSubmit: function (event) {
  this.setData({
      inputValue: event.detail.value
    })
  var that = this
    wx.request({
      url: 'http://47.94.199.92:8025/Attendance/GetRecord',
      data: { "PageIndex": 1, "PageSize": 10, "Search": event.detail.value },
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        //更新数据
        that.setData({
          items: res.data.data
        })

      }
    })

  }

})
