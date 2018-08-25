import React, { Component } from 'react';
import { Navbar, Grid } from 'react-bootstrap';
import ListPosts from './Post/List';
import Post from './Post/Post';
import { connect } from 'react-redux';
import * as CategoriesApi from '../util/CategoriesApi';
import * as PostApi from '../util/PostApi';
import { addCategory, addPost } from '../actions';
import { Route } from 'react-router-dom';
import '../styles/css/bootstrap.min.css';

const mapDispatchToProps = dispatch => {
  return {
    addCategory: category => dispatch(addCategory(category)),
    addPost: post => dispatch(addPost(post))
  };
};

class App extends Component {

  componentDidMount(){
    CategoriesApi.getAll().then((categories) => {
      categories.map(category => {
        this.props.addCategory(category);
        return category;
      });
    });

    PostApi.getAll().then((posts)=>{
      posts.map(post => {
        this.props.addPost(post);
        return post;
      });
    });
  }

  render() {
    return (
      <div>
        <Navbar class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="/">Udablog - Blog da Udacity</a>
            </div>
          </div>
        </Navbar>
        <Grid>
          <Route exact path="/" component={ListPosts}/>
          <Route exact path="/post/:id" component={Post}/>
        </Grid>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
