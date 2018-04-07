import React, { Component } from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import AddComment from '../Modal/Comment/Add';
import EditComment from '../Modal/Comment/Edit';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { comment: state.comment };
};

class CommentPanel extends Component{
  render(){

    const { postData, comment, idPost } = this.props

    return(
      <div>
        <Panel.Heading>Comentarios</Panel.Heading>
        { comment && comment.filter(c => c.parentId === idPost).map(commentData => (
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
            </Panel.Body>
        ))}
        <Panel.Footer>
          <AddComment idPost = { postData.id }></AddComment>
        </Panel.Footer>
      </div>
    );
  };
};

export default connect(mapStateToProps)(CommentPanel);
