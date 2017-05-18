import React, { Component } from 'react';
import * as io from 'socket.io-client';
import SingleBlogCard from '../components/singleBlogCard';
import BlogMenuBar from '../components/blogMenuBar';
import '../styles/App.css';

class Blog extends Component {
  constructor(props) {
    super(props);
    // var socket = io.connect('http://localhost:3001');
    // socket.on('user',function(obj){
    //   console.log(obj)
    // });
  }

  render() {
    let data = [1,2,3,4,5,6,7,8,9,10,11];
    let cards = data.map(function(card){
      return <SingleBlogCard />
    });
    return (
      <div className="mdl-grid mdl-grid--no-spacing">
        <div className="mdl-cell mdl-cell--12-col mdl-grid--no-spacing blog-background">
          <div className="mdl-cell mdl-cell--9-col mdl-grid--no-spacing blog-home">
            {cards}          
          </div>
        </div>
        
        <BlogMenuBar />
      </div>
    );
  }
}

export default Blog;