import MessageSection from './MessageSection/MessageSection.react';
import React, { Component } from 'react';
import './ChatApp.css';
import history from '../../history';


export default class ChatApp extends Component {

  componentDidMount() {
      document.title = '云豆豆-人工智能云聊天机器人';
      // force an update if the URL changes
      history.listen(() => this.forceUpdate());
   }

  render() {
    return (
      <div className='chatapp'>
        <MessageSection {...this.props}/>
      </div>
    );
  }

};
