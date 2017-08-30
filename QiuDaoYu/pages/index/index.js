//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    items: []
  },
  onLoad: function () {
   var that = this
     wx.request({
       url: 'http://47.94.199.92:8025/Attendance/GetDescript', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json'
      },
      method:'GET',
      success: function (res) {
        console.log(res.data)
        //更新数据
        that.setData({
          items: res.data.data
        })
      }
    })
  },
  clickInput:function(event){
    wx.navigateTo({
      url: '../record/record'
    })
  }
})
