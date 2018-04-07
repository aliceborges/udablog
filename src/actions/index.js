export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';

export const addPost = post => ({ type: ADD_POST, post});
export const editPost = post => ({ type: EDIT_POST, post});

export const addComment = comment => ({ type: ADD_COMMENT, comment });
export const editComment = comment => ({ type: EDIT_COMMENT, comment });
