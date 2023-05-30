import React, { useState } from 'react';
import './SearchProduct.scss'

const sort = [
    {
        value: 'decrease',
        label: 'decrease',
    },
    {
        value: 'ascending',
        label: 'ascending',
    },
];

function SearchProduct() {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className='search-result'>
            <p>Price</p>
            <select className="search-select">
                <option className='search-option' value="decrease">decrease</option>
                <option className='search-option' value="ascending">ascending</option>
            </select>
        </div>
    )
}

export default SearchProduct