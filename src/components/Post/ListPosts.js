import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import AddPost from '../Modal/Post/Add';

class ListPosts extends Component{
  render(){
    return(
      <div>
        <Row>
          <Col md={12}>
            <AddPost></AddPost>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md={12}>
            <div class='panel panel-default'>
              <div class="panel-body">
                <h1>Titulo</h1>
                <h6>Autor - Data de Postagem</h6>
                <p>Conteudo</p>
              </div>
               <div class="panel-footer">
                <p>Comentarios</p>
               </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  };
};

export default ListPosts;
