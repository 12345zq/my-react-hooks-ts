import React, { ReactElement } from "react"
import { Outlet, useNavigate } from "react-router-dom"

const OrderList = ():ReactElement=>{
	const navigate = useNavigate()
	return (
		<>
			<Outlet></Outlet>
			<ul>
				<li onClick={()=>{navigate('/detail?orderid=id0')}}> list 0</li>
				<li onClick={()=>{navigate('/detail?orderid=id1')}}> list 1</li>
				<li onClick={()=>{navigate('/detail?orderid=id2')}}> list 2</li>
			</ul>
		</>
	)
}
export default OrderList