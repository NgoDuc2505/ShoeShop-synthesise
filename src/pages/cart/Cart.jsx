import './Cart.scss'
//react
import React from 'react'
//component
import TableCart from '../../components/Table/TableCart'

//---------------------------------------------------------------------------------

function Cart() {
  return (
    <div>
      <h2 className='carts'>Carts</h2>
      <TableCart/>
    </div>
  )
}

export default Cart