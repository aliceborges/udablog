import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AddPost from '../Modal/Post/Add';
import { connect } from 'react-redux';
import { removePost } from '../../actions';
import Post from './Post';

const mapStateToProps = state => {
  return {
    post: state.post,
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removePost: idPost => dispatch(removePost(idPost))
  };
};

const ConnectedListPosts = ({ post, categories, removePost }) => (
  <div>
    <Row>
      <Col md={12}>
        <AddPost></AddPost>
      </Col>
    </Row>
    <br/>
    {categories.map(category => (
      <div key = { category.path }>
        <h2>{ category.name }</h2>
        <h6><a href={'/' + category.name}>Ir ao site da categoria.</a></h6>
        {post.filter(postData => !postData.deleted && postData.category === category.path).map(postData => (
          <Post
            key = {postData.id}
            post = {postData}
            idPost = {postData.id}
            votes = { postData.voteScore }
          ></Post>
        ))}
      </div>
    ))}
  </div>
);

const ListPosts = connect(mapStateToProps, mapDispatchToProps)(ConnectedListPosts);

export default ListPosts;
