import React from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import AddPost from '../Modal/Post/Add';
import CommentPanel from '../Comment/CommentPanel';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { post: state.post };
};

const ConnectedListPosts = ({ post }) => (
  <div>
    <Row>
      <Col md={12}>
        <AddPost></AddPost>
      </Col>
    </Row>
    <br/>
    {post.map(postData => (
      <Row key={ postData.id }>
        <Col md={12}>
          <Panel bsStyle="primary">
            <Panel.Heading>
              <Panel.Title>{ postData.title }</Panel.Title>
              <h6> { postData.author } - { postData.timestamp }</h6>
            </Panel.Heading>
            <Panel.Body>
              { postData.body }
            </Panel.Body>
            <Panel.Footer>
              <CommentPanel></CommentPanel>
            </Panel.Footer>
          </Panel>
        </Col>
      </Row>
    ))}
  </div>
);

const ListPosts = connect(mapStateToProps)(ConnectedListPosts);

export default ListPosts;
