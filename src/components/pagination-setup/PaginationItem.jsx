import React from 'react'
import ProdTable from '../product_table_format/ProdTable'

function PaginationItem({currentItems}) {
  return (
    <div>
        {
            currentItems && currentItems.map((item,index)=>(<ProdTable key={index} item={item}/>))
        }
    </div>
  )
}

export default PaginationItem