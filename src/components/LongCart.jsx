import React from 'react'
import { Cart } from './Cart'
import { useDispatch, useSelector } from 'react-redux';
import { clearitem } from '../redux/cartslice';

function LongCart() {
    
  const dispatch = useDispatch(clearitem());
  const cartitem = useSelector(selectcartitem);
  return (
    <>
    <Cart cartitem={cartitem} dispatch={dispatch}/>
    </>
  )
}

export default LongCart