import React, { Component } from 'react';
import { Row, Col, Jumbotron} from 'react-bootstrap';
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
        <Row>
          <Col md={12}>
            <Jumbotron>
              <h1>Titulo</h1>
              <p>Conteudo</p>
            </Jumbotron>
          </Col>
        </Row>
      </div>
    );
  };
};

export default ListPosts;
