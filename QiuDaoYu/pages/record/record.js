var PageIndex=1
var PageSize=25

var GetList = function (that){
  that.setData({
    items: []
  })
  wx.showNavigationBarLoading() //在标题栏中显示加载
  wx.request({
    url: 'https://api.sauryfish.com/Attendance/GetRecord',
    data: { "PageIndex": 1, "PageSize": PageSize, "Search": that.data.inputValue },
    method: 'POST',
    success: function (res) {
      if (res.data.data.length>0){
        //更新数据
        that.setData({
          items: res.data.data
        })

        that.setData({
          searchLoading: true   //把"上拉加载"的变量设为false，显示  
        });
      }else{
        that.setData({
          searchLoadingComplete: true, //把“没有数据”设为true，显示  
          searchLoading: false   //把"上拉加载"的变量设为false，隐藏  
        });
      }
     

      

      PageIndex++
    },
    complete: function () {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }
  })
}



var GetPageList = function (that) {
  
  wx.showNavigationBarLoading() //在标题栏中显示加载
  wx.request({
    url: 'https://api.sauryfish.com/Attendance/GetRecord',
    data: { "PageIndex": PageIndex, "PageSize": PageSize, "Search": that.data.inputValue },
    method: 'POST',
    success: function (res) {
      var list = that.data.items
      if (res.data.data.length>0){
        for (var i = 0; i < res.data.data.length; i++) {
          list.push(res.data.data[i]);
        }
        that.setData({
          searchLoading: true   //把"上拉加载"的变量设为false，显示  
        });
      }else{
        that.setData({
          searchLoadingComplete: true, //把“没有数据”设为true，显示  
          searchLoading: false   //把"上拉加载"的变量设为false，隐藏  
        });
      }
      
      //更新数据
      that.setData({
        items: list
      })
      PageIndex++

      that.setData({
        hidden: true
      });
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
    scrollHeight: 0,
    searchLoading: false, //"上拉加载"的变量，默认false，隐藏  
    searchLoadingComplete: false  //“没有数据”的变量，默认false，隐藏  
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
    PageIndex = 1
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
  PageIndex = 1
  var that = this
  GetList(that)
  },

  bindDownLoad: function () {
    var that = this;
    console.log('出发滚动')
    console.log(that.data.searchLoading)
    console.log(that.data.searchLoadingComplete)
    //   该方法绑定了页面滑动到底部的事件
    if (that.data.searchLoading && !that.data.searchLoadingComplete) {
      GetPageList(that);
    }
  },
})
