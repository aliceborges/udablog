import React, { Component } from 'react';
import { Row, Col, Panel, Button } from 'react-bootstrap';
import AddComment from '../Modal/Comment/Add';
import EditComment from '../Modal/Comment/Edit';
import { connect } from 'react-redux';
import { removeComment } from '../../actions';
import * as CommentsApi from '../../util/CommentsApi';

const mapDispatchToProps = dispatch => {
  return {
    removeComment: idComment => dispatch(removeComment(idComment))
  };
};

class CommentPanel extends Component{

  constructor (props, context){
    super(props, context);

    this.state = {
      comments:[]
    }
  }

  componentDidMount(){
    CommentsApi.getAll(this.props.idPost).then((comments) => {
      this.setState({...this.state, comments});
    });
  }

  render(){

    const { postData, comments } = this.state;
    const { idPost, removeComment } = this.props;

    return(
      <div>
        <Panel.Heading>Comentarios</Panel.Heading>
        { comments && comments.filter(commentData => !commentData.deleted).map(commentData => (
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
            <Button onClick={() => {removeComment(commentData.id)}}> Remover Comentário </Button>
            </Panel.Body>
        ))}
        <Panel.Footer>
          <AddComment idPost = { idPost }></AddComment>
        </Panel.Footer>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(CommentPanel);
