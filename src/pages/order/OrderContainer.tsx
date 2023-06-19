import React, { ReactElement } from "react"
import { Outlet } from "react-router-dom"

const OrderContainer = ():ReactElement=>{
	return (
		<>
			<Outlet></Outlet>
		</>
	)
}
export default OrderContainer