import './listItem.scss'
//react
import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux';
//component
import CardProduct from '../CardProduct/CardProduct'
import axios from 'axios';
import {getLocal} from '/src/utils/localStorage/index.js';
import {ACCESS_TOKEN} from '/src/const/index.js';

//---------------------------------------------------------------------------------

function ListItem(props) {
    const {option, listProductOption} = props;
    const {listProduct, favorList} = useSelector((state) => state.productReducer)
    const [listFavor, setListFavor] = useState([]);
    const [change, setChange] = useState(false);

    const getListFavorite = async () => {
        try {
            const resp = await axios({
                method: 'get',
                url: 'https://shop.cyberlearn.vn/api/Users/getproductfavorite',
                headers: {
                    Authorization: `Bearer ${getLocal(ACCESS_TOKEN)}`
                }
            });
            setListFavor(resp.data.content.productsFavorite)
        } catch (error) {
            throw Error(error)
        }
    };

    useEffect(() => {
        if(getLocal(ACCESS_TOKEN)){
            getListFavorite()
        } else {
            setListFavor(favorList)
        }
    }, [change])

    return (
        <div className="list-product">
            {(option ? listProductOption : listProduct).map((product) =>
                <CardProduct key={product.id} product={product} listFavor={listFavor} setChange={setChange}
                             change={change}/>
            )}
        </div>
    )
}

export default ListItem