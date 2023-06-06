// react
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// component
import CardProduct from '../../components/CardProduct/CardProduct';
import { profileThunkAction } from '../../redux/redux-slides/userReduxSlides';

// scss
import './profile.scss'
//antd
import { Button, Space } from 'antd';
// untils
import useScrollToTop from '../../utils/custom-hook/useScrollToTop';
import PaginationWrapper from '../../components/pagination-setup/PaginationWrapper';
import EmptyDataDisplay from '../../components/empty-display/EmptyDataDisplay';
import { getLocal } from '/src/utils/localStorage/index.js';
//constant
import { ACCESS_TOKEN } from '/src/const/index.js';
import GoLogin from '../../components/go-to-login/GoLogin';
import { useFormik } from 'formik';
import * as Yup from 'yup';
//services
import axios from 'axios';
// sweet alert
import Swal from 'sweetalert2';
//----------------------------------------------------------------------

function Profile() {
  const [imgLink,setImgLink] = useState('')
  useScrollToTop()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(profileThunkAction())
  }, [])
  const { favoriteProductList, orderHistoryList } = useSelector((state) => state.productReducer);
  const { profileData } = useSelector((state) => state.userReduxSlides)
  const { avatar, gender, password, name, phone, email, orderHistory } = profileData

  const regex = {
    nameByVietnamese: /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/,
    password: /^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^& "]).*$/,
  }
  const formik = useFormik({
    initialValues: {
      email: '_',
      name: '_',
      password: '_',
      phone: '_',
      gender: gender,
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required !').email('Email must be valid'),
      name: Yup.string().matches(regex.nameByVietnamese, 'Name must be valid').required('Name is required !'),
      phone: Yup.number().required('Phone is required'),
      password: Yup.string().min(6, 'Min is 6 characters').max(12, 'Max is 12 characters').required('Password can not be empty').matches(regex.password, 'password must contain at least 1 digit, 1 special character, 1 alphabeltic character !'),
    }),
    onSubmit: async (values) => {
      try{
        const resp = await axios({
          method:'post',
          url:'https://shop.cyberlearn.vn/api/Users/updateProfile',
          data:{...values},
          headers:{
            Authorization: `Bearer ${getLocal(ACCESS_TOKEN)}`
          }
        });
        Swal.fire(
          'Success!',
          `${resp.data.content}`,
          'success'
        )
      }catch(error){
        Swal.fire(
          'Error!',
          `${error.response.data.message} !`,
          'error'
        )
        throw Error(error)
      }
    }
  });
  const handleChangeAvaLink=(e)=>{
    setImgLink(e.target.value)
  }
  const handleUploadAvatar =  async()=>{
   try{
    const resp = await axios({
      method:'post',
      url:`https://shop.cyberlearn.vn/api/Users/uploadavatar=${imgLink}`
    })
   }catch(err){
    throw Error(err)
   }
  }
  return (
    <>
      {getLocal(ACCESS_TOKEN)
        ? (<>
          <div className="profile_title">
            <p>Profile</p>
          </div>
          <div className="information_area">
            <div className="left_detail">
              <img src={avatar} alt="user" />
              <input type="text" onChange={handleChangeAvaLink}/>
              <button onClick={handleUploadAvatar}>LInk update</button>
            </div>
            <form action="" onSubmit={formik.handleSubmit}>
              <div className="right_detail row">
                <div className="col-6 col-right">
                  <div className="form-group">
                    <label className='label_form' htmlFor="email">Email</label>
                    <input type="text" className='form-control input_form' placeholder='Email' id='email' name='email'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={(formik.values.email === '_' && !formik.touched.email) ? email : formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && <p className='validate'>{formik.errors.email}</p>}
                  </div>
                  <div className="form-group">
                    <label className='label_form' htmlFor="password">Password</label>
                    <input type="text" className='form-control input_form' placeholder='Password' id='password' name='password'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={(formik.values.password === '_' && !formik.touched.password) ? (password ?? '************') : formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password && <p className='validate'>{formik.errors.password}</p>}
                  </div>
                </div>
                <div className="col-6 col-right">
                <div className="form-group">
                <label className='label_form' htmlFor="name">Name</label>
                <input type="text" className='form-control input_form' placeholder='Name' id='name' name='name'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={(formik.values.name === '_' && !formik.touched.name) ? name : formik.values.name}
                />
                {formik.touched.name && formik.errors.name && <p className='validate'>{formik.errors.name}</p>}
              </div>
              <div className="form-group">
                <label className='label_form' htmlFor="phone">Phone</label>
                <input type="text" className='form-control input_form' placeholder='Phone' id='phone' name='phone'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={(formik.values.phone === '_' && !formik.touched.phone) ? phone : formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone && <p className='validate'>{formik.errors.phone}</p>}
              </div>
                  <div className="radio-group">
                    
                  <div className="gender_choosen d-flex align-content-center">
                <p className='label_form lable_gender'>Gender: </p>
                <div className="form-check">
                  <label className="form-check-label lable_radio label_form text-center" htmlFor="male">
                    <input className="form-check-input" type="radio" name="gender" id="male"
                      checked={formik.values.gender === true ? true : gender }
                      onChange={() => { formik.setFieldValue('gender', true) }}
                      value={true} />
                    <span className="design"></span>
                    <span className='value_gender'>Male</span>
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label lable_radio label_form" htmlFor="female">
                    <input className="form-check-input" type="radio" name="gender" id="female"
                      checked={formik.values.gender === false ? true : !gender }
                      onChange={() => { formik.setFieldValue('gender', false) }}
                      value={false} />
                    <span className="design"></span>
                    <span className='value_gender'>Female</span>
                  </label>
                </div>
              </div>

                    <Space wrap>
                      <Button className='btn_submit_login' shape='round' htmlType='submit'>Update</Button>
                    </Space>
                  </div>
                </div>
              </div>
            </form>
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
                    ? <PaginationWrapper itemsPerPage={4} items={orderHistoryList} />
                    : <EmptyDataDisplay />}
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="favorite_list">
                    {
                      favoriteProductList.length > 0
                        ? favoriteProductList?.map((item, index) => {
                          return (<CardProduct key={index} product={item} show={false} />)
                        })
                        : <EmptyDataDisplay />
                    }
                  </div>
                </div>
              </div>
            </div>

          </div>
        </>) :
        (
          <GoLogin />
        )}

    </>
  )
}

export default Profile