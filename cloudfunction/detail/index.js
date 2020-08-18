// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request-promise')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  
  return await request({
    url:"https://api-hmugo-web.itheima.net/api/public/v1/goods/detail",
    qs:event,
    json:true,
  })
}