import { ADD_POST } from '../actions';

const initialState = { post: [] };

const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_POST:
      return{
        ...state,
        post: [...state.post, action.obj_post]
      };
    default:
      return state;
    }
};

export default reducer;
