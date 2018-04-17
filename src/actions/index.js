export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const ADD_CATEGORY = 'ADD_CATEGORY';

export const addPost = post => ({ type: ADD_POST, post});
export const editPost = post => ({ type: EDIT_POST, post});
export const removePost = idPost => ({ type: REMOVE_POST, idPost});

export const addComment = comment => ({ type: ADD_COMMENT, comment});
export const editComment = comment => ({ type: EDIT_COMMENT, comment});
export const removeComment = idComment => ({ type: REMOVE_COMMENT, idComment});

export const addCategory = category => ({ type: ADD_CATEGORY, category});
