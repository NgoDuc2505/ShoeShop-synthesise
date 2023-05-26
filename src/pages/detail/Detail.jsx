import React, { useEffect } from 'react'
import './Detail.scss'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useScrollToTop from '../../utils/custom-hook/useScrollToTop'
import { setProductDetail } from '../../redux/redux-slides/productListSlide'
import DetailProduct from '../../components/DetailProduct/DetailProduct'
import CardProduct from '../../components/CardProduct/CardProduct'


function Detail() {
	useScrollToTop()
	const params = useParams()
	const dispatch = useDispatch()

	const { productDetail } = useSelector(state => state.productReducer)

	const getProductById = async (id) => {
		const result = await axios.get(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`)
		const action = setProductDetail(result.data.content)
		dispatch(action)
	}

	useEffect(() => {
		getProductById(params.productID)
	}, [params.productID])

	return (
		<div>
			<DetailProduct />
			<h3 className='relate-product'>- Relate Product -</h3>
			<div className="row" style={{marginLeft:'8.4rem',marginBottom:'10.6rem'}}>
			{productDetail.relatedProducts?.map((product) => 
						<div className="col-4" key={product.id}>
							<CardProduct product={product}  />
						</div>
			)}
			</div>
		</div>
	)
}

export default Detail