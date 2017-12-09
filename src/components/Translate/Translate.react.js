import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserPreferencesStore from '../../stores/UserPreferencesStore';
import de from './de.json';
import am from './am.json';
<<<<<<< HEAD
import chs from './chs.json';
=======
import zh from './zh.json';
import es from './es.json';
import hi from './hi.json';
import jp from './jp.json';
>>>>>>> fossasia/master

class Translate extends Component{

  constructor(props){
    super(props);
    this.state ={
      text: this.props.text,
      defaultPrefLanguage: UserPreferencesStore.getPrefLang()
    }
  }

  changeLanguage = (text) => {
        this.setState({
            text:text
        })
  }

  componentDidMount() {
    let defaultPrefLanguage = this.state.defaultPrefLanguage;

    // Declaring arrays with various available localisations.
    var arrDe = Object.keys(de);
    var arrAm = Object.keys(am);
<<<<<<< HEAD
    var arrChs = Object.keys(chs);
    let text = this.state.text;
    if(defaultPrefLanguage!=='en-US'){
      console.log(defaultPrefLanguage);
      for (let key=0;key<arrDe.length;key++) {
=======
    var arrCh = Object.keys(zh);
    var arrSp = Object.keys(es);
    var arrHi = Object.keys(hi);
    var arrJp = Object.keys(jp);

    let text = this.state.text;
    if(defaultPrefLanguage!=='en-US'){
      if(defaultPrefLanguage==='de-DE'){
        for (let key=0;key<arrDe.length;key++) {
>>>>>>> fossasia/master
          if (arrDe[key]===text) {
              this.changeLanguage(de[arrDe[key]]);
          }
        }
      }

      if(defaultPrefLanguage==='am-AM'){
        for (let key=0;key<arrAm.length;key++) {
          if (arrAm[key]===text) {
            this.changeLanguage(am[arrAm[key]]);
          }
        }
      }

      if(defaultPrefLanguage==='es-SP'){
        for (let key=0;key<arrSp.length;key++) {
          if (arrSp[key]===text) {
            this.changeLanguage(es[arrSp[key]]);
          }
        }
      }

      if(defaultPrefLanguage==='zh-CH'){
        for (let key=0;key<arrCh.length;key++) {
          if (arrCh[key]===text) {
            this.changeLanguage(zh[arrCh[key]]);
          }
        }
      }

      if(defaultPrefLanguage==='hi-IN'){
        for (let key=0;key<arrHi.length;key++) {
          if (arrHi[key]===text) {
              this.changeLanguage(hi[arrHi[key]]);
          }
        }
      }

      if(defaultPrefLanguage==='jp-JP'){
        for (let key=0;key<arrJp.length;key++) {
          if (arrJp[key]===text) {
              this.changeLanguage(jp[arrJp[key]]);
          }
        }
<<<<<<< HEAD

      for (let key=0;key<arrChs.length;key++) {
          if (arrChs[key]===text) {
              this.changeLanguage(chs[arrChs[key]]);
          }
        }
=======
      }
>>>>>>> fossasia/master
  }

}
  render() {
    return <span>{this.state.text}</span>
  }

}


Translate.propTypes = {
  text:PropTypes.string
}
export default Translate;
