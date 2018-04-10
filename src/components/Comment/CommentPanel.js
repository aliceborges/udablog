import React, { Component } from 'react';
import { Row, Col, Panel, Button } from 'react-bootstrap';
import AddComment from '../Modal/Comment/Add';
import EditComment from '../Modal/Comment/Edit';
import { connect } from 'react-redux';
import { removeComment } from '../../actions';
import * as CommentsApi from '../../util/CommentsApi';

this.state = {
  comments: []
};

const mapStateToProps = state => {
  return { comment: state.comment };
};

const mapDispatchToProps = dispatch => {
  return {
    removeComment: idComment => dispatch(removeComment(idComment))
  };
};

class CommentPanel extends Component{
  render(){

    const { postData, comment, idPost } = this.state

    return(
      <div>
        <Panel.Heading>Comentarios</Panel.Heading>
        { comment && comment.filter(c => !c.deleted).map(commentData => (
          <Panel.Body key = { commentData.id }>
            <Panel bsStyle="primary">
              <Panel.Heading>{ commentData.author } - { commentData.timestamp }</Panel.Heading>
              <Panel.Body>
                <p> { commentData.body } </p>
              </Panel.Body>
            </Panel>
            <EditComment
              key = { commentData.id }
              commentId = { commentData.id }
              comment = { commentData }
            >
            </EditComment>
            <Button onClick={() => {this.props.removeComment(commentData.id)}}> Remover Comentário </Button>
            </Panel.Body>
        ))}
        <Panel.Footer>
          <AddComment idPost = { postData.id }></AddComment>
        </Panel.Footer>
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentPanel);
