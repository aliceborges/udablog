import React, {Component} from 'react';
import {Modal, Button, FormGroup, ControlLabel, FormControl, Glyphicon} from 'react-bootstrap';
import serializeForm from 'form-serialize';

class EditComment extends Component{
  constructor(props, context){
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show:false,
      idPost: props.idPost
    };
  }

  handleShow(){
    this.setState({...this.state, show:true});
  }

  handleClose(){
    this.setState({...this.state, show:false});
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const comment = serializeForm(e.target, { hash: true });
    comment.id = this.props.commentId;
    comment.parentId = this.props.idPost;
    this.props.eddited(comment);
    this.handleClose();
  }

  render(){

    const { comment } = this.props;

    return(
      <div>
        <Button bsStyle='primary' onClick={this.handleShow}>
          <Glyphicon glyph="edit" /> Editar Comentario
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>
              Editar Comentario
            </Modal.Title>
          </Modal.Header>
          <form onSubmit = { this.handleSubmit }>
            <Modal.Body>
              <FormGroup controlId='body'>
                <ControlLabel>Comentario:</ControlLabel>
                <FormControl id='body' type='text' name='body' defaultValue = { comment.body }/>
              </FormGroup>
              <FormGroup controlId='author'>
                <ControlLabel>Autor:</ControlLabel>
                <FormControl id='author' type='text' name='author' defaultValue = { comment.author }/>
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Fechar</Button>
              <Button bsStyle='primary' type='submit'>Editar</Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

export default EditComment;
