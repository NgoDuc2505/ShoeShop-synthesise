import React, { useRef } from 'react';
import { Carousel } from 'antd';
import './carousel.scss'
import { useSelector } from 'react-redux';
const contentStyle = {
    margin: 0,
    height: '53rem',
    color: '#fff',
    textAlign: 'center',
    background: '#fff',
    position: 'relative',
  };
function CarouselOponent() {
  const listItem = useSelector((state)=>{return state.listProductSliceReducer.listItem})
    const carouRef = useRef();
    const onChange = (currentSlide) => {
        // console.log(currentSlide);
      };
    const renderFeature = ()=>{
        const listFilterByFeature = listItem.filter((item)=>{
           return item.feature === true;
        });
        return listFilterByFeature.map((item,index)=>{
          return(
            <div key={index}>
            <div className="content_carousel" style={contentStyle}>
                <div className="left_carousel">
                    <img src={item.image} alt="..." />
                </div>
                <div className="right_carousel">
                    <p className='prod_name'>{item.name}</p>
                    <p className='prod_des'>{item.description}</p>
                    <button className='prod_btn'>Buy now</button>
                </div>
            </div>
          </div>
          )
        })
    }
  return (
    <div className='carousel_contain'>
    <button className='prev_btn' onClick={()=>{carouRef.current.prev()}}><img src="/src/assets/icons/prev.svg" alt="..."/></button>
    <Carousel autoplay effect='fade' ref={carouRef} afterChange={onChange}>
      {renderFeature()}
      <div>
      <div className="content_carousel" style={contentStyle}>
            <div className="left_carousel">
                <img src="https://cdna.lystit.com/photos/jdsports/0daa91c9/adidas-originals-Blue-Aerobounce-Running-Shoes.jpeg" alt="..." />
            </div>
            <div className="right_carousel">
                <p className='prod_name'>Product Name</p>
                <p className='prod_des'>Product Description...</p>
                <button className='prod_btn'>Buy now</button>
            </div>
        </div>
      </div>
    </Carousel>
    <button className='next_btn' onClick={()=>{carouRef.current.next()}}><img src="/src/assets/icons/next.svg" alt="..."/></button>
    </div>
  )
}

export default CarouselOponent;