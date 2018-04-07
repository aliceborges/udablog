import React, { Component } from 'react';
import { connect } from 'react-redux';
import serializeForm from 'form-serialize';
import { editPost } from '../../../actions';
import uuidv1 from 'uuid';
import {Modal, Button, FormGroup, ControlLabel, FormControl, Glyphicon} from 'react-bootstrap';

const mapDispatchToProps = dispatch => {
  return {
    editPost: post => dispatch(editPost(post))
  };
};

class EditPost extends Component{
  constructor(props, context){
    super (props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleShow(){
    this.setState({show:true});
  }

  handleClose(){
    this.setState({show:false});
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const post = serializeForm(e.target, {hash:true});
    post.id = uuidv1();
    this.props.addPost(post);
    this.setState({show:false});
  }

  render(){

    const { post } = this.props;

    return(
      <div>
        <Button bsStyle='primary' onClick={this.handleShow}>
          <Glyphicon glyph="edit" /> Editar Post
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>
              Editar Post
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId='title'>
                <ControlLabel>Titulo:</ControlLabel>
                <FormControl id='title' type='text' defaultValue={ post.title }/>
              </FormGroup>
              <FormGroup controlId='body'>
                <ControlLabel>Conteudo:</ControlLabel>
                <FormControl id='body' type='text' defaultValue={ post.body }/>
              </FormGroup>
              <FormGroup controlId='author'>
                <ControlLabel>Autor:</ControlLabel>
                <FormControl id='author' type='text' defaultValue={ post.author }/>
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Fechar</Button>
            <Button bsStyle='primary'>Cadastrar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default connect (null, mapDispatchToProps)(EditPost)
