import * as constant from './constant';

export const reducer = (state = {}, action) => {
    console.log("paa", action)
    switch (action.type) {
       case constant.ACTION_FORM: 
            {
                return state[action.type] = action.payload;
            }
       default: 
            return state
    }
 }