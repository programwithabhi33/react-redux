import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from "./state/index"

const Shop = () => {
  const dispatch = useDispatch();
  const { depositMoney } = bindActionCreators(actionCreators, dispatch) 
  return (
    <>
      <button className="btn btn-primary mx-2" onClick={_ => dispatch(function (dispatch) {
        dispatch({
          type: "withdraw",
          payload: 100,
        })
      })}>-</button>
      Action
      <button className="btn btn-primary mx-2" onClick={_ => depositMoney(100)}>+</button>
    </>
  )
}

export default Shop