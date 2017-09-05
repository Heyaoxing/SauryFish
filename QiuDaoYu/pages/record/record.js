var PageIndex=1
var PageSize=20

var GetList = function (that){
  that.setData({
    items: []
  })
  wx.showNavigationBarLoading() //在标题栏中显示加载
  wx.request({
    url: 'http://47.94.199.92:8025/Attendance/GetRecord',
    data: { "PageIndex": PageIndex, "PageSize": PageSize, "Search": that.data.inputValue },
    method: 'POST',
    success: function (res) {
      //更新数据
      that.setData({
        items: res.data.data
      })

      PageIndex++
    },
    complete: function () {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }
  })
}

// record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue : '',
    items: [],
    scrollTop: 0,
    scrollHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //   这里要非常注意，微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowHeight);
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
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
   
    var that = this
    PageIndex = 0
    GetList(that)
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
  
  //提交
  confirmSubmit: function (event) {
  this.setData({
      inputValue: event.detail.value
    })
  PageIndex = 0
  var that = this
  GetList(that)
  },

  bindDownLoad: function () {
    //   该方法绑定了页面滑动到底部的事件
    var that = this;
    GetList(that);
  },
  scroll: function (event) {
    //   该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。
    this.setData({
      scrollTop: event.detail.scrollTop
    });
  },
  refresh: function (event) {
    //   该方法绑定了页面滑动到顶部的事件，然后做上拉刷新
    PageIndex = 0;
    this.setData({
      items: [],
      scrollTop: 0
    });
    GetList(this)
  }

})
