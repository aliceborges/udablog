import React, {Component} from 'react';
import {Modal, Button, FormGroup, ControlLabel, FormControl, Glyphicon} from 'react-bootstrap';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import serializeForm from 'form-serialize';
import { addPost } from '../../../actions';

const mapDispatchToProps = dispatch => {
  return{
    addPost: post => dispatch(addPost(post))
  };
};

const mapStateToProps = state => {
  return { categories: state.categories };
};

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

  handleSubmit = (e) => {
    e.preventDefault()
    const post = serializeForm(e.target, {hash:true});
    post.id = uuidv1();
    this.props.addPost(post);
    this.setState({show:false});
  }

  render(){

    const { categories } = this.props;

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
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId='category'>
                <ControlLabel>Categoria:</ControlLabel>
                <FormControl componentClass='select' name='category' id='category'>
                  {categories.map(category => (
                    <option key={category.path} value={category.path}>{category.name}</option>
                  ))}
                </FormControl>
              </FormGroup>
              <FormGroup controlId='title'>
                <ControlLabel>Titulo:</ControlLabel>
                <FormControl id='title' type='text'/>
              </FormGroup>
              <FormGroup controlId='body'>
                <ControlLabel>Conteudo:</ControlLabel>
                <FormControl id='body' type='text'/>
              </FormGroup>
              <FormGroup controlId='author'>
                <ControlLabel>Autor:</ControlLabel>
                <FormControl id='author' type='text'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
