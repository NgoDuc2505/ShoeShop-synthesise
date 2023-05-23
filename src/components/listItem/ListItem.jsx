import React, { useEffect } from 'react'
import './listItem.scss'
import { getListShoe } from './../../services/getListShoe'
import { useDispatch, useSelector } from 'react-redux';
import { getAPIList } from './../../redux/redux-slides/productListSlide'
function ListItem() {
  const dispatch = useDispatch()
  let stateSelector = useSelector((state) => {
    console.log("stae using useSelector",state)
    return state.listProductSliceReducer.listItem;
  });
  let listAPIitem = stateSelector;
  useEffect(() => {
    getListShoe().then((data) => {
      dispatch(getAPIList(data))
    })
  }, []);
  const renderListItem = () => {
    return listAPIitem.map((item,index)=>{
        return (
          (
            <div className="col-4" key={index}>
              <div className="card card-prod">
                <div className="img-wrapper">
                  <img src={item.image} alt={`...${item.name}`} />
                </div>
                <div className="card-body">
                  <p className='card-body-title card-body-pEle'>{item.name}</p>
                  <p className='card-body-des card-body-pEle'>Product detail...</p>
                  <div className="btn_card_wrapper">
                    <button>Buy now</button>
                    <p>{item.price}</p>
                  </div>
                </div>
                <button className='love-btn'><img src="/src/assets/icons/heartFull.svg" alt="..." /></button>
              </div>
            </div>
          )
        )
    })
    
  }

  return (
    <div>
      <div className="prod_list_header">
        <p>Product Feature</p>
      </div>
      <div className="prod_list_content">
        <div className="prod_list_wrapper row w-100">
          {renderListItem()}
          <div className="col-4">
            <div className="card card-prod">
              <div className="img-wrapper">
                <img src="https://cdna.lystit.com/photos/jdsports/0daa91c9/adidas-originals-Blue-Aerobounce-Running-Shoes.jpeg" alt="..." />
              </div>
              <div className="card-body">
                <p className='card-body-title card-body-pEle'>Product Default</p>
                <p className='card-body-des card-body-pEle'>Product detail...</p>
                <div className="btn_card_wrapper">
                  <button>Buy now</button>
                  <p>85$</p>
                </div>
              </div>
              <button className='love-btn'><img src="/src/assets/icons/heartFull.svg" alt="..." /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListItem