import axios, { Axios } from 'axios';

export const getListShoe= async ()=>{
    let listApi = [];
    await axios({
        method:'get',
        url: 'https://shop.cyberlearn.vn/api/Product'
    })
    .then((rs)=>{
        // console.log(rs.data.content);
        listApi = rs.data.content;
    })
    .catch((err)=>{
        console.log(err)
    });
    // console.log(listApi)
    return listApi;
}
