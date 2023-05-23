import React from 'react'
import { Button, Space } from 'antd';
import './register.scss'
function Register() {
  return (
    <>
      <div className="container">
        <div className="register_header">
          <p className='page_title'>Register</p>
        </div>
        <div className="register_body">
        <form action="" className="register_form row">
            <div className="col-6">
              <div className="form-group">
                <label  className='label_form' htmlFor="email">Email</label>
                <input type="text" className='form-control input_form' placeholder='Email' id='email' name='email' />
                <p className='validate'>validation</p>
              </div>

              <div className="form-group">
                <label  className='label_form' htmlFor="password">Password</label>
                <input type="password" className='form-control input_form' placeholder='Password' id='password' name='password' />
                <p className='validate'>validation</p>
              </div>

              <div className="form-group">
                <label  className='label_form' htmlFor="psConfirm">Password confirm</label>
                <input type="password" className='form-control input_form' placeholder='Password confirm' id='psConfirm' name='psConfirm' />
                <p className='validate'>validation</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label  className='label_form' htmlFor="name">Name</label>
                <input type="text" className='form-control input_form' placeholder='Name' id='name' name='name' />
                <p className='validate'>validation</p>
              </div>

              <div className="form-group">
                <label  className='label_form' htmlFor="phone">Phone</label>
                <input type="number" className='form-control input_form' placeholder='Phone' id='phone' name='phone' />
                <p className='validate'>validation</p>
              </div>

              <div className="gender_choosen d-flex align-content-center">
                <p className='label_form lable_gender'>Gender: </p>
                <div className="form-check">
                  <label className="form-check-label lable_radio label_form text-center" htmlFor="male">
                  <input className="form-check-input" type="radio" name="gender" id="male" defaultValue="option1" defaultChecked />
                  <span className="design"></span>
                    <span className='value_gender'>Male</span>
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label lable_radio label_form" htmlFor="female">
                  <input className="form-check-input" type="radio" name="gender" id="female" defaultValue="option1" />
                  <span className="design"></span>
                    <span className='value_gender'>Female</span>
                  </label>
                </div>
              </div>

              <Space wrap>
                <Button className='btn_submit_register' shape='round' type="primary">Submit</Button>
              </Space>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Register