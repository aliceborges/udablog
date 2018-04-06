import React, {Component} from 'react';
import {Modal, Button, FormGroup, ControlLabel, FormControl, Glyphicon} from 'react-bootstrap';

class AddPost extends Component{
  constructor(props, context){
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show:false
    };
  }

  handleShow(){
    this.setState({show:true});
  }

  handleClose(){
    this.setState({show:false});
  }

  render(){
    return(
      <div>
        <Button bsStyle='primary' onClick={this.handleShow}>
          <Glyphicon glyph="plus" /> Adicionar Post
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>
              Adicionar Post
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup controlId='titulo'>
                <ControlLabel>Titulo:</ControlLabel>
                <FormControl id='titulo' type='text'/>
              </FormGroup>
              <FormGroup controlId='conteudo'>
                <ControlLabel>Conteudo:</ControlLabel>
                <FormControl id='conteudo' type='text'/>
              </FormGroup>
              <FormGroup controlId='autor'>
                <ControlLabel>Autor:</ControlLabel>
                <FormControl id='autor' type='text'/>
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
}

export default AddPost;
