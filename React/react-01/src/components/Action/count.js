import actionTypes from './ActionTypes';

export const increment = (id)=>{
    return {
        type:actionTypes.COUNT_INCREMENT,
        payload:{
            id
        }
    }
}

export const decrement = (id)=>{
    return {
       type:actionTypes.COUNT_DECREMENT,
        payload:{
            id
        }
    }
}