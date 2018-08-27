import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';
import AddComment from '../Modal/Comment/Add';
import EditComment from '../Modal/Comment/Edit';
import { connect } from 'react-redux';
import * as CommentsApi from '../../util/CommentsApi';
import uuidv1 from 'uuid';
import serializeForm from 'form-serialize';
import { removeComment } from '../../actions';

const addVote = 'addVote';
const removeVote = 'removeVote';

const mapDispatchToProps = dispatch => {
  return {
    removeComment: idComment => dispatch(removeComment(idComment))
  };
};

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

  remove = (idComment) => {
    CommentsApi.remove(idComment).then((res) => {
      this.props.removeComment(idComment);
      this.props.remove(idComment);
    });
  };

  render(){

    const { comments, commentData } = this.state;
    const { idPost, eddited, onRemove } = this.props;

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
                <Button
                  onClick={() => {
                    this.remove(commentData.id)
                  }}
                > Remover Comentario </Button>
              </Panel.Body>
            </Panel>
            </Panel.Body>
      </div>
    )
  }
}

export default connect (null, mapDispatchToProps)(Comment);
