import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

const OrderSearch = ():ReactElement =>{
  const navigate = useNavigate()
  return (
    <>
      <form style={{display:"flex",flexDirection:"column"}}>
        <div>订单号：<input type="text"></input></div>
        <button onClick={()=> navigate('/list')}> search</button>
      </form>
    </>
  )
}
export default OrderSearch