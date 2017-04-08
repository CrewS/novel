//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    _id: '',
    _sid: '',
  },
  onLoad: function (option) {
    // console.log(option.key);
    this.setData({
      _id:option._id
    })
    
  },
  onShow:function(){
    this.setData({
      detail:{
        "_id": "58a2c128362a548b5fdf98fa",
        "title": "道君",
        "author": "跃千愁",
        "longIntro": "　　一个地球神级盗墓宗师，闯入修真界的故事……\r\n　　桃花源里，有歌声。\r\n　　山外青山，白骨山。\r\n　　五花马，千金裘，倚天剑。\r\n　　应我多情，啾啾鬼鸣，美人薄嗔。\r\n　　天地无垠，谁家旗鼓，碧落黄泉，万古高楼。\r\n　　为义气争雄！\r\n　　为乱世争霸！\r\n　　你好，仙侠！",
        "cover": "http://statics.zhuishushenqi.com/cover/149119122306649",
        "cat": "幻想修仙",
        "majorCate": "仙侠",
        "minorCate": "幻想修仙",
        "creater": "Xiaomi MI 5",
        "_le": false,
        "allowMonthly": false,
        "allowVoucher": true,
        "allowBeanVoucher": false,
        "hasCp": true,
        "postCount": 426,
        "latelyFollower": 20471,
        "followerCount": 0,
        "wordCount": 330548,
        "serializeWordCount": 7403,
        "retentionRatio": "63.29",
        "updated": "2017-04-05T00:34:32.718Z",
        "isSerial": true,
        "chaptersCount": 106,
        "lastChapter": "第105章 初次交锋",
        "gender": [
          "male"
        ],
        "tags": [
          "仙侠"
        ],
        "donate": false
      }
    })
    // console.log(this.data.detail)
    this.getSource();
    // this.getResult();
  },
  getCatalog:function(){
    var that = this;
    wx.request({
      url: 'https://api.zhuishushenqi.com/toc/' + this.data._sid, //仅为示例，并非真实的接口地址
      data: {
        view:'chapters'
      },
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        that.setData({
          catalog:res.data.chapters
        })
      }
    })
  },
  getSource: function (){
    var that = this;
    wx.request({
      url: 'https://api.zhuishushenqi.com/toc', //仅为示例，并非真实的接口地址
      data: {
        view: 'summary',
        book: this.data._id
      },
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        let id = ''
        res.data.map((data)=>{
          if(data.source == 'my176'){
            id = data._id;
          }
        })
        that.setData({
          _sid: id
        })
        that.getCatalog();
        console.log(res.data,id)
      }
    })
  },
  goBack:function(){
    // console.log(this.getCurrentPages())
    // wx.switchTab({
    //   url: '../index/index'
    // })
    wx.navigateBack()
    // wx.navigateBack({
    //   url: '../index/index'
    // })
    // wx.redirectTo({
    //   url: '../index/index'
    // })
  }
})
