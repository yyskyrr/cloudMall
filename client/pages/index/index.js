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
  // const db= wx.cloud.database()
  db.collection('swiper').get({
    success:res=>{
      this.setData({
        swiperlist:res.data
      })
    }
  })
  // request({ url: '/home/swiperdata'})
  // .then(result => {
  //   this.setData({
      
  //    swiperlist:result.data.message
  //   })
  // })
      
  },



  getfloorlist(){
    // const db= wx.cloud.database()
  db.collection('floordata').get({
    success:result=>{
      // console.log(result.data[0].message);
      
      this.setData({
        floorlist:result.data[0].message
      })
    }
  })
    // request({ url: '/home/floordata'})
    // .then(result => {
    //   this.setData({
    //     floorlist:result.data.message
    //   })
    // })
    
    
  },


});