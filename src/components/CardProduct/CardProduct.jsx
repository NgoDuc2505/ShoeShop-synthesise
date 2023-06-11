import './CardProduct.scss';
//axios
import axios from 'axios';
//react
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
//assets
import heartFull from "/src/assets/icons/heartFull.svg";
import heartBorder from "/src/assets/icons/heartBoder.svg";
//utils
import { getLocal } from '/src/utils/localStorage/index.js';
//const
import { ACCESS_TOKEN } from '/src/const/index.js';
//---------------------------------------------------------------------------------

function CardProduct(props) {
    const { product, listFavor, setChange, change } = props;
    const [isFavor, setIsFavor] = useState(false);
    const [imgSrc, setImgSrc] = useState(heartBorder)
    const { favoriteList } = useSelector((state) => state.userReduxSlides);

    useEffect(() => {
        if (listFavor?.find((favorite) => favorite.id === product.id)) {
            setIsFavor(true);
            setImgSrc(heartFull)
        } else {
            setIsFavor(false);
            setImgSrc(heartBorder)
        }
    }, [listFavor])

    useEffect(() => {
        if (favoriteList?.find((favorite) => favorite.id === product.id)) {
            setIsFavor(true);
            setImgSrc(heartFull)
        } else {
            setIsFavor(false);
            setImgSrc(heartBorder)
        }
    }, [favoriteList])

    const changFavorite = async (link) => {
        try {
            await axios({
                method: 'get',
                url: link,
                headers: {
                    Authorization: `Bearer ${getLocal(ACCESS_TOKEN)}`
                }
            });
            await setChange(!change);

        } catch (error) {
            throw Error(error)
        }
    };

    const handleChangeFavorite = (id) => {
        if (getLocal(ACCESS_TOKEN)) {
            changFavorite(`https://shop.cyberlearn.vn/api/Users/${isFavor ? 'unlike' : 'like'}?productId=${id}`)
        } else {
            if (!isFavor) {
                setIsFavor(true);
                setImgSrc(heartFull)
            } else {
                setIsFavor(false);
                setImgSrc(heartBorder)
            }
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
                <button className='card-product-btn price'>{product.price ? product.price : 'Check this '}$</button>
            </div>
            <button className='love-btn' onClick={() => handleChangeFavorite(product.id)}><img src={imgSrc} alt="..." /></button>
        </div>
    )
}

export default CardProduct