import React, { Component } from 'react';
import '../styles/App.css';

class SingleBlogCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card_classname: "mdl-card mdl-shadow--2dp"
    }
    // var socket = io.connect('http://localhost:3001');
    // socket.on('user',function(obj){
    //   console.log(obj)
    // });
  }

  hoverCard() {
    this.setState({card_classname: "mdl-card mdl-shadow--2dp blog-card-hover"});
  }

  blurCard() {
    this.setState({card_classname: "mdl-card mdl-shadow--2dp"});
  }

  render() {
    return (
      <div className="mdl-cell mdl-cell--4-col mdl-grid--no-spacing blog-card">
        <div className={this.state.card_classname} onMouseOver={this.hoverCard.bind(this)} onMouseOut={this.blurCard.bind(this)}>
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">Welcome</h2>
          </div>
          <div className="mdl-card__supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Get Started
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBlogCard;