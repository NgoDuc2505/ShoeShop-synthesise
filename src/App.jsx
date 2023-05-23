
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePlate from './templates/home-template/HomePlate'
// import Home from './pages/home/Home'
// import Login from './pages/login/Login'
// import Profile from './pages/profile/Profile'
// import Detail from './pages/detail/Detail'
// import Register from './pages/register/Register'
// import Search from './pages/search/Search'
// import Cart from './pages/cart/Cart'
import { lazy } from 'react';


const Home = lazy(()=>{ return import('./pages/home/Home')});
const Login = lazy(()=>{ 
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(import('./pages/login/Login'))},1000)
  })});
const Profile = lazy(()=>{ return import('./pages/profile/Profile')});
const Detail = lazy(()=>{ return import('./pages/detail/Detail')});
const Register = lazy(()=>{ return import('./pages/register/Register')});
const Search = lazy(()=>{ return import('./pages/search/Search')});
const Cart = lazy(()=>{ return import('./pages/cart/Cart')});
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<HomePlate/>}>
        <Route index element={<Home/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
        <Route path='detail' element={<Detail/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='search' element={<Search/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
