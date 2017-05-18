import React, { Component } from 'react';
import '../styles/App.css';

class BlogMenuBar extends Component {
  constructor(props) {
    super(props);
    // var socket = io.connect('http://localhost:3001');
    // socket.on('user',function(obj){
    //   console.log(obj)
    // });
    this.state = {
      bar_button_classname: "mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect blog-top-bar-button",
      bar_menu_classname: "blog-top-bar-menu",
      bar_button_menu: false,
      bar_button_close: false
    }
  }

  toggleBar() {
    if(this.state.bar_button_close===true){
      this.setState({
        bar_menu_classname: "blog-top-bar-menu"
      });
    }
    if(this.state.bar_button_close===false){
      this.setState({
        bar_menu_classname: "blog-top-bar-menu blog-top-bar-menu-show"
      });
    }

    this.setState({
      bar_button_close: !this.state.bar_button_close
    });
  }

  hoverBar() {
    clearTimeout(this.time_menu);
    this.setState({
      bar_button_classname: "mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect blog-top-bar-button blog-top-bar-button-show"
    });
    this.time_left = setTimeout(
      () => { this.setState({bar_button_menu: true }); },
      500
    );
  }

  blurBar() {
    clearTimeout(this.time_left);
    this.setState({
      bar_button_classname: "mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect blog-top-bar-button"
    });
    this.time_menu = setTimeout(
      () => { this.setState({bar_button_menu: false }); },
      500
    );
  }

  render() {
    return (
      <div className="blog-top-bar">
        <div className="half-circle"></div>
        <div className={this.state.bar_menu_classname}>
        </div>
        <div className="blog-top-bar-button-div">
          { this.state.bar_button_close ? 
            <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect blog-top-bar-button" onClick={this.toggleBar.bind(this)}>
              <i className="material-icons">close</i>
            </button> : 
            <button className={this.state.bar_button_classname} onClick={this.toggleBar.bind(this)} onMouseOver={this.hoverBar.bind(this)} onMouseOut={this.blurBar.bind(this)}>
              { this.state.bar_button_menu ? <i className="material-icons">chevron_left</i> : <i className="material-icons">menu</i> }
            </button> 
          }         
        </div>
      </div>
    );
  }
}

export default BlogMenuBar;
