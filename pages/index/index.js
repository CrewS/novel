//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    key: '',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindKeyInput: function(e){
    this.setData({
      key:e.detail.value
    })
  },
  search:function(){
    // console.log(this.data.key);
    wx.navigateTo({
      url: '../search/search?key=' + '1794'
    })
    // wx.request({
    //   url: 'https://api.zhuishushenqi.com/book/fuzzy-search', //仅为示例，并非真实的接口地址
    //   data: {
    //     query: this.data.key ,
    //   },
    //   header: {
    //       'content-type': 'application/json'
    //   },
    //   success: function(res) {
    //     console.log(res.data)
    //   }
    // })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
