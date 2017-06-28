import React, { Component } from 'react';
import * as io from 'socket.io-client';
import SingleBlogCard from '../components/singleBlogCard';
import BlogMenuBar from '../components/blogMenuBar';
import Dialog from 'material-ui/Dialog';
import '../styles/App.css';

class Blog extends Component {
  constructor(props) {
    super(props);
    var socket = io.connect('http://localhost:3001');
    console.log('dd',navigator.geolocation)
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function (position) {
        socket.emit('login',{latitude: position.coords.latitude,longitude: position.coords.longitude});
      })
    }
    this.state = {open: false};
    // socket.on('user',function(obj){
    //   console.log(obj)
    // });
  }
  
  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  render() {
    let data = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    let cards = data.map(function(card){
      return <SingleBlogCard />;
    });
    return (
      <div className="mdl-grid mdl-grid--no-spacing">
        <div className="mdl-cell mdl-cell--12-col mdl-grid--no-spacing blog-background">
          <div className="mdl-cell mdl-cell--9-col mdl-grid--no-spacing blog-home">
            {cards}          
          </div>
        </div>
        <Dialog  open={this.state.open} modal={false}  title="Dialog With Actions">
          The actions in this window were passed in as an array of React objects.
        </Dialog>
        <BlogMenuBar />
        <button label="Dialog" onClick={this.handleOpen.bind(this)}>sssssssss</button>
      </div>
    );
  }
}

export default Blog;