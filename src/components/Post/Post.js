import React, { Component } from 'react';
import { Row, Col, Panel, Button } from 'react-bootstrap';
import AddPost from '../Modal/Post/Add';
import EditPost from '../Modal/Post/Edit';
import CommentPanel from '../Comment/CommentPanel';
import { connect } from 'react-redux';
import { removePost } from '../../actions';
import * as PostApi from '../../util/PostApi';

class Post extends Component{
  render(){

    const { post } = this.props;

    return(
      <Row key={ post.id }>
        <Col md={12}>
          <Panel bsStyle="primary">
            <Panel.Heading>
              <Panel.Title>{ post.title }</Panel.Title>
              <h6> { post.author } - { post.timestamp }</h6>
            </Panel.Heading>
            <Panel.Body>
              { post.body }
              <Button
                onClick={() => {
                  PostApi.remove(post.id).then(()=>{
                    removePost(post.id);
                  });
                }}
              >
                Remover Post
              </Button>
            </Panel.Body>
            <Panel.Footer>
              <CommentPanel
                idPost = {post.id}
                key = {post.id}
              >
              </CommentPanel>
            </Panel.Footer>
          </Panel>
        </Col>
      </Row>
    )
  }
}

export default Post;
