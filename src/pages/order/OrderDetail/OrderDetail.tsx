import React,{ ReactElement } from "react";
import { useSearchParams } from "react-router-dom";

const OrderDetail = ():ReactElement =>{
    const [searchParams] = useSearchParams()
    const orderid = searchParams.get("orderid")
    return (
      <>
        <div style={{background:"red",width:"100%"}}>
					<p>title--{ orderid }</p>
					<p>date and time</p>
					<p>Descriptions</p>
        </div>
        </>
    )
}
export default OrderDetail