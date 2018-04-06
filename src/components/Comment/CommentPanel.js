import React, { Component } from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import AddComment from '../Modal/Comment/Add';

class CommentPanel extends Component{
  render(){
    return(
      <div>
        <Panel.Heading>Comentarios</Panel.Heading>
        <Panel.Body>
          <Panel bsStyle="primary">
            <Panel.Heading>Autor - Data</Panel.Heading>
            <Panel.Body>
              <p>Conteudo</p>
            </Panel.Body>
          </Panel>
          </Panel.Body>
          <Panel.Footer>
            <AddComment></AddComment>
          </Panel.Footer>
      </div>
    );
  };
};

export default CommentPanel;
