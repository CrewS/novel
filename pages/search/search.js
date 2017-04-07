//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    kety: '',
  },
  onLoad: function (option) {
    console.log(option.key);
    this.setData({
      key:option.key
    })
    this.setData({
        books:[{
            title:'abc'
        },{title:'123456'}
        ] 
      })
  },
  onShow:function(){
      
    // this.getResult();
  },
  getResult: function (){
    var that = this;
    wx.request({
      url: 'https://api.zhuishushenqi.com/book/fuzzy-search', //仅为示例，并非真实的接口地址
      data: {
        query: this.data.key ,
      },
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        that.setData({
          books:res.data.books
        });
        console.log(res.data)
      }
    })
  }
})
