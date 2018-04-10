import React, { Component } from 'react';
import { Navbar, Grid } from 'react-bootstrap';
import ListPosts from './Post/List';
import { connect } from 'react-redux';

import '../styles/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">Udablog - Blog da Udacity</a>
            </div>
          </div>
        </Navbar>
        <Grid>
          <ListPosts></ListPosts>
        </Grid>
      </div>
    );
  }
}

export default App;
