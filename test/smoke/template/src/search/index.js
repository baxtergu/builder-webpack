'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { common } from '../../common/index';
import largeNumber from '../../large-number';
import logo from './images/logo.jpg';
import { a } from './tree-shaking';
import './search.less';

if (false) {
  a();
}

class Search extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      Text: null
    };
  }

  loadComponent() {
    import('./text.js').then(Text => {
      this.setState({
        Text: Text.default
      });
    });
  }

  render() {
    const { Text } = this.state;
    const addResult = largeNumber('999', '1');
    common();
    return (
      <div className="search-text">
        {Text ? <Text /> : null}
        {addResult}
        搜索文字的内容
        <img src={logo} onClick={this.loadComponent.bind(this)} />
      </div>
    );
  }
}

ReactDom.render(<Search />, document.getElementById('root'));
