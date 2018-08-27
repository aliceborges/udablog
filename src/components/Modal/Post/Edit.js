import React, { Component } from 'react';
import { connect } from 'react-redux';
import serializeForm from 'form-serialize';
import { editPost } from '../../../actions';
import {Modal, Button, FormGroup, ControlLabel, FormControl, Glyphicon} from 'react-bootstrap';
import * as PostApi from '../../../util/PostApi';

const mapDispatchToProps = dispatch => {
  return {
    editPost: post => dispatch(editPost(post))
  };
};

const mapStateToProps = state => {
  return { categories: state.categories };
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

    PostApi.edit(this.props.idPost, post).then((res)=>{
      this.props.editPost(res);
      this.props.edditedPost(res);
      this.setState({show:false});
    });
  }

  render(){

    const { post, categories } = this.props;

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
          <form onSubmit={this.handleSubmit}>
          <Modal.Body>
              <FormGroup controlId='category'>
                <ControlLabel>Categoria:</ControlLabel>
                <FormControl componentClass='select' name='category' id='category'>
                  {categories.map(category => (
                    <option
                      key={category.path}
                      value={category.path}
                      selected={ post.category == category.path }
                    >{category.name}</option>
                  ))}
                </FormControl>
              </FormGroup>
              <FormGroup controlId='title'>
                <ControlLabel>Titulo:</ControlLabel>
                <FormControl name='title' id='title' type='text' defaultValue={ post.title }/>
              </FormGroup>
              <FormGroup controlId='body'>
                <ControlLabel>Conteudo:</ControlLabel>
                <FormControl name='body' id='body' type='text' defaultValue={ post.body }/>
              </FormGroup>
              <FormGroup controlId='author'>
                <ControlLabel>Autor:</ControlLabel>
                <FormControl name='author' id='author' type='text' defaultValue={ post.author }/>
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
};

export default connect (mapStateToProps, mapDispatchToProps)(EditPost)
