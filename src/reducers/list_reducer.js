import types from '../actions/types'

const DEFAULT_STATE = {
    items:[],
};

export default (state = DEFAULT_STATE, action)=>{
    switch(action.type){
        default:
            return state;
            
    }
}