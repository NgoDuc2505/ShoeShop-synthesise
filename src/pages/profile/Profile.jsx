// react
import React from 'react'
import { useSelector } from 'react-redux';
// component
import InputField from '../../components/input-field/InputField'
import RadioGroup from '../../components/input-field/RadioGroup'
import CardProduct from '../../components/CardProduct/CardProduct';
// scss
import './profile.scss'
//antd
import { Button, Space} from 'antd';
// untils
import useScrollToTop from '../../utils/custom-hook/useScrollToTop';
import PaginationWrapper from '../../components/pagination-setup/PaginationWrapper';
import EmptyDataDisplay from '../../components/empty-display/EmptyDataDisplay';

//----------------------------------------------------------------------

function Profile() {
  useScrollToTop()
  const {favoriteProductList, orderHistoryList} = useSelector((state)=> state.productReducer);
  return (
    <>
      <div className="profile_title">
        <p>Profile</p>
      </div>
      <div className="information_area">
        <div className="left_detail">
          <img src="https://tse1.mm.bing.net/th?id=OIP.k5IKliwHRHtKyVramxE8MAHaFj&pid=Api&P=0&h=180" alt="user" />
        </div>
        <div className="right_detail row">
          <div className="col-6 col-right">
            <InputField title={'Email'} field={'email'} />
            <InputField title={'Password'} field={'passsword'} />
          </div>
          <div className="col-6 col-right">
            <InputField title={'Name'} field={'name'} />
            <InputField title={'Phone'} field={'phone'} />
            <div className="radio-group">
              <RadioGroup />
              <Space wrap>
                <Button className='btn_submit_login' shape='round' type="submit">Update</Button>
              </Space>
            </div>
          </div>
        </div>
      </div>
      <div className="pill_tab">
        <div>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="home-tab" data-toggle="tab" data-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Order history</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link nav-link-2" id="profile-tab" data-toggle="tab" data-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Favorite</button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              {orderHistoryList.length > 0 
              ? <PaginationWrapper itemsPerPage={4} items={orderHistoryList}/>
              : <EmptyDataDisplay/>}
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div className="favorite_list">
              {
                favoriteProductList.length > 0 
                ? favoriteProductList?.map((item,index) =>{
                  return (<CardProduct key={index} product={item} show={false} />)}) 
                : <EmptyDataDisplay/>
              }
            </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Profile