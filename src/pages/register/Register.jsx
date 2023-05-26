import React from 'react';
import { Button, Space } from 'antd';
import './register.scss';
import { useFormik} from 'formik';
import * as Yup from 'yup';
import formiK, {submitValid} from '../../utils/formik/formikGenerate';
import useScroolToTop from '../../utils/custom-hook/useScroolToTop';

function Register() {
  useScroolToTop()
  const formik = formiK();
 
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
                <label  className='label_form' htmlFor="email">Email</label>
                <input type="text" className='form-control input_form' placeholder='Email' id='email' name='email' 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? <p className='validate'>{formik.errors.email}</p> : null}
              </div>

              <div className="form-group">
                <label  className='label_form' htmlFor="password">Password</label>
                <input type="password" className='form-control input_form' placeholder='Password' id='password' name='password' 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? <p className='validate'>{formik.errors.password}</p> : null}
              </div>

              <div className="form-group">
                <label  className='label_form' htmlFor="psConfirm">Password confirm</label>
                <input type="password" className='form-control input_form' placeholder='Password confirm' id='psConfirm' name='psConfirm' 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.psConfirm}
                />
               {formik.touched.psConfirm && formik.errors.psConfirm ? <p className='validate'>{formik.errors.psConfirm}</p> : null}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label  className='label_form' htmlFor="name">Name</label>
                <input type="text" className='form-control input_form' placeholder='Name' id='name' name='name'
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? <p className='validate'>{formik.errors.name}</p> : null}
              </div>

              <div className="form-group">
                <label  className='label_form' htmlFor="phone">Phone</label>
                <input type="number" className='form-control input_form' placeholder='Phone' id='phone' name='phone'
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone ? <p className='validate'>{formik.errors.phone}</p> : null}
              </div>

              <div className="gender_choosen d-flex align-content-center">
                <p className='label_form lable_gender'>Gender: </p>
                <div className="form-check">
                  <label className="form-check-label lable_radio label_form text-center" htmlFor="male">
                  <input className="form-check-input" type="radio" name="gender" id="male"
                  checked={formik.values.gender === 'true'}
                  onChange={()=>{formik.setFieldValue('gender','true')}}
                  value="true" />
                  <span className="design"></span>
                    <span className='value_gender'>Male</span>
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label lable_radio label_form" htmlFor="female">
                  <input className="form-check-input" type="radio" name="gender" id="female" 
                  checked={formik.values.gender === 'false'}
                  onChange={()=>{formik.setFieldValue('gender','false')}}
                  value='false' />
                  <span className="design"></span>
                    <span className='value_gender'>Female</span>
                  </label>
                </div>
              </div>

              <Space wrap>
                <Button className='btn_submit_register' shape='round' type="submit" onClick={()=>{submitValid(formik,['*'])}}>Submit</Button>
              </Space>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Register