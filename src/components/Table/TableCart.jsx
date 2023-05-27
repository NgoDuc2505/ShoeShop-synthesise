import './CartTable.scss';
const { Column } = Table;
//sweetalert2
import Swal from 'sweetalert2'
//antd
import { Space, Table } from 'antd';
import { InputNumber } from 'antd';
//react
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//redux
import { changeCount, removeProdCart } from '/src/redux/redux-slides/productListSlide'

//---------------------------------------------------------------------------------


const TableCart = () => {
  const dispatch = useDispatch();

  const { cartList } = useSelector(state => state.productReducer);
  const [listOrder, setListOrder] = useState([]);
  const [listCart, setListCart] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setListCart(cartList)
  }, [cartList])

  const rowSelection = {
    onChange: (_, selectedRows) => {
      setListOrder(selectedRows)
    }
  };

  const onChangeCount = (id, count, values) => {
    if (values > 0) {
      let value = values - count;
      dispatch(changeCount({ id, value }))
    }
  };

  const handleChangeCount = (id, count, value) => {
    if (count + value > 0) {
      dispatch(changeCount({ id, value }))
    }
  };

  const handleDelete = (id) => {
    const list = listCart.filter((item) => item.id !== id)
    Swal.fire({
      title: 'Are you sure to delete this product',
      confirmButtonText: 'Confirm',
      showDenyButton: true,
      denyButtonText: 'Deny'
    }).then((result) => {
      if (result.isConfirmed) {
        setListCart(list)
        dispatch(removeProdCart(id))
        localStorage.setItem('cart', JSON.stringify(list))

        Swal.fire(
          'Delete!',
          'You have deleted this product!',
          'success'
        )
      }
    })
  };

  const handleSubmit = () => {
    let list = listCart.filter(o1 => !listOrder.some(o2 => o1.id === o2.id));
    Swal.fire({
      title: 'Are you sure to submit order',
      confirmButtonText: 'Confirm',
      showDenyButton: true,
      denyButtonText: 'Deny'
    }).then((result) => {
      if (result.isConfirmed) {
        setListCart(list)
        localStorage.setItem('cart', JSON.stringify(list))

        Swal.fire(
          'Success!',
          'You order have been transfer!',
          'success'
        )
      }
    })
  };

  return (
    <div>
      <Table
        className='table'
        id='table'
        pagination={false}

        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        dataSource={listCart}
        rowKey={"id"}>
        <Column title="ID" dataIndex="id" align='center' />
        <Column title="IMAGE" dataIndex="image" align='center'
          render={(_, product) => (
            <img height={50} width={60} src={product.image} alt="..." />
          )}
        />
        <Column title="NAME" dataIndex="name" />
        <Column title="PRICE" dataIndex="price" align='center'
          render={(_, product) => (
            <>{product.price}$</>
          )}
        />
        <Column title="QUANTITY" dataIndex="count" align='center'
          render={(_, product) => (
            <Space size={'middle'}>
              <button className='btn-quantity' disabled={!isEdit}
                onClick={() => handleChangeCount(product.id, product.count, 1)}>+</button>
              <InputNumber type='number' className='inputCount' size='small' disabled={!isEdit}
                value={product.count}
                onChange={(value) => onChangeCount(product.id, product.count, value)}
              />
              <button className='btn-quantity' disabled={!isEdit}
                onClick={() => handleChangeCount(product.id, product.count, -1)}>-</button>
            </Space>
          )}
        />
        <Column title="TOTAL" dataIndex="total" align='center'
          render={(_, product) => (
            <>{product.price * product.count}$</>
          )}
        />
        <Column title="Action" key="action" align='center'
          render={(_, product) => (
            <>
              <button className='btn-edit' onClick={() => setIsEdit(!isEdit)}>{!isEdit ? 'EDIT' : 'SAVE'}</button>
              <button className='btn-delete' onClick={() => handleDelete(product.id)}>DELETE</button>
            </>
          )}
        />
      </Table>
      <div className='d-flex justify-content-end'>
        <button className='submit-order' onClick={handleSubmit}>submit order</button>
      </div>
    </div>
  );
};
export default TableCart;