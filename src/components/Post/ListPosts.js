import React, { Component } from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import AddPost from '../Modal/Post/Add';
import CommentPanel from '../Comment/CommentPanel';

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
            <Panel bsStyle="primary">
              <Panel.Heading>
                <Panel.Title>Titulo</Panel.Title>
                <h6>Autor - Data de Postagem</h6>
              </Panel.Heading>
              <Panel.Body>
                Conteudo
              </Panel.Body>
              <Panel.Footer>
                <Panel.Heading>Comentarios</Panel.Heading>
                <Panel.Body>
                  <CommentPanel></CommentPanel>
                </Panel.Body>
              </Panel.Footer>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  };
};

export default ListPosts;
