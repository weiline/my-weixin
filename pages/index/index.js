// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    background: ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    proList:null,
  },
  // 事件处理函数
  onLoad() {
    var list = app.globalData.proList;
    this.setData({
      proList: list
    });
    },
  toDetail: function(e){
    //console.log(e);
    var index = e.currentTarget.dataset.index;
    //var title = this.data.proList[index].title;
    wx.navigateTo({
      url: '/pages/detail/detail?index='+index,
    })
  }
 
})
