import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';
import AddComment from '../Modal/Comment/Add';
import EditComment from '../Modal/Comment/Edit';
import { connect } from 'react-redux';
import { addComment } from '../../actions';
import Comment from './Comment';
import * as CommentsApi from '../../util/CommentsApi';
import uuidv1 from 'uuid';
import serializeForm from 'form-serialize';

const mapStateToProps = (state, dispatch) => {
  return {
    addComment: comment => dispatch(addComment(comment)),
    comment: state.comment
 };
}

class CommentPanel extends Component{

  constructor (props, context){
    super(props, context);

    this.state = {
      comments:[],
      qtdComments: this.props.qtdComments
    }
  }

  componentDidMount(){
    CommentsApi.getAll(this.props.idPost).then((comments) => {
      this.setState({...this.state, comments});
    });
  }

  added = (comment) => {
    CommentsApi.add(comment).then((res) => {
      this.setState({ ...this.state, comments: [ ...this.state.comments, res ] });
      this.setState({qtdComments: this.state.qtdComments + 1})
    });
  }

  remove = (idComment) => {
      const deleteComment = this.state.comments.map(item => {
        if (item.id === idComment){
          return {...item, deleted:true};
        }
        else{
          return item;
        }
      });
      this.setState({ ...this.state, comments: deleteComment });
      this.setState({qtdComments: this.state.qtdComments - 1});
  };

  render(){

    const { comments, qtdComments } = this.state;
    const { idPost, removeComment, eddited } = this.props;

    return(
      <div>
        <Panel.Heading>Comentarios</Panel.Heading>
        <h6>Quantidade de comentários: { qtdComments }</h6>
        { comments && comments.filter(commentData => !commentData.deleted).map(commentData => (
          <Comment
            key = { commentData.id }
            commentData = { commentData }
            remove = { this.remove }
          ></Comment>
        ))}
        <Panel.Footer>
          <AddComment
            idPost = { idPost }
            added = {this.added}
          ></AddComment>
        </Panel.Footer>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(CommentPanel);
