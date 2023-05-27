import './Cart.scss'
//react
import React from 'react'
//component
import CartTable from 'src/components/Table/CartTable'
import TableCart from '../../components/Table/TableCart'

//---------------------------------------------------------------------------------

function Cart() {
  return (
    <div>
      <h2 className='carts'>Carts</h2>
      {/* <CartTable/> */}
      <TableCart/>
    </div>
  )
}

export default Cart