import './login.scss';
import './../register/register.scss';
//antd
import { Button, Space } from 'antd';
//react
import React from 'react';
import { NavLink } from 'react-router-dom';
//utils
import formiK, { submitValid } from '../../utils/formik/formikGenerate';
import useScrollToTop from '../../utils/custom-hook/useScrollToTop';

//---------------------------------------------------------------------------------

function Login() {
  useScrollToTop()
  const formik = formiK();

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
                  type="submit"
                  onClick={() => { submitValid(formik, ['email', 'password']) }}
                >
                  Log in
                </Button>
              </Space>
            </div>
            <div className="form-group-login facebook-login">
              <NavLink to={'/continue-facebook'}>
                <img src="src/assets/icons/facebook.svg" alt="facebook" />
                Continue with Facebook
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login