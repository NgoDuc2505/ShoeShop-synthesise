import './Cart.scss'
//react
import React from 'react'
//component
import TableCart from '../../components/Table/TableCart'
import GoLogin from '../../components/go-to-login/GoLogin';
//utils
import { getLocal } from '/src/utils/localStorage/index.js';
//constant
import { ACCESS_TOKEN } from '/src/const/index.js';

//---------------------------------------------------------------------------------

function Cart() {
  return (
    <>{getLocal(ACCESS_TOKEN)
      ? (
        <div>
          <h2 className='carts'>Carts</h2>
          <TableCart />
        </div>
        )
      : <GoLogin />
    }</>
  )
}

export default Cart

