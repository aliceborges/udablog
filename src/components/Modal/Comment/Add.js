import React, {Component} from 'react';
import {Modal, Button, FormGroup, ControlLabel, FormControl, Glyphicon} from 'react-bootstrap';
import uuidv1 from 'uuid';
import serializeForm from 'form-serialize';

class AddComment extends Component{
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
    comment.id = uuidv1();
    comment.parentId = this.state.idPost;
    this.props.added(comment);
    this.handleClose();
  }

  render(){
    return(
      <div>
        <Button bsStyle='primary' onClick={this.handleShow}>
          <Glyphicon glyph="plus" /> Adicionar Comentario
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>
              Adicionar Comentario
            </Modal.Title>
          </Modal.Header>
          <form onSubmit = { this.handleSubmit }>
            <Modal.Body>
              <FormGroup controlId='body'>
                <ControlLabel>Comentario:</ControlLabel>
                <FormControl id='body' name='body' type='text'/>
              </FormGroup>
              <FormGroup controlId='author'>
                <ControlLabel>Autor:</ControlLabel>
                <FormControl id='author' name='author' type='text'/>
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Fechar</Button>
              <Button bsStyle='primary' type='submit'>Comentar</Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

export default AddComment;
