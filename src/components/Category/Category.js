import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import AddPost from '../Modal/Post/Add';
import { connect } from 'react-redux';
import { removePost } from '../../actions';
import Post from '../Post/Post';
import * as PostApi from '../../util/PostApi';

class Category extends Component{

  state = {
    post: [],
    category: null
  }

  componentDidMount(){
     this.refresh(this.props.match.params.category);
  }

  refresh = (category) => {
    PostApi.getByCategory(category).then((postData) => {
      if (postData){
        this.setState({post:postData, category: category});
      }
    });
  };

  render(){

    const { category, post } = this.state;

    return(
      <div>

        <Row>
          <Col md={12}>
            <AddPost></AddPost>
          </Col>
        </Row>
        <br/>
        {post.map(postData => (
          <div key = { postData.category }>
            <h2>{ category }</h2>
              <Post
                key = {postData.id}
                post = {postData}
                idPost = {postData.id}
                votes = { postData.voteScore }
              ></Post>
          </div>
          ))}
      </div>
    );
  };
};

export default Category;
