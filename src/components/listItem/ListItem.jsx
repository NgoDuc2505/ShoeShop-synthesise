import './listItem.scss'
//react
import React from 'react'
import { useSelector } from 'react-redux';
//component
import CardProduct from '../CardProduct/CardProduct'

//---------------------------------------------------------------------------------

function ListItem() {
  const { listProduct, favoriteProductList } = useSelector((state) => state.productReducer)
  return (
    <div className="list-product">
      {listProduct.map((product) =>
        <CardProduct key={product.id} product={product} show={true} favoriteProd={favoriteProductList} />
      )}
    </div>
  )
}

export default ListItem