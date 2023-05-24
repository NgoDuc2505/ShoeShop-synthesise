import React from 'react'
import InputField from '../../components/input-field/InputField'

function Profile() {
  return (
    <>
    <div className="profile_title">
      <p>Profile</p>
    </div>
    <div className="imformation_area">
      <div className="left_detail">
        <img src="https://tse1.mm.bing.net/th?id=OIP.k5IKliwHRHtKyVramxE8MAHaFj&pid=Api&P=0&h=180" alt="user" />
      </div>
      <div className="right_detail"></div>
    </div>
    <InputField title={'Email'} field={'email'}/>
    <InputField title={'Password'} field={'passsword'}/>
    <InputField title={'Name'} field={'name'}/>
    <InputField title={'Phone'} field={'phone'}/>
    </>
  )
}

export default Profile