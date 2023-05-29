import React from 'react'
import DetailProdTable from './DetailProdTable'
import './tableFormat.scss'
function ProdTable(props) {
    const {list, date} = props.item;
  return (
    <>
        <div className="prod_table">
            <p className='status_table'>{`+ Orders have been placed on ${date.day} - ${date.month} - ${date.year}`}</p>
            <table>
                <thead>
                    <tr className='table-row'>
                        <th className='td_id'>id</th>
                        <th className='td_img'>Image</th>
                        <th className='td_name'>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item,index)=>{
                    return <DetailProdTable key={index} shoe={item}/>
                    })}
                </tbody>
            </table>
            
        </div>
    </>
  )
}

export default ProdTable