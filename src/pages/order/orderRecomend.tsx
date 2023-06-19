import React,{ ReactElement } from "react";
import { useLocation } from "react-router-dom";

const OrderRecomend = ():ReactElement =>{
    const { state } = useLocation()
    return (
      <>
        <div style={{background:"green",width:"60%"}}>
					<p>price--{ state.price || 'noprice'}</p>
          <p>type--{ state.type || 'noprice'}</p>
					<p>OrderRecomend as below</p>
          <p>id--{ state.id || 'noprice'}</p>
          <p>comment--{ state.comment || 'none'}</p>
        </div>
        </>
    )
}
export default OrderRecomend