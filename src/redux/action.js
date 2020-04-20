import * as constant from './constant';

export const formAction = (param) => {    
    return (dispatch, getState) => {
        dispatch({
            type: constant.ACTION_FORM,
            payload: param.payload
        })
    }
 }
