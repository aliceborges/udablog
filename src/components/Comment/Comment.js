import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';
import AddComment from '../Modal/Comment/Add';
import EditComment from '../Modal/Comment/Edit';
import { connect } from 'react-redux';
import { removeComment, addComment, editComment } from '../../actions';
import * as CommentsApi from '../../util/CommentsApi';
import uuidv1 from 'uuid';
import serializeForm from 'form-serialize';

const addVote = 'addVote';
const removeVote = 'removeVote';

class Comment extends Component{

  constructor (props, context){
    super(props, context);

    this.state = {
      commentData: this.props.commentData,
      option: addVote
    }
  }

  vote = (idComment) => {
    if (this.state.option === addVote){
      CommentsApi.vote(idComment, removeVote).then(() => {
        this.setState({option:removeVote});
      });
    }
    else{
      CommentsApi.vote(idComment, addVote).then(() => {
        this.setState({option:addVote});
      });
    };
  };

  edditedComment = (comment) => {
    this.setState({ commentData : comment });
  };

  render(){

    const { comments, commentData } = this.state;
    const { idPost, removeComment, eddited } = this.props;

    return(
      <div>
          <Panel.Body key = { commentData.id }>
            <Panel bsStyle="primary">
              <Panel.Heading>{ commentData.author } - { Date(commentData.timestamp) }</Panel.Heading>
              <Panel.Body>
                <p> { commentData.body } </p>
                <Button onClick={() => { this.vote(commentData.id); }}>{this.state.option === addVote ? 'Curtir' : 'Descurtir'}</Button>
                <EditComment
                  key = { commentData.id }
                  commentId = { commentData.id }
                  comment = { commentData }
                  idPost = { idPost }
                  edditedComment = { this.edditedComment }
                >
                </EditComment>
                <Button onClick={ this.remove }> Remover Comentario </Button>
              </Panel.Body>
            </Panel>
            </Panel.Body>
      </div>
    )
  }
}

export default Comment;
