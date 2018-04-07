import React, { Component } from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import AddComment from '../Modal/Comment/Add';

class CommentPanel extends Component{
  render(){

    const { postData } = this.props

    return(
      <div>
        <Panel.Heading>Comentarios</Panel.Heading>
        { this.props.comment && this.props.comment.map(commentData => (
          <Panel.Body key = { commentData.id }>
            <Panel bsStyle="primary">
              <Panel.Heading>{ commentData.author } - { commentData.timestamp }</Panel.Heading>
              <Panel.Body>
                <p> { commentData.body } </p>
              </Panel.Body>
            </Panel>
            </Panel.Body>
        ))}
        <Panel.Footer>
          <AddComment idPost = { postData.id }></AddComment>
        </Panel.Footer>
      </div>
    );
  };
};

export default CommentPanel;
