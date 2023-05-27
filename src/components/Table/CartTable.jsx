import { useDispatch, useSelector } from 'react-redux'
import './CartTable.scss'
//react
import React from 'react'
import { removeProdCart } from '/src/redux/redux-slides/productListSlide'
import { useEffect, useState } from 'react';


//---------------------------------------------------------------------------------

function CartTable() {
    const dispatch = useDispatch()
    const { cartList } = useSelector(state => state.productReducer)
    const [listOrder, setListOrder] = useState([]);
    const [checked, setChecked] = useState(false);

    const handleChange = (product) => {
        const prIndex = listOrder?.findIndex((pr) => pr.id === product.id);

        if(prIndex === -1){
            setListOrder([...listOrder, product])
        } else {
            setListOrder(listOrder.filter((pr) => pr.id !== product.id))
        }
      
    };
    const handleChangeAll = () => {
      
    };
    console.log(listOrder)
    const handleDelete = (id) => {
        dispatch(removeProdCart(id))
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartList))
    }, [cartList]);


    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <input 
                            className='table-checkbox' 
                            type="checkbox" 
                            id="myCheckbox" 
                            name="myCheckbox"

                            onChange={handleChangeAll}/>
                        </th>
                        <th>ID</th>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>TOTAL</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {cartList.map((product) =>
                        <tr key={product.id}>
                            <td>
                                <input type="checkbox" id="myCheckbox" name="myCheckbox" onChange={() => handleChange(product)} />
                            </td>
                            <td>{product.id}</td>
                            <td><img height={50} width={60} src={product.image} alt="..." /></td>
                            <td>{product.name}</td>
                            <td>{product.price}$</td>
                            <td style={{ margin: '0 2.1rem' }}>
                                <button className='btn-quantity'>+</button>
                                <span>{product.count}</span>
                                <button className='btn-quantity'>-</button>
                            </td>
                            <td>{product.price * product.count}$</td>
                            <td>
                                <button className='btn-edit'>EDIT</button>
                                <button className='btn-delete' onClick={() => handleDelete(product.id)}>DELETE</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className='d-flex justify-content-end'>
                <button className='submit-order'>submit order</button>
            </div>
        </>
    )
}

export default CartTable