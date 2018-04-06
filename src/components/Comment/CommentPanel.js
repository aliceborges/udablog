import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import AddComment from '../Modal/Comment/Add';

class CommentPanel extends Component{
  render(){
    return(
      <div>
        <p>Conteudo</p>
        <h6>Autor - Data</h6>
        <AddComment></AddComment>
      </div>
    );
  };
};

export default CommentPanel;
