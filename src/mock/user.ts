import Mock from "mockjs"
Mock.mock(`${process.env.REACT_APP_BASE_URL}/order/getOrderList`,'post', {
  data:{
    code:200,
    success:true,
    msg:'@cparagraph',
    'list|6':[
      {
        'id|+1':1,
        orderName:'@cname',
        pic:"@image('150x100','#fb0a2a')"
      }
    ]
  }
})