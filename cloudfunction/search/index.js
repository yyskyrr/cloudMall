// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request-promise')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return await request({
    method:'get',
    url:"https://api-hmugo-web.itheima.net/api/public/v1/goods/search",
    qs:{
      cid:event.cid,
      query:event.query,
      pagenum:event.pagenum,
      pagesize:event.pagesize
    },
    json: true,
  })  .then(res=>{
    return Promise.resolve(res)
  })
}