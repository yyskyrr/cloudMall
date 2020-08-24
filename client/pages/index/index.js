import { request } from "../../request/index";
const db = wx.cloud.database()
wx-Page({
  data: {
    swiperlist:[ ],
    cateslist:[ ],
    floorlist:[],
  },
  
  /**
   * 生命周期函数--监听页面加载
   * 页面加载 就会触发
   */
  onLoad: function (options) {
    this.getswiperlist(); 
    this.getfloorlist();
  },

 getswiperlist(){
  db.collection('swiper').get({
    success:res=>{
      this.setData({
        swiperlist:res.data
      })
    }
  })
      
  },



  getfloorlist(){
  db.collection('floordata').get({
    success:result=>{
      // console.log(result.data[0].message);
      
      this.setData({
        floorlist:result.data[0].message
      })
    }
  })
    
    
  },


});