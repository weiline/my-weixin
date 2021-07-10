// pages/detail/detail.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    image:"",
    title:"",
    desc:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     console.log(options.index);
     var index = options.index;
     var list = app.globalData.proList;
     var miss = list[index];
     console.log(miss);
    this.setData({
      image: miss.image,
      title: miss.title,
      desc: miss.desc,
    });
  },

})