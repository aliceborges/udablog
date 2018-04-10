import React from 'react';
import { Row, Col, Panel, Button } from 'react-bootstrap';
import AddPost from '../Modal/Post/Add';
import EditPost from '../Modal/Post/Edit';
import CommentPanel from '../Comment/CommentPanel';
import { connect } from 'react-redux';
import { removePost } from '../../actions';

const mapStateToProps = state => {
  return { post: state.post };
};

const mapDispatchToProps = dispatch => {
  return {
    removePost: idPost => dispatch(removePost(idPost))
  };
};

const ConnectedListPosts = ({ post }) => (
  <div>
    <Row>
      <Col md={12}>
        <AddPost></AddPost>
      </Col>
    </Row>
    <br/>
    {post.filter(postData => !postData.deleted).map(postData => (
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
);

const ListPosts = connect(mapStateToProps, mapDispatchToProps)(ConnectedListPosts);

export default ListPosts;
