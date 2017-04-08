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
    
  },
  onShow:function(){
    // this.setData({
    //   books:[{
    //       title:'abc'
    //   },{title:'123456'}
    //   ] 
    // })
    this.getResult();
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
        var book = res.data.books.map((item)=>{
          console.log(item)
          if(item.cover ==''){

          }else if(item.cover.indexOf('/agent/')==0){
            item.cover = item.cover.slice(7)
          }else{
            item.cover = 'http://statics.zhuishushenqi.com/'+item.cover
          }
          return item
        });
        // console.log(book)
        // for(let item of book){
        //   console.log(item.cover)
        //   if(item.cover ==''){
        //     return
        //   }else if(cover.indexOf('/agent/')==0){
        //     item.cover = item.cover.slice(7)
        //   }else{
        //     item.cover = 'http://statics.zhuishushenqi.com/'+item.cover
        //   }
          
        // }
        console.log(book)
        that.setData({
          books:book
        });
        
      }
    })
  },
  select:function(event){
    console.log(event)
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../brief/brief?_id=' + id
    })
  },
  url:function(data){
    return data.slice(data)
  }
})
