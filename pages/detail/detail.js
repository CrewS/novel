var app = getApp();
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data: {
    logs: [],
    _id: '',
    _sid: '',
    indexChapter: '',
    detail:'',
  },
  onLoad: function (option) {
    // console.log(option.key);
    this.setData({
      indexChapter:option.index,
      chapters:app.chapters,
    })
    this.getDetail()
    console.log(option.index,app.chapters)
  },
  onShow:function(){
    // this.getSource();
  },
  getDetail: function (){
    var that = this;
    console.log(this.data.indexChapter)
    var link = encodeURIComponent(this.data.chapters[this.data.indexChapter].link);
    
    wx.request({
      url: 'https://chapter2.zhuishushenqi.com/chapter/'+link, //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data);
        that.setData({
          detail: res.data.chapter
        })
        //设置标题
        wx.setNavigationBarTitle({
          title: app.chapters[that.data.indexChapter].title
        })
        var tmp = res.data.chapter.body;
        var text = tmp.split('\n');
        var data = text.map((data)=>{
          return '<p>'+data+'</p>'
        })

        // console.log(data.join(''))
        WxParse.wxParse('article', 'html', data.join(''), that, 5);
      }
    })
  },
  goPrev:function(){
    // this.setData({
    //   indexChapter:this.data.indexChapter-1
    // })
    // this.getDetail()
    if (this.data.indexChapter == 0){
      wx.showToast({
        title: '已经是首章节'
      })
      return false;
    }
    wx.redirectTo({
      url: '../detail/detail?index=' + (this.data.indexChapter-1)
    })
  },
  goNext:function(){
    // this.setData({
    //   indexChapter:
    // })
    if (this.data.indexChapter == app.chapters.length-1){
      wx.showToast({
        title: '已经是末章节'
      })
      return false;
    }
    wx.redirectTo({
      url: '../detail/detail?index=' + (this.data.indexChapter-0+1)
    })
    // this.getDetail()
  },
  goBack:function(){
    wx.navigateBack()
  }
})
