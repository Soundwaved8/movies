import { ADD_DATA, GET_DATA } from "../actions/database";

const initialState = {
    users:[]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) =>{
    switch(action.type){
        case GET_DATA:
            return{
                ...state,
                users:action.payload
            }
        case ADD_DATA:
                return{
                    ...state
                }
        default:
            return state
    }
}