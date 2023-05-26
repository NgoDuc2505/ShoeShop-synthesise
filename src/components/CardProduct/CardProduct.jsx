import './CardProduct.scss';
//react
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { setFavoriteProductList, removeFavoriteProduct } from '/src/redux/redux-slides/productListSlide.js'
import { useDispatch } from 'react-redux';
//assets
import heartFull from "/src/assets/icons/heartFull.svg";
import heartBorder from "/src/assets/icons/heartBoder.svg";

//---------------------------------------------------------------------------------

function CardProduct(props) {
    const dispatch = useDispatch();
    const { product, show, favoriteProd } = props;
    const [isFavor, setIsFavor] = useState();
    const [imgSrc, setImgSrc] = useState(heartBorder)
    
    useEffect(() => {
        if (favoriteProd.find((favorite) => favorite.id === product.id)) {
            setIsFavor(true);
            setImgSrc(heartFull)
        } else {
            setImgSrc(heartBorder)
        }
    }, [favoriteProd])

    const handleChangeFavorite = () => {
        dispatch(!isFavor ?
            setFavoriteProductList(product) :
            removeFavoriteProduct(product.id)
        )
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