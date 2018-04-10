import React from 'react';
import { Row, Col, Panel, Button } from 'react-bootstrap';
import AddPost from '../Modal/Post/Add';
import EditPost from '../Modal/Post/Edit';
import CommentPanel from '../Comment/CommentPanel';
import { connect } from 'react-redux';
import { removePost } from '../../actions';

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
        {post.filter(postData => !postData.deleted && post.category === category.path).map(postData => (
          <Row key={ postData.id }>
            <Col md={12}>
              <Panel bsStyle="primary">
                <Panel.Heading>
                  <Panel.Title>{ postData.title }</Panel.Title>
                  <h6> { postData.author } - { postData.timestamp }</h6>
                </Panel.Heading>
                <Panel.Body>
                  { postData.body }
                  <Button onClick={() => {removePost(postData.id)}}> Remover Post </Button>
                </Panel.Body>
                <Panel.Footer>
                  <CommentPanel
                    idPost = {postData.id}
                    key = {postData.id}
                  >
                  </CommentPanel>
                </Panel.Footer>
              </Panel>
            </Col>
          </Row>
        ))}
      </div>
    ))}
  </div>
);

const ListPosts = connect(mapStateToProps, mapDispatchToProps)(ConnectedListPosts);

export default ListPosts;
