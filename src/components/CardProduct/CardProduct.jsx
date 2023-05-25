import './CardProduct.scss';
//react
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { setFavoriteProductList, removeFavoriteProduct} from '/src/redux/redux-slides/productListSlide.js'
import { useDispatch } from 'react-redux';
//---------------------------------------------------------------------------------

function CardProduct(props) {
    const dispatch = useDispatch();
    const { product, show, favoriteProd } = props;
    let isFavorite = false;
    // Kiểm tra nếu sản phẩm đã thích có trong list thích thì trả isFavorite về true.
    favoriteProd?.forEach((item)=>{
        if(item.id === product.id){
            isFavorite = true;
        }
    })
    const [favorite, setFavorite] = useState(isFavorite ? true : false);
    const [imgSrc, setImgSrc] = useState(isFavorite ?  "/src/assets/icons/heartFull.svg" :"/src/assets/icons/heartBoder.svg")

    const handleChangeFavorite = () => {
        setFavorite(!favorite)
        setImgSrc(favorite ? "/src/assets/icons/heartBoder.svg" : "/src/assets/icons/heartFull.svg")
        if(!favorite){
            // thích
            dispatch(setFavoriteProductList(product))
        }else if(favorite){
            // bỏ thích
            dispatch(removeFavoriteProduct(product.id))
        }
    }

    return (
        <div className='card-product'>
            <div className="card-product-img">
                <img src={product.image} alt="..." />
            </div>
            <div className="card-product-content">
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>
            </div>
            <div className="card-product-interact ">

                <NavLink to={`/detail/` + product.id} className='card-product-btn buy-now'>Buy now</NavLink>
                <button className='card-product-btn price'>{product.price}$</button>
            </div>
            {show &&
                <button className='love-btn' onClick={() => handleChangeFavorite()}><img src={imgSrc} alt="..." /></button>
            }
        </div>
    )
}

export default CardProduct