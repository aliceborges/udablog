const api = 'http://localhost:3001/posts';
const apiComment = 'http://localhost:3001/comments';

const headers = {
  'Accept': 'application/json',
  'Authorization': 'anything'
};

export const getAll = (idPost) => fetch(api + '/' + idPost + '/comments', {headers}).then(res=>res.json());

export const add = (comment) =>
fetch(apiComment,{
	method: 'POST',
	headers: {
	  ...headers,
	  'Content-Type': 'application/json'
	},
	body: JSON.stringify(comment)
}).then(res => res.json());

export const edit = (comment) =>
fetch(apiComment +'/'+ comment.id, {
	method: 'PUT',
	headers: {
	  ...headers,
	  'Content-Type': 'application/json'
	},
	body: JSON.stringify(comment)
}).then(res => res.json());

export const remove = (id) =>
fetch(apiComment +'/'+ id, {
	method: 'DELETE',
	headers
}).then(res => res.json());

export const voted = (id, option) =>
fetch(apiComment +'/'+ id,{
	method: 'POST',
	headers: {
	  ...headers,
	  'Content-Type': 'application/json'
	},
	body: JSON.stringify({ option })
}).then(res => res.json());
