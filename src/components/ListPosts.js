import React, { Component } from 'react';
import { Row, Col, Jumbotron, Button, Glyphicon } from 'react-bootstrap';

class ListPosts extends Component{
  render(){
    return(
      <div>
        <Row>
          <Col md={12}>
            <Button bsStyle="primary">
              <Glyphicon glyph="plus"/>+
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Jumbotron>
              <h1>Título</h1>
              <p>Conteúdo</p>
              <span>
                <Button bsStyle="primary">Comentar</Button>
                <Button bsStyle="link">Comentários</Button>
              </span>
            </Jumbotron>
          </Col>
        </Row>
      </div>
    );
  };
};

export default ListPosts;
