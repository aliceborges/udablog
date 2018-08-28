import React, { Component } from 'react';
import { Navbar, Grid } from 'react-bootstrap';
import ListPosts from './Post/List';
import PostID from './Post/PostID';
import Category from './Category/Category';
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
        <Navbar className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">Udablog - Blog da Udacity</a>
            </div>
          </div>
        </Navbar>
        <Grid>
          <Route exact path="/" component={ListPosts}/>
          <Route exact path="/:category/:post_id" component={PostID}/>
          <Route exact path="/:category" component={Category}/>
        </Grid>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
