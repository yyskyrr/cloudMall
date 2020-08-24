const db=wx.cloud.database()
Page({
  data: {
    leftmenulist:[],
    rightcontent:[],
    currentindex:0,
    scrolltop:0

  },
  cates:[],

  onLoad: function (options) {
    const cates=wx.getStorageSync("cates");
    if(!cates){
      this.getcates();
    }else{
      if(Date.now()-cates.time>1000*60){
      this.getcates();
      }else{
        this.cates=cates.data;
        let leftmenulist=this.cates.map(v=>v.cat_name);
      let rightcontent=this.cates[0].children;

      
      this.setData({
        leftmenulist,
        rightcontent
      })
        
      }
    }


  },
  getcates(){
    db.collection('categories').get()
    .then(res=>{
      
      this.cates=res.data[0].message;

      wx.setStorageSync("cates",{time:Date.now(),data:this.cates});


      let leftmenulist=this.cates.map(v=>v.cat_name);
      let rightcontent=this.cates[0].children;


      this.setData({
        leftmenulist,
        rightcontent
      })
    })
  },
  handleitemtap(e){
    const {index}=e.currentTarget.dataset;

    let rightcontent=this.cates[index].children;
    this.setData({
      currentindex:index,
      rightcontent,
      scrolltop:0
    })
    
  }

})