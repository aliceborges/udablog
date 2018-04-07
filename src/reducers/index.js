import {
  ADD_POST,
  ADD_COMMENT
} from '../actions';
import { searchId } fromm '../util/helper';

const initialState = { post: [] };

const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_POST:
      return{
        ...state,
        post: [...state.post, action.post]
      };
    case ADD_COMMENT:
      const index = searchId(state.post, action.comment.parentId);
      const post - state.post[index];

      if (post.comment){
        post.comment = [...post.comment, action.comment];
      }
      else{
        post.comment = [action.comment];
      }

      state.post[index] = post;

      return state;
      
    default:
      return state;
    }
};

export default reducer;
