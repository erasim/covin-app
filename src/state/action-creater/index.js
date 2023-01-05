export const depositMoney=(amount)=>{
return(dispatch)=>{

    dispatch({
        type:'deposit',
        payload: amount
    })

}
}
export const withdrawlMoney=(amount)=>{
    return(dispatch)=>{

        dispatch({
            type:'widthdraw',
            payload: amount
        })
    
    }

}
export const fetchUsersdata=(id)=>{
    return(dispatch)=>{

        dispatch({
            type:'fetchUser',
            payload: id
        })
    
    }

}