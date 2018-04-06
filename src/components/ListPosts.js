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
              <h1>T�tulo</h1>
              <p>Conte�do</p>
              <span>
                <Button bsStyle="primary">Comentar</Button>
                <Button bsStyle="link">Coment�rios</Button>
              </span>
            </Jumbotron>
          </Col>
        </Row>
      </div>
    );
  };
};

export default ListPosts;
