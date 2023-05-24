import React, { useRef } from 'react';
import './../register/register.scss';
import './login.scss';
import { NavLink } from 'react-router-dom';
import { Button, Space } from 'antd';
import { useFormik} from 'formik';
import * as Yup from 'yup';
function Login() {
  
  const regex = {
    password:/^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^& "]).*$/,
  };
  const formik = useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email must be valid !').required('Please fill in this field !'),
      password: Yup.string().required('Please fill in this field !').matches(regex.password,'Please fill with valid password !(contain at least 1 digit, 1 special character, 1 alphabeltic character)').min(6,'Min is 6 characters').max(12,'Max is 12 characters'),
    })
  });
  const handleLoginClick = ()=>{
    const {values, errors} = formik;
    let isAllValid = true;
    console.log('values:',values);
    console.log('errors:', errors);
    const valueArr = Object.values(values);
    for(let i =0; i < valueArr.length; i++){
      if(!valueArr[i]){
        isAllValid = false;
        alert('Please not let any empty!');
        break;
      }else if(Object.values(errors)[i]){
        isAllValid = false;
        alert('please not let any invalid !');
        break;
      }
    }
    if(isAllValid){
      alert('Success !');
    }
  }
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
              {formik.touched.email && formik.errors.email ? <p className='validate'>{formik.errors.email}</p> : null }
            </div>
            <div className="form-group form-group-login">
              <label htmlFor="password" className='label_form' >Password</label>
              <input type="password" className='form-control input_form' id='password' placeholder='Password' 
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? <p className='validate'>{formik.errors.password}</p> : null }
            </div>
            <div className="form_action form-group-login">
              <NavLink to={'/register'}>Register now ?</NavLink>
              <Space wrap>
                <Button className='btn_submit_login' shape='round' type="submit" onClick={handleLoginClick}>Log in</Button>
              </Space>
            </div>
            <div className="form-group-login facebook-login">
              <NavLink to={'/continue-facebook'}>
                <img src="src/assets/icons/facebook.svg" alt="facebook" />
                Continue with Facebook</NavLink>
            </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login