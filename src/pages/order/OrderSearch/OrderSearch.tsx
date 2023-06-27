import OrderApi, { QueryTableType } from "@/apis/order/OrderApi";
import { ResponseFrom } from "@/apis/request";
import { Button, Form, FormInstance, Input } from "antd";
import React, { FC, ReactElement, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


const OrderSearch:FC = ():ReactElement =>{
  const [loading,setLoading] = useState<boolean>(false)
  const [tableList,setTableList] = useState<Array<any>>([])
  const [qfrom,setQfrom] = useState<QueryTableType>({
    pageSize:10,
    pageNumber:1,
    queryKey:null
  })
  const onQuery = (fieldsValue:any={username:'',tradename:''})=>{
    // debugger
    console.log(fieldsValue)
    setLoading(true)
    OrderApi.getOrderList(qfrom)
    .then((res)=>{
      console.log(res.data.data|| 'nodata')
      setTableList(res.data.data.list)
    }).catch((err)=>{
      console.log(err)
    })
    .finally(()=>{
      setLoading(false)
      // navigate('/list')
    })
  }
  const navigate = useNavigate()
  const ignore = useRef(false)
  useEffect(()=>{
    if(!ignore.current){
      onQuery()
    }
    return () => {
      ignore.current = true
    }
  },[])
  const [form] = Form.useForm()
  
  return (
    <>
      <section className="main-page-warp busines-list-warp">
        <Form
          className='main-page-table-form'
          layout='inline'
          form={form}
          onFinish={onQuery}
          style={{display:"flex",flexDirection:"column"}}
        >
          <Form.Item label='用户名称' name='username'>
            <Input placeholder="请输入用户名称！"></Input>
          </Form.Item>
          <Form.Item label='商品名称' name='tradename'>
            <Input placeholder="请输入商品名称！"></Input>
          </Form.Item>
          <Form.Item>
            <Button htmlType='submit' type='primary'>查询</Button>
          </Form.Item>
        </Form>
      </section>
      <form style={{display:"flex",flexDirection:"column"}}>
        <div>订单号：<input type="text"></input></div>
        <button onClick={onQuery}> search</button>
      </form>
      {/* <div>
        {tableList.map(data=><li key={data.id}>{data.orderName}<img src={data.pic}></img> </li> )}
      </div> */}
    </>
  )
}
export default OrderSearch