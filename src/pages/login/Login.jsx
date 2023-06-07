import './login.scss';
import './../register/register.scss';
//antd
import { Button, Space } from 'antd';
//react
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
//utils
// import formiK, { submitValid } from '../../utils/formik/formikGenerate';
import useScrollToTop from '../../utils/custom-hook/useScrollToTop';

//libaries
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

//utils
import { setLocal } from '/src/utils/localStorage/index.js';
//constant
import { ACCESS_TOKEN } from '/src/const/index.js'
//sweet alert
import Swal from 'sweetalert2';
import FacebookLogin from 'react-facebook-login';

//---------------------------------------------------------------------------------

function Login() {
  const responseFacebook = (resp) => {
    console.log(resp)
  }
  const navigate = useNavigate()
  useScrollToTop()
  // const formik = formiK();
  const regex = {
    nameByVietnamese: /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/,
    password: /^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^& "]).*$/,
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('this field is required !').email('Email must be valid'),
      password: Yup.string().min(6, 'Min is 6 characters').max(12, 'Max is 12 characters').required('Password can not be empty').matches(regex.password, 'password must contain at least 1 digit, 1 special character, 1 alphabeltic character !'),
    }),
    onSubmit: async (values) => {
      try {
        const resp = await axios.post(
          'https://shop.cyberlearn.vn/api/Users/signin',
          {
            email: values.email,
            password: values.password
          }
        )
        setLocal(ACCESS_TOKEN, resp.data.content.accessToken)
        navigate('/profile')
        Swal.fire(
          'Success!',
          'You have been navigated to your profile.',
          'success'
        )
      } catch (err) {
        console.log(err)
        Swal.fire(
          'Error!',
          `${err.response.data.message} !`,
          'error'
        )
      }

    },
  });
  return (
    <>
      <div className="container">
        <div className="login_header">
          <p className="page_title">
            Login
          </p>
        </div>
        <div className="login_body">
          <form action="" className='login_form' onSubmit={formik.handleSubmit}>
            <div className="form-group form-group-login">
              <label htmlFor="email" className='label_form' >Email</label>
              <input type="text" className='form-control input_form' id='email' placeholder='Email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && <p className='validate'>{formik.errors.email}</p>}
            </div>
            <div className="form-group form-group-login">
              <label htmlFor="password" className='label_form' >Password</label>
              <input type="password" className='form-control input_form' id='password' placeholder='Password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && <p className='validate'>{formik.errors.password}</p>}
            </div>
            <div className="form_action form-group-login">
              <NavLink to={'/register'}>Register now ?</NavLink>
              <Space wrap>
                <Button
                  className='btn_submit_login'
                  shape='round'
                  htmlType='submit'
                // onClick={() => { submitValid(formik, ['email', 'password']) }}
                >
                  Log in
                </Button>
              </Space>
            </div>
            <div className="form-group-login facebook-login">
              {/* <NavLink to={'/continue-facebook'}>
                <img src="src/assets/icons/facebook.svg" alt="facebook" />
                Continue with Facebook
              </NavLink> */}
              <FacebookLogin
                appId="552885443724769"
                autoLoad={false}
                fields="name,email,picture"
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
                callback={responseFacebook} />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login