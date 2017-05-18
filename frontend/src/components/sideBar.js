import React, { Component } from 'react';
import head from '../../public/head.jpg';

class SideBar extends Component {
  render() {
    return (
      <div className="mdl-cell mdl-cell--2-col mdl-grid--no-spacing sidebar">
        <div className="mdl-cell mdl-cell--12-col mdl-grid--no-spacing sidebar-list">
          <div className="mdl-cell mdl-cell--12-col no-margin sidebar-close-div">
            <i className="material-icons sidebar-close-icon" onClick={this.props.toggleMenu}>close</i>
          </div>
          <div className="mdl-cell mdl-cell--12-col sidebar-head">
            <img className="sidebar-head-img" src={head} width="150px" height="130px"/>
          </div>
          <ul className="demo-list-item mdl-list">
            <li className="mdl-list__item sidebar-list-li">
              <span className="mdl-list__item-primary-content sidebar-list-item">
                <i className="material-icons sidebar-icon">home</i>
                <span className="sidebar-text">Home</span>
              </span>
            </li>
            <li className="mdl-list__item sidebar-list-li">
              <span className="mdl-list__item-primary-content sidebar-list-item">
                <i className="material-icons sidebar-icon">description</i>
                <span className="sidebar-text">Blog</span>
              </span>
            </li>
            <li className="mdl-list__item sidebar-list-li">
              <span className="mdl-list__item-primary-content sidebar-list-item">
                <i className="material-icons sidebar-icon">mode_edit</i>
                <span className="sidebar-text">Comment</span>
              </span>
            </li>
            <li className="mdl-list__item sidebar-list-li">
              <span className="mdl-list__item-primary-content sidebar-list-item">
                <i className="material-icons sidebar-icon">person</i>
                <span className="sidebar-text">About</span>
              </span>
            </li>
            <li className="mdl-list__item sidebar-list-li">
              <span className="mdl-list__item-primary-content sidebar-list-item">
                <i className="material-icons sidebar-icon">send</i>
                <span className="sidebar-text">Contact</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;