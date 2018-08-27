import React, { Component } from 'react';
import { Row, Col, Panel, Button } from 'react-bootstrap';
import EditPost from '../Modal/Post/Edit';
import CommentPanel from '../Comment/CommentPanel';
import { removePost } from '../../actions';
import * as PostApi from '../../util/PostApi';
import * as CommentsApi from '../../util/CommentsApi';
import { connect } from 'react-redux';

const addVote = 'addVote';
const removeVote = 'removeVote';
const UP_VOTE = 'upVote';
const DOWN_VOTE = 'downVote';

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
		post: {
			id: null,
			timestamp: 0,
			title: null,
			author: null,
			body: null,
			category: null,
			voteScore: 0,
			deleted: null,
			commentCount: 0
		}
	}

  componentDidMount(){
     this.refresh(this.props.match.params.id);
	}

  refresh = (id) => {
		PostApi.get(id).then((postData) => {
			this.setState({ post: postData });
		});
	};

  addPostVote = (idComment) => {
    PostApi.vote(idComment, UP_VOTE).then(() => {
        this.setState({votes: this.state.votes + 1});
        //this.onVote(this.state.votes);
    });
  };

  removePostVote = (idComment) => {
    PostApi.vote(idComment, DOWN_VOTE).then(() => {
      this.setState({ votes: this.state.votes -1});
      //this.onVote(this.state.votes);
    });
  }

  render(){

    const { votes, post } = this.state;

    return(
      <Row key={ post.id }>
        <Col md={12}>
          <Panel bsStyle="primary">
            <Panel.Heading>
              <Panel.Title>{ post.title}</Panel.Title>
              <h6> { post.author } - { Date(post.timestamp) }</h6>
              <h6> Score: { post.voteScore } </h6>
              <h6> ID: { post.id } </h6>
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
            <Button onClick={() => { this.addPostVote(post.id); }}>Curtir</Button>
            <Button id='descurtir' onClick={() => { this.removePostVote(post.id); }}>Descurtir</Button>
              <CommentPanel
                  idPost = {post.id}
                  key = {post.id}
                  qtdComments = { post.commentCount }
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
