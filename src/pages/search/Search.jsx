import React from 'react'
import SearchProduct from '../../components/SeachProduct/SearchProduct'
import './Search.scss';
import { Button } from 'antd';

function Search() {
  return (
    <div className='search'>
      <p className='search-text'>Search</p>
      <div className='search-group'>
        <input className='input-search' type="text" placeholder='Product name...' />
        <Button className='btn-search' shape='round'>Search</Button>
      </div>
      <h2 className='search-feature'>Search result</h2>
      <SearchProduct />
    </div>
  )
}

export default Search