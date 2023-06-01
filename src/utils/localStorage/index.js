
export const getLocal = (key)=>{
    return JSON.parse(localStorage.getItem(key))
};

export const setLocal = (key,data)=>{
    return localStorage.setItem(key,JSON.stringify(data))
}

export const deleteLocalStrgKey = (key)=>{
    return localStorage.removeItem(key)
}