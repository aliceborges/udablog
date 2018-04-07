import {
  ADD_POST,
  EDIT_POST,
  ADD_COMMENT,
  EDIT_COMMENT
} from '../actions';
import { searchId } from '../util/helper';

const initialState = { post: [] };

const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_POST:
      return{
        ...state,
        post: [...state.post, action.post]
      };
    case EDIT_POST:
      const updatePost = state.post.map(item=>{
        if(item.id === action.post.id){
          return {...item, ...action.post};
        }
        else{
          return item;
        }
      });

      return {...state, post: updatePost};
    case ADD_COMMENT:
      const index = searchId(state.post, action.comment.parentId);
      const post = state.post[index];

      if (post.comment){
        post.comment = [...post.comment, action.comment];
      }
      else{
        post.comment = [action.comment];
      }

      state.post[index] = post;

      return state;
    case EDIT_COMMENT:
      const updateComment = state.comment.map(item => {
        if (item.id === action.comment.id){
          return { ...item, ...action.comment };
        }
        else{
          return item;
        }
      });
      return { ...state, comment:updateComment }
    default:
      return state;
    }
};

export default reducer;
