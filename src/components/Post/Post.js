import React, { Component } from 'react';
import { Row, Col, Panel, Button } from 'react-bootstrap';
import EditPost from '../Modal/Post/Edit';
import CommentPanel from '../Comment/CommentPanel';
import { removePost } from '../../actions';
import * as PostApi from '../../util/PostApi';
import { connect } from 'react-redux';

const addVote = 'addVote';
const removeVote = 'removeVote';

const mapDispatchToProps = dispatch => {
  return {
    removePost: idPost => (
      dispatch(removePost(idPost)),
      PostApi.remove(idPost)
    )
  }
};

class Post extends Component{

  state = {
    option: addVote
  }

  vote = (idComment) => {
    if (this.state.option === addVote){
      PostApi.vote(idComment, removeVote).then(() => {
        this.setState({option:removeVote});
      });
    }
    else{
      PostApi.vote(idComment, addVote).then(() => {
        this.setState({option:addVote});
      });
    };
  };

  render(){

    const { post } = this.props;

    return(
      <Row key={ post.id }>
        <Col md={12}>
          <Panel bsStyle="primary">
            <Panel.Heading>
              <Panel.Title>{ post.title }</Panel.Title>
              <h6> { post.author } - { Date(post.timestamp) }</h6>
              <h6> Score: { post.voteScore } </h6>
            </Panel.Heading>
            <Panel.Body>
              { post.body }
              <Button
                onClick={() => {
                  this.props.removePost(post.id)
                }}
              >
                Remover Post
              </Button>
              <EditPost
                key = {post.id}
                idPost = {post.id}
                post = {post}
              ></EditPost>
            </Panel.Body>
            <Panel.Footer>
            <Button onClick={() => { this.vote(post.id); }}>{this.state.option === addVote ? 'Curtir' : 'Descurtir'}</Button>
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

export default connect (null, mapDispatchToProps)(Post);
