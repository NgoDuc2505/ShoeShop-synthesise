import './register.scss';
//react
import React from 'react';
//antd
import { Button, Space } from 'antd';
//utils
import useScrollToTop from '../../utils/custom-hook/useScrollToTop';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
// sweet alert
import Swal from 'sweetalert2';

//---------------------------------------------------------------------------------

function Register() {
  useScrollToTop()
  // const formik = formiK();
  
  const regex = {
    nameByVietnamese: /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/,
    password: /^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^& "]).*$/,
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      psConfirm: '',
      phone: '',
      gender: false
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required !').email('Email must be valid'),
      name: Yup.string().matches(regex.nameByVietnamese, 'Name must be valid').required('Name is required !'),
      phone: Yup.number().required('Phone is required'),
      password: Yup.string().min(6, 'Min is 6 characters').max(12, 'Max is 12 characters').required('Password can not be empty').matches(regex.password, 'password must contain at least 1 digit, 1 special character, 1 alphabeltic character !'),
      psConfirm: Yup.string().required('Please confirm your password').oneOf([Yup.ref('password')], 'Passwords must match!')
    }),
    onSubmit: async (values) => {
      try {
        const resp = await axios({
          url: 'https://shop.cyberlearn.vn/api/Users/signup',
          method: 'post',
          data: {
            "email": values.email,
            "password": values.password,
            "name": values.name,
            "gender": values.gender,
            "phone": values.phone
          }
        });
        Swal.fire(
          'Success!',
          'Your profile has been created.',
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
        <div className="register_header">
          <p className='page_title'>Register</p>
        </div>
        <div className="register_body">
          <form action="" className="register_form row" onSubmit={formik.handleSubmit}>
            <div className="col-6">
              <div className="form-group">
                <label className='label_form' htmlFor="email">Email</label>
                <input type="text" className='form-control input_form' placeholder='Email' id='email' name='email'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && <p className='validate'>{formik.errors.email}</p>}
              </div>

              <div className="form-group">
                <label className='label_form' htmlFor="password">Password</label>
                <input type="text" className='form-control input_form' placeholder='Password' id='password' name='password'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && <p className='validate'>{formik.errors.password}</p>}
              </div>

              <div className="form-group">
                <label className='label_form' htmlFor="psConfirm">Password confirm</label>
                <input
                  type="text"
                  className='form-control input_form'
                  placeholder='Password confirm'
                  id='psConfirm'
                  name='psConfirm'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.psConfirm}
                />
                {formik.touched.psConfirm && formik.errors.psConfirm && <p className='validate'>{formik.errors.psConfirm}</p>}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label className='label_form' htmlFor="name">Name</label>
                <input type="text" className='form-control input_form' placeholder='Name' id='name' name='name'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && <p className='validate'>{formik.errors.name}</p>}
              </div>

              <div className="form-group">
                <label className='label_form' htmlFor="phone">Phone</label>
                <input type="text" className='form-control input_form' placeholder='Phone' id='phone' name='phone'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone && <p className='validate'>{formik.errors.phone}</p>}
              </div>

              <div className="gender_choosen d-flex align-content-center">
                <p className='label_form lable_gender'>Gender: </p>
                <div className="form-check">
                  <label className="form-check-label lable_radio label_form text-center" htmlFor="male">
                    <input className="form-check-input" type="radio" name="gender" id="male"
                      checked={formik.values.gender === true}
                      onChange={() => { formik.setFieldValue('gender', true) }}
                      value={true} />
                    <span className="design"></span>
                    <span className='value_gender'>Male</span>
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label lable_radio label_form" htmlFor="female">
                    <input className="form-check-input" type="radio" name="gender" id="female"
                      checked={formik.values.gender === false}
                      onChange={() => { formik.setFieldValue('gender', false) }}
                      value={false} />
                    <span className="design"></span>
                    <span className='value_gender'>Female</span>
                  </label>
                </div>
              </div>

              <Space wrap>
                <Button
                  className='btn_submit_register'
                  shape='round' type="submit"
                  // onClick={() => { submitValid(formik, ['*']) }}
                  htmlType='submit'
                >Submit</Button>
              </Space>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Register