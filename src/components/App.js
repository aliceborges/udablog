import React, { Component } from 'react';
import { Navbar, Grid } from 'react-bootstrap';
import ListPosts from './Post/ListPosts';

import '../styles/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>Udablog - Blog da Udacity</Navbar>
        <Grid>
          <ListPosts></ListPosts>
        </Grid>
      </div>
    );
  }
}

export default App;
